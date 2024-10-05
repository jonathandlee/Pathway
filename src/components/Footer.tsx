// src/components/Footer.tsx
const Footer: React.FC = () => (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto p-4 text-center">
        <p>&copy; {new Date().getFullYear()} CityExplorer. All rights reserved.</p>
      </div>
    </footer>
  );
  
  export default Footer;
  