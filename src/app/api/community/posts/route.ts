// src/app/api/community/posts/route.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { Post } from '@/types';

// Mock data store
let posts: Post[] = [
  {
    id: '1',
    author: { id: 'user1', name: 'Alex',email:'Q@dummy.com' },
    content: 'Welcome to the community! Share your experiences.',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    author: { id: 'user2', name: 'Josh',email:'josh@dummy.com',avatarUrl:'https://cdn.discordapp.com/attachments/1031899904953552906/1292168848350384148/avataaars.png?ex=6702c184&is=67017004&hm=e24e78123d6c34fc4192ca4541e7202ac84defe489adf395cdff0c51a2508d8d&' },
    content: 'Building 420 has no wheelchair support! Worst building ever!! 🤬',
    createdAt: new Date().toISOString(),
  },
  // Add more initial posts if desired
];

// Handle GET requests
export async function GET(request: NextRequest) {
  return NextResponse.json(posts);
}

// Handle POST requests
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { author, content } = body;

  if (!author || !content) {
    return NextResponse.json(
      { message: 'Author and content are required.' },
      { status: 400 }
    );
  }

  const newPost: Post = {
    id: (posts.length + 1).toString(),
    author,
    content,
    createdAt: new Date().toISOString(),
  };

  posts.unshift(newPost); // Add new post to the beginning of the array

  return NextResponse.json(newPost, { status: 201 });
}
