'use client';

import Image from 'next/image';
import useMasonry from '../hooks/useMasonry';

const images = [
  {
    src: '/works/render/20250509-cappy-on-the-beach-w2560.jpg',
    alt: 'Day on the beach',
    id: 'day-on-the-beach',
    publishedAt: '20250509',
  },
  {
    src: '/works/render/20250427-a-future-w1440.jpg',
    alt: 'A Future...',
    id: 'a-future',
  },
  {
    src: '/works/render/20250413-change-of-wardrobe-w1440.jpg',
    alt: 'A Change of Wardrobe',
    id: 'a-change-of-wardrobe',
  },
  {
    src: '/works/render/20250425-broken-free-w1440.jpg',
    alt: 'Broken free',
    id: 'broken-free',
  },
  {
    src: '/works/render/20250120-have-a-rest-w1440.jpg',
    alt: 'Have a rest',
    id: 'have-a-rest',
  },
  {
    src: '/works/render/20250323-to-an-adventure-w4320.jpg',
    alt: 'To an adventure!',
    id: 'to-an-adventure',
  },
  {
    src: '/works/render/20240812-who-is-this-man-w1440.jpg',
    alt: 'Who is this man?',
    id: 'who-is-this-man',
  },
  {
    src: '/works/render/20250125-a-pair-of-goofs-w1440.jpg',
    alt: 'A pair of goofs',
    id: 'a-pair-of-goofs',
  },
  {
    src: '/works/render/20250129-mesmerized-w1440.jpg',
    alt: 'Mesmerized',
    id: 'mesmerized',
  },
  {
    src: '/works/render/20241219-lightshow-w1440.jpg',
    alt: 'Lightshow',
    id: 'lightshow',
  },
  {
    src: '/works/render/20250503-beachside-beauty-w1440.jpg',
    alt: 'Beachside Beauty',
    id: 'beachside-beauty',
  },
  {
    src: '/works/render/20241125-learning-the-ropes-001.jpg',
    alt: 'Learning the ropes',
    id: 'learning-the-ropes',
  },
  {
    src: '/works/render/20240915-stealthy.jpg',
    alt: 'Stealthy',
    id: 'stealthy',
  },
  {
    src: '/works/render/20240915-a-grand-festival.jpg',
    alt: 'A Grand Festival!',
    id: 'a-grand-festival',
  },
  {
    src: '/works/render/20240518-caged-bird-w1440.jpg',
    alt: 'Caged Bird',
    id: 'caged-bird',
  },
  {
    src: '/works/render/20240328-rise-and-shine-w1440.jpg',
    alt: 'Rise and Shine',
    id: 'rise-and-shine',
  },
  {
    src: '/works/render/20240223-a-side-order-w1440.jpg',
    alt: 'A Side Order',
    id: 'a-side-order',
  },
  {
    src: '/works/render/20231222-were-off-to-a-great-start-w1440.jpg',
    alt: "We're off to a great start!",
    id: 'were-off-to-a-great-start',
  },
];

const imageSize = 640;

export default function WorksPage() {
  const masonryRef = useMasonry();

  return (
    <>
      <main className="container mx-auto">
        <div ref={masonryRef} className="grid items-start gap-4 sm:grid-cols-3">
          {/* <Masonry columnsCount={3}> */}
          {images.map(({ src, alt, id }) => (
            <Image
              key={id}
              className="object-cover items-center mx-auto"
              {...{ src, alt, width: imageSize, height: imageSize }}
            />
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
