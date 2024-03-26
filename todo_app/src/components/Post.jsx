import React from 'react'
import './Post.css';
import Report from './Report.jsx';

const Post = () => {
  return (
    <div className="main">
      <div className="title">
        <h1>新規投稿</h1>
      </div>
      <Report />
    </div>
  )
}

export default Post
