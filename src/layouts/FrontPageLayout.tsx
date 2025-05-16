import { ReactNode } from 'react';

import { getImageProps } from 'next/image';
import Link from 'next/link';

import img from '@/assets/images/frontpage-background-alt.jpg';
import { navItems } from '@/content/headerNav';

export interface Props {
  children?: ReactNode;
}

function getBackgroundImage(srcSet: string = '') {
  const imageSet = srcSet
    .split(', ')
    .map(str => {
      const [url, dpi] = str.split(' ');

      return `url("${url}") ${dpi}`;
    })
    .join('.');

  return `image-set(${imageSet})`;
}

export default function FrontPageLayout(props: Props) {
  const imgProps = getImageProps({ alt: '', src: img });

  console.log({ imgProps });

  const style = {
    height: '100vh',
    width: '100vw',
    backgroundImage: getBackgroundImage(imgProps.props.srcSet),
  };

  return (
    <>
      <main className={`bg-cover`} style={style}>
        <div className="p-24 space-y-8">
          <h1 className="text-white text-8xl font-hero inline-block bg-black">
            <span aria-hidden="true">
              バンカラ <br />
            </span>
            <span>bankara.ink</span>
          </h1>

          <div>
            <nav>
              <ul className="space-y-4 text-4xl">
                {navItems.map(it => (
                  <li key={it.id}>
                    <Link href={it.href} className="text-white bg-black">
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </>
  );
}
