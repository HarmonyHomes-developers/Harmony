const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 bg-white h-screen">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center h-full">
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6">
          Sell Your Property with Blockchain Security
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-7xl pt-5 mx-auto md:text-5xl leading-relaxed">
          Harmony AI property selling service to sell verified buyers directly while ensuring secure, transparent transactions through Stellar blockchain technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <button className="bg-black text-white px-8 md:text-2xl py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
            List Your Property
          </button>
          <button className="text-gray-600 font-medium md:text-2xl hover:text-gray-900 transition-colors">
            Browse Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection