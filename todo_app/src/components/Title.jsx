import React from 'react'
import './Title.css';

const Title = () => {
  return (
    <header>
      <div className="main_title">
        ブログ(タイトル)
      </div>
      <div className="link_title">
        <div>
          一覧
        </div>
        <div>
          新規投稿
        </div>
        <div>
          マイページ
        </div>
      </div>
    </header>
  )
}

export default Title

