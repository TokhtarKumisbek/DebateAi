import React from 'react';
import { Celebrity } from './celebrities';
import Link from 'next/link';

interface Props {
  celebrity: Celebrity;
}

const CelebrityCard: React.FC<Props> = ({ celebrity }) => {
  return (
    <Link href={`/celebrity/${celebrity.name.toLowerCase().replace(/ /g, '-')}`}>
      <div className="border rounded-lg p-4 text-center hover:scale-105 transition-transform cursor-pointer">
        <div className="relative w-full h-48">
          <img
            src={celebrity.image}
            alt={celebrity.name}
            className="w-full h-full object-cover rounded-lg mb-2"
          />
        </div>
        <h2 className="text-lg font-semibold">{celebrity.name}</h2>
      </div>
    </Link>
  );
};

export default CelebrityCard;
