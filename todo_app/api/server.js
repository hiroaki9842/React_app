const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// ミドルウェアの設定
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ルートエンドポイントの定義
app.get('/', (req, res) => {
  res.send('Hello World!');
});


// 投稿用エンドポイント
app.post('/api/posts', async (req, res) => {
  try {
    const { title, content, user } = req.body;

    const newBlog = await prisma.blog.create({
      data: {
        title: title,
        content: content,
        createdAt: new Date(),
        user: user
      }
    });
    res.status(200).json({ message: '成功しました', data: newBlog });
  } catch (error) {
    console.error('保存中にエラーが発生しました', error);
    res.status(500).json({ error: '500エラーが発生しています' });
  }
});

// 取得用エンドポイント
app.get('/api/posts/:postId', async (req, res) => {
  const postId = req.params.postId;

  try {
    // 特定の投稿を取得
    const post = await prisma.blog.findUnique({
      where: { id: parseInt(postId) }, //指定した投稿IDの内容を取得
    });

    if (!post) {
      // 該当する投稿が見つからない場合は404エラーを返す
      return res.status(404).json({ error: '指定された投稿が見つかりません' });
    }

    res.status(200).json({ message: '投稿の取得に成功しました', data: post });
  } catch (error) {
    console.error('投稿の取得中にエラーが発生しました', error);
    res.status(500).json({ error: '500エラーが発生しています' });
  }
});

// 編集用エンドポイント
app.put('/api/posts/:postId', async (req, res) => {
  const postId = req.params.postId;
  const { title, content, user } = req.body;

  try {
    // 特定の投稿を更新
    const updatedPost = await prisma.blog.update({
      where: { id: parseInt(postId) }, //指定した投稿IDの内容を更新
      data: {
        title: title,
        content: content,
        user: user
      }
    });

    res.status(200).json({ message: '投稿の更新に成功しました', data: updatedPost });
  } catch (error) {
    console.error('投稿の更新中にエラーが発生しました', error);
    res.status(500).json({ error: '500エラーが発生しています' });
  }
});

// 削除用エンドポイント
app.delete('/api/posts/:postId', async (req, res) => {
  const postId = req.params.postId;

  try {
    // 特定の投稿を削除
    await prisma.blog.delete({
      where: { id: parseInt(postId) }, // 指定した投稿 ID の内容を削除
    });

    res.status(200).json({ message: '投稿の削除に成功しました' });
  } catch (error) {
    console.error('投稿の削除中にエラーが発生しました', error);
    res.status(500).json({ error: '500エラーが発生しています' });
  }
});



// サーバーの起動
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
