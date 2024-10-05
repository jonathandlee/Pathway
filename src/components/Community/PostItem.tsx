import React, { useState } from 'react';
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

  // State to manage like status and count
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes || 0);

  const handleLike = () => {
    if (liked) {
      // Unlike the post
      setLiked(false);
      setLikesCount(likesCount - 1);
    } else {
      // Like the post
      setLiked(true);
      setLikesCount(likesCount + 1);
    }
  };

  return (
    <div className="border rounded-lg p-6 mb-6 bg-white shadow-lg">
      <div className="flex items-center mb-4">
        {post.author.avatarUrl ? (
          <img
            src={post.author.avatarUrl}
            alt={`${post.author.name}'s avatar`}
            className="w-10 h-10 rounded-full mr-4"
          />
        ) : (
          <img
            src={getRandomAvatar()}
            alt="Default avatar"
            className="w-10 h-10 rounded-full mr-4"
          />
        )}
        <span className="font-semibold text-lg text-gray-800">{post.author.name}</span>
      </div>
      <p className="text-gray-700 mb-4">{post.content}</p>
      <div className="flex items-center justify-between">
      <button
          onClick={handleLike}
          className="flex items-center text-gray-500 hover:text-red-500 focus:outline-none"
        >
          {liked ? (
            <svg
              className="w-5 h-5 fill-current text-red-500 mr-1"
              viewBox="0 0 20 20"
            >
              <path d="M3.172 5.172a4.002 4.002 0 015.656 0L10 6.343l1.172-1.171a4.002 4.002 0 115.656 5.656L10 17.657l-6.828-6.829a4.002 4.002 0 010-5.656z" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 fill-current mr-1"
              viewBox="0 0 20 20"
            >
              <path
                d="M3.172 5.172a4.002 4.002 0 015.656 0L10 6.343l1.172-1.171a4.002 4.002 0 115.656 5.656L10 17.657l-6.828-6.829a4.002 4.002 0 010-5.656z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          )}
          <span>{likesCount}</span>
        </button>
        <span className="text-sm text-gray-500">
          {new Date(post.createdAt).toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default PostItem;