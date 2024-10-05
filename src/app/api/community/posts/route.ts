// src/app/api/community/posts/route.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { Post, User } from '@/types';

let posts: Post[] = [
  {
    id: '1',
    author: { id: 'user1', name: 'Alex',avatarUrl:"https://cdn.discordapp.com/attachments/1031899904953552906/1292168848350384148/avataaars.png?ex=6702c184&is=67017004&hm=e24e78123d6c34fc4192ca4541e7202ac84defe489adf395cdff0c51a2508d8d&" },
    content: 'Welcome to the community! Share your experiences.',
    createdAt: new Date().toISOString(),
  },
];

export async function GET(request: NextRequest) {
  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { author, content } = body;

  if (!author || !author.name || !content) {
    return NextResponse.json(
      { message: 'Name and content are required.' },
      { status: 400 }
    );
  }

  const newPost: Post = {
    id: (posts.length + 1).toString(),
    author: {
      id: '',
      name: author.name,

    },
    content,
    createdAt: new Date().toISOString(),
  };

  posts.unshift(newPost);

  return NextResponse.json(newPost, { status: 201 });
}
