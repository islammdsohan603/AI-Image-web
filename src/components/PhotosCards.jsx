import Image from 'next/image';
import { Heart, Download } from 'lucide-react';
import Link from 'next/link';

const PhotosCards = ({ photo }) => {
  const { title, imageUrl, category, likes, downloads } = photo;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-white/10 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
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
        <Link href={`/photos/${photo.id}`}>
          <button className="w-full cursor-pointer mt-2 py-2 text-sm font-medium rounded-lg bg-linear-to-r from-purple-500 to-indigo-500 text-white hover:opacity-90 transition">
            View Details →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PhotosCards;
