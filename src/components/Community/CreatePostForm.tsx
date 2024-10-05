// src/components/Community/CreatePostForm.tsx
'use client';

import React, { useState } from 'react';
import type { User } from '@/types';

interface CreatePostFormProps {
  onPostCreated: () => void;
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({ onPostCreated }) => {
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // For simplicity, using a mock user
  const user: User = { id: 'user1', name: 'Alex' };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setSubmitting(true);

    try {
      const response = await fetch('/api/community/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author: user, content }),
      });

      if (response.ok) {
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
    <form onSubmit={handleSubmit} className="mb-6">
      <textarea
        className="w-full p-2 border rounded resize-none"
        rows={3}
        placeholder="Share something with the community..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        disabled={submitting}
      >
        {submitting ? 'Posting...' : 'Post'}
      </button>
    </form>
  );
};

export default CreatePostForm;
