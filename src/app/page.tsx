"use client"
import Link from 'next/link';

const HomePage: React.FC = () => (
  
  <div className="max-w-screen-full mx-auto bg-gray-800 text-white">
    {/* Flex layout for larger text and image side-by-side */}
    <section className="mb-24 flex flex-col p-8 md:flex-row items-center">
      {/* Left side with much larger text */}
      <div className="md:w-1/2 p-4 text-left">
        <h1 className="text-7xl font-bold mb-8">Explore Your City with Confidence</h1>
        <p style={{ fontFamily: 'Open Sans, sans-serif' }}>Discover your city with a user-friendly app that guides you to the most accessible routes and shares insights from other members of the community.</p>
        {/* Buttons below the text */}
        <div className="flex space-x-4 mt-4">
          <a 
            href="#get-started"  
            className="py-3 px-8 rounded-md bg-gray-700 font-semibold"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Right side with a larger image */}
      <div className="md:w-1/2 p-4">
        <img 
          src="https://images.unsplash.com/photo-1655491371594-45cc325c6d69?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Ithaca Commons" 
          className="w-full h-[800px] rounded-md shadow-lg"
        />
      </div>
    </section>


<div className='bg-gray-300 w-screen text-black px-5'>
    <div id="Accessible Routes" className="p-4 pt-10 text-left mt-40">
      <h1 className="text-5xl font-semibold">Accessible Routes</h1>
    </div>

    {/* Feature highlights with images, horizontal layout for medium screens and above */}
    <div className="mt-8 flex flex-col md:flex-row justify-around">
      {/* Plan Your Journey */}
      <div className="p-4 w-1/3 break-words">
        <h2 className="text-3xl font-semibold">Plan Your Journey</h2>
        <img 
          src="images/images/test2.png" 
          alt="Plan Your Journey" 
          className="w-[400px] h-auto mt-4 mb-4 rounded-md"
          style={{ width: '600px', height: '400px' }}
        />
        <p style={{ fontFamily: 'Open Sans, sans-serif' }}>
          Easily map out your route, taking into account essential accessibility details
        </p>
      </div>
      {/* Turn-by-Turn Guidance */}
      <div className="p-4 w-1/3 break-words">
        <h2 className="text-3xl font-semibold">Turn-by-Turn Guidance</h2>
        <img 
          src="https://via.placeholder.com/150" 
          alt="Turn-by-Turn Guidance" 
          className="w-[400px] h-auto mt-4 mb-4 rounded-md"
        />
        <p style={{ fontFamily: 'Open Sans, sans-serif' }}>Follow the map to reach your destination seamlessly</p>
      </div>
      {/* Real-Time Updates */}
      <div className="p-4 pb-10 w-1/3 break-words">
        <h2 className="text-3xl font-semibold">Real-Time Updates</h2>
        <img 
          src="https://via.placeholder.com/150" 
          alt="Real-Time Updates" 
          className="w-[400px] h-auto mt-4 mb-4 rounded-md"
        />
        <p style={{ fontFamily: 'Open Sans, sans-serif' }}>
          Stay informed about any changes or obstacles along your path through crowd-sourced updates from the community
        </p>
      </div>
    </div>
    </div>

    {/* Container for "Get Started" and Stepper Section */}
    <div className="flex flex-col md:flex-row items-center justify-center mt-40 pb-40">
      {/* "Get Started" section */}
      <div id="get-started" className="p-4 text-left md:w-auto flex justify-center">
        <div>
          <h1 className="text-6xl font-semibold">Get Started</h1>
          <p style={{ fontFamily: 'Open Sans, sans-serif' }} className="mt-4">Customize your experience for optimal comfort</p>
        </div>
      </div>

      {/* Stepper Section */}
      <section className="w-full md:w-auto ml-16">
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-px bg-gray-300"></div>

          {/* Step 1 */}
          <Link href="/profile">
            <div className="flex items-center mb-8 relative cursor-pointer">
              {/* Number 1 */}
              <div className="flex-shrink-0 w-10 h-10 bg-gray-700 text-white rounded-md flex items-center justify-center text-lg font-semibold">
                1
              </div>

              {/* Horizontal line to text */}
              <div className="h-px w-16 bg-gray-300 absolute left-10 top-1/2 transform -translate-y-1/2"></div>

              {/* Step content */}
              <div className="ml-24">
                <h2 className="text-3xl font-bold hover:text-gray-500 transition-colors duration-300">Create</h2>
                <p style={{ fontFamily: 'Open Sans, sans-serif' }} className="mt-2 text-gray-400 transition-colors duration-300">
                  Create a customized user profile tailored to your needs.
                </p>
              </div>
            </div>
          </Link>

          {/* Step 2 */}
          <Link href="/map">
            <div className="flex items-center mb-8 relative cursor-pointer">
              {/* Number 2 */}
              <div className="flex-shrink-0 w-10 h-10 bg-gray-700 text-white rounded-md flex items-center justify-center text-lg font-semibold">
                2
              </div>

              {/* Horizontal line to text */}
              <div className="h-px w-16 bg-gray-300 absolute left-10 top-1/2 transform -translate-y-1/2"></div>

              {/* Step content */}
              <div className="ml-24">
                <h2 className="text-3xl font-bold hover:text-gray-500 transition-colors duration-300">Navigate</h2>
                <p style={{ fontFamily: 'Open Sans, sans-serif' }} className="mt-2 text-gray-400 transition-colors duration-300">
                  Use the map to create personalized itineraries that fit your needs.
                </p>
              </div>
            </div>
          </Link>

          {/* Step 3 */}
          <Link href="/community">
            <div className="flex items-center mb-8 relative cursor-pointer">
              {/* Number 3 */}
              <div className="flex-shrink-0 w-10 h-10 bg-gray-700 text-white rounded-md flex items-center justify-center text-lg font-semibold">
                3
              </div>

              {/* Horizontal line to text */}
              <div className="h-px w-16 bg-gray-300 absolute left-10 top-1/2 transform -translate-y-1/2"></div>

              {/* Step content */}
              <div className="ml-24">
                <h2 className="text-3xl font-bold hover:text-gray-500 transition-colors duration-300">Connect</h2>
                <p style={{ fontFamily: 'Open Sans, sans-serif' }} className="mt-2 text-gray-400 transition-colors duration-300">
                  Connect with other members of the community in the chat.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  </div>
);

export default HomePage;
