import React from 'react'
import { Link } from 'react-router-dom';
import './Title.css';

const Title = () => {
  return (
    <header>
      <div className="main_title">
        ブログ(タイトル)
      </div>
      <div className="link_title">
        <Link to="/">
          一覧
        </Link>
        <Link to="/post">
          新規投稿
        </Link>
        <Link to="/user">
          マイページ
        </Link>
      </div>
    </header>
  )
}

export default Title

