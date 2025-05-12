import { Metadata } from 'next';
import { ReactNode } from 'react';

export interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Works',
  description: 'Various works over the years',
};

export default function WorksLayout({ children }: Props) {
  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-9xl my-4 py-4 font-hero">Works</h2>
      </div>
      {children}
    </div>
  );
}
