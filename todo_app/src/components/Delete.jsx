import React from 'react'
import './Delete.css';
import Report from './Report.jsx';

const Delete = () => {
  return (
    <div className="main">
      <div className="title">
        <h1>削除</h1>
      </div>
      <Report apiEndpoint="http://localhost:3001/api/posts/:postId"/>
    </div>
  )
}

export default Delete
