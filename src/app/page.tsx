// src/app/page.tsx
// import SearchBar from '../components/SearchBar';

const HomePage: React.FC = () => (
  <div className="max-w-screen-full mx-auto p-8">
    {/* Flex layout for larger text and image side-by-side */}
    <section className="my-16 flex flex-col md:flex-row items-center">
      {/* Left side with much larger text */}
      <div className="md:w-1/2 p-4 text-left">
        <h1 className="text-7xl font-bold mb-8">Explore Your City with Confidence</h1>
        {/* Buttons below the text */}
        <div className="flex space-x-4 mt-4">
          <a href="#get-started" className="bg-blue-500 text-white py-3 px-8 rounded-md hover:bg-blue-600">
            Get Started
          </a>
          <a href="#learn-more" className="bg-gray-500 text-white py-3 px-8 rounded-md hover:bg-gray-600">
            Learn More
          </a>
        </div>
      </div>

      {/* Right side with a larger image */}
      <div className="md:w-1/2 p-4">
        <img 
          src="https://www.ithacajournal.com/gcdn/presto/2019/08/13/PITH/ec1cec32-9afc-4083-ac85-e5193831c031-Ithaca_Commons_throwback76.jpg" 
          alt="Ithaca Commons" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>

    {/* "Get Started" section */}
    <div id="get-started" className="p-4 text-left mt-16">
      <h1 className="text-5xl font-semibold">Get Started</h1>
      <p className="mt-4">Here is the section where users can get started with the app.</p>
    </div>

    {/* Feature highlights with horizontal layout for medium screens and above */}
    <div className="mt-8 flex flex-col md:flex-row justify-around">
      <div className="p-4">
        <h2 className="text-2xl font-semibold">Accessible Routes</h2>
        <p>Find the best paths tailored to your needs.</p>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold">Community Reviews</h2>
        <p>Get insights from other users like you.</p>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold">Personalized Settings</h2>
        <p>Customize your experience for optimal comfort.</p>
      </div>
    </div>

    {/* "Learn More" section */}
    <div id="learn-more" className="p-4 mt-16">
      <h1 className="text-5xl font-semibold">Learn More</h1>
      <p className="mt-4">More details about the application and its features.</p>
    </div>
  </div>
);

export default HomePage;
