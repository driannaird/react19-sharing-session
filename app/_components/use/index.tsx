'use client'

import  { Suspense, use } from 'react';
import { fetchComments } from './utils/action';

const CommentsComponent = () => {
  const comments = use(fetchComments());

  return (
    <div>
      <h1 className='text-2xl font-bold mb-2 text-white'>Comments</h1>
      {comments.map(comment => (
        <div key={comment.id} className='message-thread bg-gray-300/30'>
          <p>{comment.body}</p>
          <small>By: {comment.user.username}</small>
        </div>
      ))}
    </div>
  );
};

const Use = () => {
  return (
    <Suspense fallback={<div>Loading comments...</div>}>
      <CommentsComponent />
    </Suspense>
  );
};

export default Use;