import React from 'react';
import {useParams} from 'react-router-dom';

const Home = () => {

  let {name} = useParams()

  return (
    <div>
      <h1>Welcome {name} This is the Home Page</h1>
    </div>
  );
};

export default Home;