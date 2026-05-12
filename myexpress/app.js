import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { fileURLToPath } from 'url';
import sqlite3 from 'sqlite3';
import fs from 'fs';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// 設定資料庫連線路徑
const dbPath = path.join(__dirname, 'db', 'sqlite.db');
const dbDir = path.dirname(dbPath);

// 若 db 資料夾不存在則先建立，避免 sqlite 找不到路徑報錯
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// 連線並開啟資料庫
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('開啟狀態區資料庫失敗：', err.message);
  } else {
    console.log('成功連接 / 建立 SQLite 資料庫 (位置: db/sqlite.db)');
  }
});

// 如果後續路由需要使用到 db，可以考慮將它存入 locals 等
app.locals.db = db;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 查詢雞排價格的 GET 路由
app.get('/api/price', (req, res) => {
  const query = 'SELECT * FROM chicken_price';
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error('查詢失敗：', err.message);
      return res.status(500).json({ error: '資料庫查詢失敗' });
    }
    res.json(rows);
  });
});

// 根據 provider 查詢雞排資料的 GET 路由
app.get('/api', (req, res) => {
  const provider = req.query.provider;
  if (!provider) {
    return res.status(400).json({ error: '缺少 provider 查詢參數' });
  }

  const query = 'SELECT * FROM chicken_price WHERE provider = ?';
  db.all(query, [provider], (err, rows) => {
    if (err) {
      console.error('查詢失敗：', err.message);
      return res.status(500).json({ error: '資料庫查詢失敗' });
    }
    res.json(rows);
  });
});

// 新增資料的 GET 路由
app.get('/api/insert', (req, res) => {
  const { provider, price, date } = req.query;
  
  if (!provider || price === undefined || !date) {
    return res.status(400).send('缺少必要欄位：provider, price, date');
  }

  const query = 'INSERT INTO chicken_price (provider, price, date) VALUES (?, ?, ?)';
  db.run(query, [provider, price, date], function(err) {
    if (err) {
      console.error('新增失敗：', err.message);
      return res.status(500).send('資料庫新增失敗');
    }
    res.send(`新增成功！資料 ID 為：${this.lastID}`);
  });
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
