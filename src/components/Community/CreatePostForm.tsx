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
    <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Create a Post</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block mb-1 font-semibold">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="content" className="block mb-1 font-semibold">
          Post
        </label>
        <textarea
          id="content"
          className="w-full p-2 border rounded resize-none"
          rows={4}
          placeholder="Share something with the community..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        disabled={submitting}
      >
        {submitting ? 'Posting...' : 'Post'}
      </button>
    </form>
  );
};

export default CreatePostForm;
