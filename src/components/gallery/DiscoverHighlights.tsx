import React from 'react';

export default function DiscoverHighlights() {
  return (
    <section className="relative bg-white py-10 px-4 md:px-20">
      <div
        className="absolute left-0 top-0 w-1/2 h-full bg-no-repeat bg-contain bg-left opacity-10 pointer-events-none"
        style={{ backgroundImage: 'url(/images/artwork-bg.png)' }}
      ></div>
      <div className="relative z-10">
        <p className="text-yellow-500 text-lg font-semibold">Discover</p>
        <h2 className="text-4xl font-bold text-black mb-6">Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src="/gallery/cave.png" alt="Cave view" className="w-full rounded-md" />
        </div>
      </div>
    </section>
  );
}
