import React from 'react';
import { useHistory } from 'react-router';

const Projects = () => {

  let history = useHistory()

  return (
    <div>
      <h1>This is the Projects Page</h1>
      <button onClick={() => { history.push('/about')}}>go to the about page</button>
    </div>
  );
};

export default Projects;