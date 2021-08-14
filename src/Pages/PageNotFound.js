import React from 'react';
import { useLocation } from 'react-router-dom'

const PageNotFound = () => {

  let location = useLocation()

  return (
    <div>
      Yo, Page not found  ({location.pathname})!
    </div>
  );
};

export default PageNotFound;