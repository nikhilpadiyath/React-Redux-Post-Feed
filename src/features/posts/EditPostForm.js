import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';

import { postUpdated } from './postsSlice';

export const EditPostForm = ( ) => {
    const { postId } = useParams();

    const post = useSelector(state => state.posts.find(post => post.id === postId));

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const dispatch= useDispatch();
    const navigate= useNavigate();

    const handleEditTitle = (e) => {setTitle(e.target.value)};
    const handleEditContent = (e) => {setContent(e.target.value)};

    const handleSaveClick = () => {
        if(title && content) {
            dispatch(
                postUpdated({
                    id: postId,
                    title,
                    content
                })
            );
navigate(`/posts/${postId}`);
        }
    }

    return(
        <section className="post-form">
            <h2>Add a New Post</h2>
            <form>
            <label htmlFor="post-title">Post Title:</label>
            <input 
                  type="text"
                  id="postTitle"
                  name="postTitle"
                  value={title}
                  onChange= {handleEditTitle}
                  placeholder= "My new Title"
                  />
            <label htmlFor="post-content">Content:</label>
            <input 
                  type="text"
                  id="postContent"
                  name="postContent"
                  value={content}
                  onChange= {handleEditContent}
                  placeholder= "My new Content"
                  />
            <button type="button" onClick= {handleSaveClick}>Save Post</button>
            </form>
        </section>
    );
}


