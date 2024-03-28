import React from 'react'
import './Revise.css';
import Report from './Report.jsx';

const Revise = () => {
  return (
    <div className="main">
      <div className="title">
        <h1>編集</h1>
      </div>
      <Report apiEndpoint="http://localhost:3001/api/posts/:postId"/>
    </div>
  )
}

export default Revise
