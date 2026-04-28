import { Button } from '@heroui/react';
import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative h-[70vh] w-full rounded-2xl overflow-hidden shadow-xl mt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://i.pinimg.com/1200x/8a/fe/83/8afe83b98f339de4c1dd34fde26a86d0.jpg"
          width={600}
          height={400}
          alt="AI Art"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 max-w-2xl">
            Turn Ideas into{' '}
            <span className="bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
              Stunning AI Art
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
            Generate high-quality images from simple text prompts in seconds.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link href="#">
              <Button className="px-6 py-3 text-white font-semibold rounded-xl bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg hover:scale-105 transition-all duration-300">
                🚀 Generate Now
              </Button>
            </Link>

            <Link href="/pricing">
              <Button
                variant="bordered"
                className="px-6 py-3 rounded-xl border-white/40 text-white hover:bg-white/10 transition-all duration-300"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
