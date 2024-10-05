import React from 'react';
import type { Post } from '@/types';

// Array of default avatar URLs (you can replace these with actual URLs or use a dynamic avatar generator service)
const defaultAvatars = [
  'https://api.dicebear.com/9.x/bottts/svg?backgroundType=gradientLinear,solid',
];

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  // Helper function to select a random avatar
  const getRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * defaultAvatars.length);
    return defaultAvatars[randomIndex];
  };

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
          <img
            src={getRandomAvatar()}
            alt="Default avatar"
            className="w-8 h-8 rounded-full mr-2"
          />
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
