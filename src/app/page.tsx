// src/app/page.tsx
// import SearchBar from '../components/SearchBar';

const HomePage: React.FC = () => (
  <div className="container mx-auto p-4">
    <section className="text-center my-8">
      <h1 className="text-4xl font-bold mb-4">Explore Your City with Confidence</h1>
      {/* <SearchBar /> */}
      <div className="mt-8 flex flex-col md:flex-row justify-around">
        {/* Feature highlights */}
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
    </section>
  </div>
);

export default HomePage;
