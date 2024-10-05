// src/components/Community/CreatePostForm.tsx
'use client';

import React, { useState } from 'react';
import type { User } from '@/types';

interface CreatePostFormProps {
  onPostCreated: () => void;
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({ onPostCreated }) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !content.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    setSubmitting(true);

    try {
      const user: User = {
        id: '',
        name,
      };

      const response = await fetch('/api/community/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author: user, content }),
      });

      if (response.ok) {
        setName('');
        setContent('');
        onPostCreated();
      } else {
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-gray p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-700">Create a Post</h2>

      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 font-semibold text-gray-600">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="content" className="block mb-2 font-semibold text-gray-600">
          Post
        </label>
        <textarea
          id="content"
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          rows={4}
          placeholder="Share something with the community..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300"
        disabled={submitting}
      >
        {submitting ? 'Posting...' : 'Post'}
      </button>
    </form>
  );
};

export default CreatePostForm;