// src/components/Community/PostItem.tsx
import React from 'react';
import type { Post } from '@/types';

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div className="border rounded p-4 mb-4 bg-white shadow">
      <div className="flex items-center mb-2">
        {post.author.avatarUrl ? (
          <img
            src={post.author.avatarUrl}
            alt={`${post.author.name}'s avatar`}
            className="w-8 h-8 rounded-full mr-2"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
        )}
        <span className="font-semibold">{post.author.name}</span>
      </div>
      <p className="text-gray-800">{post.content}</p>
      <div className="text-sm text-gray-500 mt-2">
        {new Date(post.createdAt).toLocaleString()}
      </div>
    </div>
  );
};

export default PostItem;
