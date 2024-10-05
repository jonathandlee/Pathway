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

    <div id="Accessible Routes" className="p-4 text-left mt-16">
      <h1 className="text-5xl font-semibold">Accessible Routes</h1>
    </div>

    {/* Feature highlights with images, horizontal layout for medium screens and above */}
    <div className="mt-8 flex flex-col md:flex-row justify-around">
      {/* Plan Your Journey */}
      <div className="p-4 w-1/3 break-words">
        <h2 className="text-2xl font-semibold">Plan Your Journey</h2>
        <img 
          src="https://via.placeholder.com/150" 
          alt="Plan Your Journey" 
          className="w-full h-auto mt-4 mb-4 rounded-md"
        />
        <p>
          Easily map out your route, taking into account wheelchair accessibility and other essential details.
        </p>
      </div>
      {/* Turn-by-Turn Guidance */}
      <div className="p-4 w-1/3 break-words">
        <h2 className="text-2xl font-semibold">Turn-by-Turn Guidance</h2>
        <img 
          src="https://via.placeholder.com/150" 
          alt="Turn-by-Turn Guidance" 
          className="w-full h-auto mt-4 mb-4 rounded-md"
        />
        <p>Follow the map to reach your destination seamlessly.</p>
      </div>
      {/* Real-Time Updates */}
      <div className="p-4 w-1/3 break-words">
        <h2 className="text-2xl font-semibold">Real-Time Updates</h2>
        <img 
          src="https://via.placeholder.com/150" 
          alt="Real-Time Updates" 
          className="w-full h-auto mt-4 mb-4 rounded-md"
        />
        <p>
          Stay informed about any changes or obstacles along your path through crowd-sourced updates from the community.
        </p>
      </div>
    </div>

    {/* "Get Started" section */}
    <div id="get-started" className="p-4 text-left mt-16">
      <h1 className="text-5xl font-semibold">Get Started</h1>
      <p className="mt-4">Here is the section where users can get started with the app.</p>
    </div>

    {/* Align "Customize" section with "Get Started" */}
    <div className="p-4 text-left mt-8">
      <p className="text-2xl font-semibold">Customize Your Experience</p>
      <p className="mt-4">
        Customize your experience for optimal comfort. Click Here to create a profile.
      </p>
    </div>

    {/* "Learn More" section */}
    <div id="learn-more" className="p-4 mt-16">
      <h1 className="text-5xl font-semibold">Learn More</h1>
      <p className="mt-4">More details about the application and its features.</p>
    </div>
  </div>
);

export default HomePage;
