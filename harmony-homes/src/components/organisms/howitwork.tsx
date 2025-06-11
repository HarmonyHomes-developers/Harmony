const HowHarmonyWorks: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "List Your Property",
      description: "Upload your property details and documents with our streamlined listing system."
    },
    {
      number: "2", 
      title: "Connect with Buyers",
      description: "Get matched with pre-verified buyers through our AI-powered recommendation system."
    },
    {
      number: "3",
      title: "Complete Sales Securely",
      description: "Finalize transactions through our secure blockchain and marketplace infrastructure."
    }
  ];

  return (
    <section className="pt-32 bg-white h-screen">
      <div className=" mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-8xl  font-bold text-gray-900 mb-4">
            How Harmony Works
          </h2>
          <p className="text-lg md:text-4xl text-gray-600">
            Simple steps to list your property and connect with buyers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 md:text-2xl leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowHarmonyWorks