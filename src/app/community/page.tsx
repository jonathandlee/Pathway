// src/app/community/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import PostList from '@/components/Community/PostList';
import CreatePostForm from '@/components/Community/CreatePostForm';
import type { Post } from '@/types';


const CommunityPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/community/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Community</h1>
      <CreatePostForm onPostCreated={fetchPosts} />
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
};

export default CommunityPage;
