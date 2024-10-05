// src/components/Community/PostList.tsx
import React from 'react';
import type { Post } from '@/types';
import PostItem from './postItem';

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  if (posts.length === 0) {
    return <p>No posts yet. Be the first to contribute!</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
