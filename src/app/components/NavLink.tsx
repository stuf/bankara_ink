'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export interface Props {
  href: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}

export default function NavLink(props: Props) {
  const { className, activeClassName, children, href } = props;
  const path = usePathname();

  const isActiveRoute = path === href;

  return (
    <Link
      href={href}
      className={[className, isActiveRoute && activeClassName].join(' ')}
    >
      {children}
    </Link>
  );
}
