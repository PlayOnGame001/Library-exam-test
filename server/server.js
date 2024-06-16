const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/upload', upload.single('image'), (req, res) => {
  if (req.file) {
    res.json({ imageUrl: `/uploads/${req.file.filename}` });
  } else {
    res.status(400).json({ error: 'Файл не загружен' });
  }
});

app.get('/products', (req, res) => {
  fs.readFile('db.json', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Ошибка чтения файла' });
    } else {
      const db = JSON.parse(data);
      res.json(db.products);
    }
  });
});

app.post('/products', (req, res) => {
  fs.readFile('db.json', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Ошибка чтения файла' });
    } else {
      const db = JSON.parse(data);
      const newProduct = { ...req.body, id: Date.now().toString() };
      db.products.push(newProduct);
      fs.writeFile('db.json', JSON.stringify(db, null, 2), (writeErr) => {
        if (writeErr) {
          res.status(500).json({ error: 'Ошибка записи файла' });
        } else {
          res.json(newProduct);
        }
      });
    }
  });
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
