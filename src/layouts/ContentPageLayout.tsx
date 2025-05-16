import { ReactNode } from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export interface Props {
  title: string;
  children?: ReactNode;
}

export default function ContentPageLayout(props: Props) {
  const { children, title } = props;

  return (
    <div>
      <Header />

      <article>
        <div className="container mx-auto">
          <h2 className="text-9xl my-4 py-4 font-hero">{title}</h2>
        </div>

        <div className="container mx-auto">{children}</div>
      </article>

      <Footer />
    </div>
  );
}
