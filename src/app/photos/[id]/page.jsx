import Image from 'next/image';
import { Heart, Download, Sparkles, CalendarDays, Layers3 } from 'lucide-react';

const PhotosDetailsPages = async ({ params }) => {
  const { id } = await params;

  const res = await fetch('https://ai-image-web-six.vercel.app/data.json', {
    cache: 'no-store',
  });

  const photos = await res.json();

  const photo = photos.find(p => p.id === Number(id));

  if (!photo) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <h1 className="text-2xl font-bold text-red-400">❌ Photo Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-zinc-900 to-slate-950 text-white px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Card */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Image Section */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-linear-to-r from-purple-600 to-indigo-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-700"></div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
              <div className="relative h-[500px] w-full overflow-hidden">
                <Image
                  src={photo.imageUrl}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
              <Sparkles size={16} />
              Premium AI Generated Artwork
            </div>

            {/* Title */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight bg-linear-to-r from-white via-purple-300 to-indigo-400 bg-clip-text text-transparent">
                {photo.title}
              </h1>

              <p className="mt-4 text-zinc-400 leading-relaxed text-lg">
                {photo.prompt}
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition duration-300">
                <div className="flex items-center gap-3">
                  <Heart className="text-pink-400" />
                  <div>
                    <p className="text-zinc-400 text-sm">Likes</p>
                    <h3 className="text-xl font-bold">{photo.likes}</h3>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition duration-300">
                <div className="flex items-center gap-3">
                  <Download className="text-green-400" />
                  <div>
                    <p className="text-zinc-400 text-sm">Downloads</p>
                    <h3 className="text-xl font-bold">{photo.downloads}</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2 text-purple-300">
                  <Layers3 size={18} />
                  <span className="font-medium">Category</span>
                </div>
                <p className="text-zinc-300">{photo.category}</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2 text-indigo-300">
                  <Sparkles size={18} />
                  <span className="font-medium">Model</span>
                </div>
                <p className="text-zinc-300">{photo.model}</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2 text-cyan-300">
                  <Layers3 size={18} />
                  <span className="font-medium">Resolution</span>
                </div>
                <p className="text-zinc-300">{photo.resolution}</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2 text-orange-300">
                  <CalendarDays size={18} />
                  <span className="font-medium">Created</span>
                </div>
                <p className="text-zinc-300">
                  {new Date(photo.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-zinc-200">
                Popular Tags
              </h3>

              <div className="flex flex-wrap gap-3">
                {photo.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 hover:bg-purple-500/20 hover:border-purple-400 transition duration-300 cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Button */}
            <button className="group relative w-full overflow-hidden rounded-2xl bg-linear-to-r from-purple-600 to-indigo-600 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/30">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Download size={18} />
                Download HD Image
              </span>

              <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-purple-700 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotosDetailsPages;
