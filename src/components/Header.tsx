// src/components/Header.tsx
import Link from 'next/link';

const Header: React.FC = () => (
  <header 
    style={{ backgroundColor: 'rgb(47, 45, 65)', color: 'rgb(255, 255, 255)' }} 
    className="sticky top-0 z-50 font-poppins" // Use the Poppins font globally in the header
  >
    <div className="container mx-auto flex items-center justify-between p-4">
      <Link href="/" className="text-xl font-bold ml-4">
        CityExplorer
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/map" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 700 }} className="hover:underline">
              Map
            </Link>
          </li>
          <li>
            <Link href="/community" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 700 }} className="hover:underline">
              Community
            </Link>
          </li>
          <li>
            <Link href="/profile" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 700 }} className="hover:underline">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
