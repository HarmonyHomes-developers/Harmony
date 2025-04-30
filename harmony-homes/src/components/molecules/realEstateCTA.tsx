import Image from "next/image";
import Link from "next/link";

const RealEstateCTA = () => {
  return (
    <section className="bg-[#F4F4F5] py-16 px-8 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-[36px] font-bold text-black mb-4">
          Ready to transform your real estate experience?
        </h2>
        <p className="text-[#71717A] mb-6">
          Join Harmony today and discover a new way to buy, sell, and manage
          properties with blockchain technology.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <Link href="/signup">
            <button className="bg-[#18181B] text-[#FAFAFA] py-2 px-6 rounded-lg font-medium">
              Get Started
            </button>
          </Link>
          <button className="border border-[#E4E4E7] text-gray-900 py-2 px-6 rounded-lg font-medium">
            Contact Us
          </button>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className="bg-gray-300 w-full flex items-center justify-center rounded-lg">
          <Image
            src="/placeholder.png"
            width={700}
            height={700}
            alt=""
            className="text-gray-500 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default RealEstateCTA;
