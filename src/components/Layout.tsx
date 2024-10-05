// src/components/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <link 
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" 
        rel="stylesheet" 
      />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

export default Layout;
