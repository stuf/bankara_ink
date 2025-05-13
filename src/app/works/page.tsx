'use client';

import useMasonry from '../hooks/useMasonry';
import Work from './components/Work';

import pictures from '@/data/pictures.json';
import { works } from '@/schemas/work';

const images = works.parse(pictures);

export default function WorksPage() {
  const masonryRef = useMasonry();

  return (
    <>
      <main className="container mx-auto">
        <div ref={masonryRef} className="grid items-start gap-4 sm:grid-cols-3">
          {images.map(it => (
            <Work key={it.id} workItem={it} />
          ))}
        </div>
      </main>
    </>
  );
}
