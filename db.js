import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 設定資料庫連線路徑
const dbPath = path.join(__dirname, 'db', 'sqlite.db');
const dbDir = path.dirname(dbPath);

// 若 db 資料夾不存在則先建立，避免 sqlite 找不到路徑報錯
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// 連線並開啟資料庫，若檔案不存在則會自動建立
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('開啟/建立 SQLite 資料庫失敗：', err.message);
  } else {
    console.log('成功連接 / 建立 SQLite 資料庫 (位置: db/sqlite.db)');
    
    // 初始化資料表：若雞排價格(chicken_price) table 不存在則建立
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS chicken_price (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        provider TEXT NOT NULL,
        price INTEGER NOT NULL,
        date TEXT NOT NULL
      )
    `;
    
    db.run(createTableQuery, (err) => {
      if (err) {
        console.error('建立 chicken_price 資料表失敗：', err.message);
      } else {
        console.log('chicken_price 資料表已準備就緒（若不存在則已自動建立）');
      }
    });
  }
});

export default db;
