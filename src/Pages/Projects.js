import React from 'react';
import { useHistory } from 'react-router';
import PostForm from './PostForm';
import User from './User';
import { useSelector } from 'react-redux';
import Post from "./Post"
import { isEmpty } from '../Components/Utils';

const Projects = () => {

  let history = useHistory()

  const posts = useSelector((state) => state.postReducer)
  console.log(posts)

  return (
    <div>
      <h1>This is the Projects Page</h1>
      <button onClick={() => { history.push('/about')}}>go to the about page</button>

      <hr />
      <PostForm />

      <hr />
      <div className="content">
        <div className="post-container">
          {!isEmpty(posts) && posts.map((post, index) => (
            <Post post={post} key={index} />
          ))}

        </div>
      </div>

      <hr />
      <User />

    </div>
  );
};

export default Projects;