export interface User {
    id: string;
    name: string;
    avatarUrl?: string;
  }
  
  export interface Post {
    id: string;
    author: User;
    content: string;
    createdAt: string; // ISO date string
  }