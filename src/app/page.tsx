const HomePage: React.FC = () => (
  <div className="max-w-screen-full mx-auto p-8">
    {/* Flex layout for larger text and image side-by-side */}
    <section className="my-16 flex flex-col md:flex-row items-center">
      {/* Left side with much larger text */}
      <div className="md:w-1/2 p-4 text-left">
        <h1 className="text-7xl font-bold mb-8">Explore Your City with Confidence</h1>
        <p>Discover your city with a user-friendly app that guides you to the most accessible routes and shares insights from other members of the community</p>
        {/* Buttons below the text */}
        <div className="flex space-x-4 mt-4">
          <a 
            href="#get-started" 
            style={{ backgroundColor: 'rgb(47, 45, 65)', color: 'rgb(255, 255, 255)' }}  // RGB for background and text color
            className="py-3 px-8 rounded-md hover:bg-blue-600"
          >
            Get Started
          </a>
          <a 
            href="#learn-more" 
            style={{ backgroundColor: 'rgb(128, 128, 128)', color: 'rgb(255, 255, 255)' }}  // RGB for background and text color
            className="py-3 px-8 rounded-md hover:bg-gray-600"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Right side with a larger image */}
      <div className="md:w-1/2 p-4">
        <img 
          src="https://www.ithacajournal.com/gcdn/presto/2019/08/13/PITH/ec1cec32-9afc-4083-ac85-e5193831c031-Ithaca_Commons_throwback76.jpg" 
          alt="Ithaca Commons" 
          className="w-full h-auto rounded-md shadow-lg"
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
          className="w-[400px] h-auto mt-4 mb-4 rounded-md"
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
          className="w-[400px] h-auto mt-4 mb-4 rounded-md"
        />
        <p>Follow the map to reach your destination seamlessly.</p>
      </div>
      {/* Real-Time Updates */}
      <div className="p-4 w-1/3 break-words">
        <h2 className="text-2xl font-semibold">Real-Time Updates</h2>
        <img 
          src="https://via.placeholder.com/150" 
          alt="Real-Time Updates" 
          className="w-[400px] h-auto mt-4 mb-4 rounded-md"
        />
        <p>
          Stay informed about any changes or obstacles along your path through crowd-sourced updates from the community.
        </p>
      </div>
    </div>

    {/* "Get Started" section */}
    <div id="get-started" className="p-4 text-left mt-16">
      <h1 className="text-5xl font-semibold">Get Started</h1>
      <p className="mt-4">Customize your experience for optimal comfort</p>
    </div>

    {/* Stepper Section */}
    {/* Stepper Section */}
<section className="mt-16">
  <div className="relative max-w-4xl mx-auto">
    {/* Vertical Line */}
    <div className="absolute left-5 top-0 h-full w-px bg-gray-300"></div>

    {/* Step 1 */}
    <div className="flex items-center mb-8 relative">
      {/* Number 1 */}
      <div className="flex-shrink-0 w-10 h-10 bg-gray-700 text-white rounded-md flex items-center justify-center text-lg font-semibold">
        1
      </div>

      {/* Horizontal line to text */}
      <div className="h-px w-16 bg-gray-300 absolute left-10 top-1/2 transform -translate-y-1/2"></div>

      {/* Step content */}
      <div className="ml-24">
        <h2 className="text-xl font-bold">Explore</h2>
        <p className="mt-2 text-gray-400">
          Browse our detailed maps to discover wheelchair-friendly routes and points of interest in your city.
        </p>
      </div>
    </div>

    {/* Step 2 */}
    <div className="flex items-center mb-8 relative">
      {/* Number 2 */}
      <div className="flex-shrink-0 w-10 h-10 bg-gray-700 text-white rounded-md flex items-center justify-center text-lg font-semibold">
        2
      </div>

      {/* Horizontal line to text */}
      <div className="h-px w-16 bg-gray-300 absolute left-10 top-1/2 transform -translate-y-1/2"></div>

      {/* Step content */}
      <div className="ml-24">
        <h2 className="text-xl font-bold">Plan</h2>
        <p className="mt-2 text-gray-400">
          Use our intuitive trip planning tools to create personalized itineraries that fit your needs.
        </p>
      </div>
    </div>

    {/* Step 3 */}
    <div className="flex items-center mb-8 relative">
      {/* Number 3 */}
      <div className="flex-shrink-0 w-10 h-10 bg-gray-700 text-white rounded-md flex items-center justify-center text-lg font-semibold">
        3
      </div>

      {/* Horizontal line to text */}
      <div className="h-px w-16 bg-gray-300 absolute left-10 top-1/2 transform -translate-y-1/2"></div>

      {/* Step content */}
      <div className="ml-24">
        <h2 className="text-xl font-bold">Navigate</h2>
        <p className="mt-2 text-gray-400">
          Follow turn-by-turn directions and receive real-time updates to ensure a seamless journey.
        </p>
      </div>
    </div>
  </div>
</section>


    {/* "Learn More" section */}
    <div id="learn-more" className="p-4 mt-16">
      <h1 className="text-5xl font-semibold">Learn More</h1>
      <p className="mt-4">More details about the application and its features.</p>
    </div>
  </div>
);

export default HomePage;
