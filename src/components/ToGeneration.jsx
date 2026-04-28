import React from 'react';
import PhotosCards from './PhotosCards';

const ToGeneration = async () => {
  const res = await fetch(`https://ai-image-web-six.vercel.app/data.json`);
  const photos = await res.json();
  const topPhotos = photos.slice(0, 8);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-zinc-900 to-slate-950 text-white px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="text-center mb-12">
            <p className="text-purple-400 uppercase tracking-widest text-sm">
              Featured Collection
            </p>

            <h1 className="text-4xl font-bold text-white mt-2">
              Top AI Generations
            </h1>

            <p className="text-zinc-400 mt-3 max-w-xl mx-auto">
              Explore premium AI generated artworks created by powerful models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topPhotos.map(photo => (
              <PhotosCards key={photo.id} photo={photo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToGeneration;
