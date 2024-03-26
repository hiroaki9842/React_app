import React from 'react'
import './BlogList.css';

const BlogList = () => {
  return (
    <div className="main">
      <div className="list-main">
        <div className="content-main">
          <div className="content-title">
            タイトル
          </div>
          <div className="content">
            内容
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
          <button className="edit-button" class="ui green button">
            編集
          </button>
          <button className="delete-button" class="ui grey button">
            削除
          </button>
        </div>
      </div>      
    </div>
  )
}

export default BlogList
