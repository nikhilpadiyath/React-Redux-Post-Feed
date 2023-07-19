import React from 'react';
import { PostsList } from './features/posts/PostsList';
import Navbar from './app/Navbar';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import AddPostForm from './features/posts/AddPostForm';
import { SinglePagePost } from './features/posts/SinglePostPage';
import { EditPostForm } from './features/posts/EditPostForm';

function App() {
  return (
    <Router>

      <Navbar />

    <div className="App">
      <Routes>
        <Route exact path='/' element={
        <>
        <AddPostForm />
        <PostsList />
        </>}></Route>
        <Route exact path="/posts/:postId" element={
          <>
          <SinglePagePost/>
          </>
        }></Route>
        <Route exact path="/editPost/:postId" element={
          <>
          <EditPostForm/>
          </>
        }></Route>
        
        </Routes>
    </div>
    </Router>
  );
}

export default App;

