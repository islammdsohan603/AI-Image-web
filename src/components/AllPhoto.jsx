import Image from 'next/image';
import { Heart, Download } from 'lucide-react';
import Link from 'next/link';

const AllPhoto = ({ all }) => {
  const { title, imageUrl, category, likes, downloads } = all;

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-white/80 dark:bg-black/50 text-xs px-3 py-1 rounded-full backdrop-blur-md font-medium">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h2 className="text-base font-semibold line-clamp-1 text-gray-800 dark:text-white">
          {title}
        </h2>

        {/* Stats */}
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Heart size={16} className="text-pink-500" />
            {likes}
          </div>

          <div className="flex items-center gap-1">
            <Download size={16} className="text-green-500" />
            {downloads}
          </div>
        </div>

        {/* Button */}
        <Link href={`/photos/${all.id}`}>
          <button className="w-full mt-2 py-3 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 text-white hover:scale-[1.02] transition">
            View Details →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllPhoto;
