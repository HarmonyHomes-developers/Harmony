import { Lock, Search, Users } from "lucide-react";

const howItWorks = [
  {
    id: 1,
    icon: <Search />,
    title: "Find Properties",
    description:
      "Browse our extensive database of verified properties with detailed information and blockchain records.",
  },
  {
    id: 2,
    icon: <Users />,
    title: "Direct Transactions",
    description:
      "Connect directly with buyers or sellers and negotiate deals without unnecessary intermediaries.",
  },
  {
    id: 3,
    icon: <Lock />,
    title: "Secure on Blockchain",
    description:
      "All property records and transactions are securely stored on the Stellar blockchain, ensuring immutability and verification.",
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-secondary text-foreground flex flex-col justify-center items-center font-sans py-12 space-y-5">
      <div className="text-center space-y-1">
        <h2 className="text-3xl font-bold">How Harmony Works</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Our platform simplifies real estate transactions with blockchain
          technology, ensuring security, transparency, and efficiency.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-10 px-5 lg:px-16 mt-5 lg:max-w-6xl mx-auto">
        {howItWorks.map((data) => (
          <div key={data.id} className="space-y-1">
            <span className="inline-block bg-primary text-white rounded-md p-2">
              {data.icon}
            </span>
            <h3 className="font-bold text-xl">{data.title}</h3>
            <p className="text-muted-foreground">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
