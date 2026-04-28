import React from 'react';
import PhotosCards from './PhotosCards';

const ToGeneration = async () => {
  const res = await fetch(`https://ai-image-web-six.vercel.app/data.json`);
  const photos = await res.json();
  const topPhotos = photos.slice(0, 8);

  return (
    <div className="mt-20">
      <h1 className="text-center my-6 text-2xl font-bold">Top Generations</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {topPhotos.map(photo => (
          <PhotosCards key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default ToGeneration;
