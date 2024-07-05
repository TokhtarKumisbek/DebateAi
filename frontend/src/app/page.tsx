// src/app/page.tsx
import React from 'react';
import celebrities from './celebrities';
import CelebrityCard from './CelebrityCard';

const Home: React.FC = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">AI Characters</h1>
      <p className="mb-4">If you ever wanted to know what renowned historical figures thought on a particular issue, now you can! Select a figure of your choice and ask them a question.</p>
      <div className="flex flex-wrap justify-center mb-4">
        <button className="m-2 p-2 bg-blue-500 text-white rounded">Historical</button>
        <button className="m-2 p-2 bg-blue-500 text-white rounded">Billionaires</button>
        <button className="m-2 p-2 bg-blue-500 text-white rounded">TV Shows</button>
        <button className="m-2 p-2 bg-blue-500 text-white rounded">Anime</button>
        <button className="m-2 p-2 bg-blue-500 text-white rounded">British Royal Family</button>
        <button className="m-2 p-2 bg-blue-500 text-white rounded">Game Characters</button>
        <button className="m-2 p-2 bg-blue-500 text-white rounded">Politics</button>
        <button className="m-2 p-2 bg-blue-500 text-white rounded">Celebrities</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {celebrities.map((celebrity, index) => (
          <CelebrityCard key={index} celebrity={celebrity} />
        ))}
      </div>
    </div>
  );
}

export default Home;
