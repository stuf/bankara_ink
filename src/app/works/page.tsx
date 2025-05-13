'use client';

import Image from 'next/image';
import useMasonry from '../hooks/useMasonry';
import Work from './components/Work';

import pictures from '@/data/pictures.json';
import { works } from '@/schemas/work';

type WorkItem = {
  src: string;
  alt: string;
  id: string;
  posted?: Date;
};

const images = works.parse(pictures);

export default function WorksPage() {
  const masonryRef = useMasonry();

  return (
    <>
      <main className="container mx-auto">
        <div ref={masonryRef} className="grid items-start gap-4 sm:grid-cols-3">
          {/* <Masonry columnsCount={3}> */}
          {images.map(({ src, alt, id, posted }) => (
            <Work key={id} {...{ src, alt, id, posted }} />
          ))}
        </div>

        {/* </Masonry> */}
        {/* <ul className="grid grid-cols-3">
          {images.map(({ src, alt, id }) => (
            <li key={id}>
              <Image
                className="object-cover items-center mx-auto"
                {...{ src, alt, width: imageSize, height: imageSize }}
              />
            </li>
          ))}
        </ul> */}
      </main>
    </>
  );
}
