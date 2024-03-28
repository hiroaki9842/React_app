const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// ミドルウェアの設定
app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ルートエンドポイントの定義
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// エンドポイント
app.post('/api/posts',async(req, res) => {
  try {
    const {title, content, user } = req.body

    const newBlog = await prisma.blog.create({
      data: {
        title: title,
        content: content,
        createdAt: new Date(),
        user: user
      }
    })
    res.json(newBlog)
    res.status(200).json({ message: '成功しました', data: newBlog})
  }catch (error) {
    console.error('保存中にエラーが発生しました',error)
    res.status(500).json({ error: '500エラーが発生しています'})
  }
})

// サーバーの起動
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
