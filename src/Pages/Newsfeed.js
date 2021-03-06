import { Container } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import AddPost from '../component/Post/AddPost';
import ViewPosts from '../component/Post/ViewPosts';

function Newsfeed() {
  const token = useSelector((state) => state.auth.accessToken);
  // const userId = useSelector((state) => state.auth.user.id);
  return (
    <>
      <Container className='newsfeed'>
        <AddPost token={token} />
        <ViewPosts />
      </Container>
    </>
  );
}

export default Newsfeed;
