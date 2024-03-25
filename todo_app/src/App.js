import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Title from './components/Title';
import BlogList from './components/BlogList';
import Post from './components/Post';
import Revise from './components/Revise';
import Delete from './components/Delete';
import User from './components/User';

function App() {
  return (
    <Router>
      <>
        <Title /> {/* Titleコンポーネントを固定する */}
        <Routes> {/* ルーティングを定義 */}
          <Route exact path="/" element={<BlogList />} /> {/* /パスにアクセスした場合はBlogListコンポーネントを表示 */}
          <Route path="/post" element={<Post />} />{/* /postパスにアクセスした場合はPostコンポーネントを表示 */}
          <Route path="/revise" element={<Revise />} />{/* /reviseパスにアクセスした場合はReviseコンポーネントを表示 */}
          <Route path="/delete" element={<Delete />} />{/* /deleteパスにアクセスした場合はDeleteコンポーネントを表示 */}
          <Route path="/user" element={<User />} />{/* /userパスにアクセスした場合はUserコンポーネントを表示 */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
