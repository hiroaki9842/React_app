import React from 'react'
import './Report.css';

const Report = () => {
  return (
  <>
    <form className="report-main">
      <input type="text" className="item-title" placeholder="タイトル" />

      <textarea rows="20" cols="50" className="item-text" placeholder="本文を記入してください"/>

      <div className="item-day">
        {/* 投稿日付が表示したい */}
        投稿日付(仮)
      </div>

      <div className="item-user">
        {/* ユーザー名が表示したい */}
        ユーザー名(仮)
      </div>

       {/* 画面に適したボタン名表示したい */}
      <button type="submit" className="item-button">ボタン(仮)</button>
    </form>
  </>
  )
}

export default Report
