// src/components/Footer.tsx
const Footer: React.FC = () => (
    <footer className="bg-gray-700 text-white" >
      <div className="container mx-auto p-4 text-center">
        <p style={{fontFamily: 'Open Sans, sans-serif' }}>&copy; {new Date().getFullYear()} CityExplorer. All rights reserved.</p>
      </div>
    </footer>
  );
  
  export default Footer;
  