import React from 'react'
import { Link } from 'react-router-dom';
import './BlogList.css';

const BlogList = () => {
  return (
    <div className="main">
{/* 各ブログコンテンツ開始 */}
      <div className="list-main">
        <div className="content-main">
          <div className="content-title">
            タイトル(仮)
          </div>
          <div className="content">
            内容(仮)
          </div>
        </div>
        <div className="date-user-container">
          <div className="post-day">
            2024年3月26日(仮)
          </div>
          <div className="post-user">
            ユーザー名(仮)
          </div>
        </div>
        <div className="button">
          <Link to="/revise" className="ui green button">
            編集
          </Link>
          <Link to="/delete" className="ui grey button">
            削除
          </Link>
        </div>
      </div>      
      <br></br>
{/* 各ブログコンテンツ終了 */}
{/* 各ブログコンテンツ開始 */}
  <div className="list-main">
        <div className="content-main">
          <div className="content-title">
            タイトル(仮)
          </div>
          <div className="content">
            内容(仮)
          </div>
        </div>
        <div className="date-user-container">
          <div className="post-day">
            2024年3月26日(仮)
          </div>
          <div className="post-user">
            ユーザー名(仮)
          </div>
        </div>
        <div className="button">
          <Link to="/revise" className="edit-button" class="ui green button">
            編集
          </Link>
          <Link to="/delete"className="delete-button" class="ui grey button">
            削除
          </Link>
        </div>
      </div>      
      <br></br>
{/* 各ブログコンテンツ終了 */}
    </div>
  )
}

export default BlogList
