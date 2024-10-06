import Link from 'next/link';

const Header: React.FC = () => (
  <header 
    style={{ color: 'rgb(255, 255, 255)' }} 
    className="sticky top-0 z-50 bg-gray-700"
  >
    {/* Remove the container class and adjust padding */}
    <div className="w-full flex items-center justify-between p-4 pl-10"> {/* Reduced left padding */}
      <Link href="/" className="text-xl font-bold">
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
