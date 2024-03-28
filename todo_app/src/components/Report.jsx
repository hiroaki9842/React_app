import React, { useState, useEffect } from 'react';
import './Report.css';

const Report = ({ apiEndpoint }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [postDate, setPostDate] = useState('');

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  useEffect(() => {
    // コンポーネントがマウントされたときに現在の日付を取得して投稿日付に設定する
    setPostDate(getCurrentDate());
  }, []); // 空の依存リストを渡すことで初回のみ実行される

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({ title, content, user: 'テスト' })
      });

      console.log('レスポンス', response); // レスポンスをログ表示

      if (!response.ok) {
        throw new Error('保存に失敗しました');
      }
      console.log('保存に成功しました');
      // ポストが成功した後に、任意のアクションを追加します

      // フォームの内容をリセットする
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('エラーが発生しました:', error);
      // エラーが発生した場合の処理を追加します
    }
  };

  return (
    <form className="report-main" onSubmit={handleSubmit}>
      <input type="text" className="item-title" placeholder="タイトル" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea rows="20" cols="50" className="item-text" placeholder="本文を記入してください" value={content} onChange={(e) => setContent(e.target.value)} />
      {/* 投稿日付を表示 */}
      <div className="item-day">
        投稿日付: {postDate}
      </div>
      {/* ユーザー名を表示 */}
      <div className="item-user">
        ユーザー名(仮)
      </div>
      <button type="submit" className="item-button">投稿</button>
    </form>
  );
};

export default Report;
