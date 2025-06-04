import { Menu, X, Shield, MessageCircle, DollarSign, List, Users, Lock } from 'lucide-react';

const WhyChooseHarmony: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Blockchain Security",
      description: "Secure your property transactions with blockchain technology.",
      items: [
        "Immutable property records",
        "Transparent ownership history", 
        "Fraud prevention"
      ]
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Direct Communication",
      description: "Connect directly with verified buyers without intermediaries.",
      items: [
        "Secure messaging platform",
        "Real-time notifications",
        "Video call scheduling"
      ]
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Lower Costs",
      description: "Reduce transaction costs by eliminating unnecessary middlemen.",
      items: [
        "No hidden fees",
        "Transparent pricing",
        "Faster transactions"
      ]
    }
  ];

  return (
    <section className="pt-32 bg-[#F4F4F5] h-screen">
      <div className="h-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4">
            Why Choose Harmony?
          </h2>
          <p className="text-lg md:text-3xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of real estate with blockchain-powered transparency and security
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-2 items-start">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center justify-center text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseHarmony;

