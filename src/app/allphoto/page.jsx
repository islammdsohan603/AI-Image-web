import AllPhoto from '@/components/AllPhoto';
import React from 'react';

const AllPhotosPages = async () => {
  const res = await fetch(`https://ai-image-web-six.vercel.app/data.json`);

  const data = await res.json();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-zinc-900 to-slate-950 text-white px-4 py-16">
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map(all => (
            <AllPhoto key={all.id} all={all} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPhotosPages;
