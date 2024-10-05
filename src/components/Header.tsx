// src/components/Header.tsx
import Link from 'next/link';

const Header: React.FC = () => (
  <header className="bg-blue-600 text-white">
    <div className="container mx-auto flex items-center justify-between p-4">
      <Link href="/" className="text-xl font-bold">
        CityExplorer
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/map" className="hover:underline">
              Map
            </Link>
          </li>
          <li>
            <Link href="/community" className="hover:underline">
              Community
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:underline">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
