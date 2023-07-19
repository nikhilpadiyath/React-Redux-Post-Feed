import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postsSlice';

const AddPostForm = () => {

    const [title, setTitle] = useState('');
    const [content, setContent]= useState('');
    const [userId, setUserId] = useState('');

    const dispatch = useDispatch();
    const users = useSelector(state=> state.users);

    const handleTitleChange = (e) => {setTitle(e.target.value)};
    const handleContentChange = (e) => {setContent(e.target.value)};
    const handleAuthorChange = (e) => {setUserId(e.target.value)};

    const handleClick = () => {
        if(title && content) {
            dispatch(postAdded(title,content, userId));
            setTitle('');
            setContent();
        }
    }

    const canSave = Boolean(title) && Boolean(content);

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>{user.name}</option>
    ));

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
                  onChange= {handleTitleChange}
                  placeholder= "My new Title"
                  />

            <label htmlFor="postAuthor">Author:</label>
            <select id="postAuthor" value={userId} onChange={handleAuthorChange}>
                <option value=""></option>
                {userOptions}
                </select>
            <label htmlFor="post-content">Content:</label>
            <input 
                  type="text"
                  id="postContent"
                  name="postContent"
                  value={content}
                  onChange= {handleContentChange}
                  placeholder= "My new Content"
                  />
            <button type="button" onClick= {handleClick} disabled= {!canSave}>Save Post</button>
            </form>
        </section>
    );
}

export default AddPostForm;