'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export interface Props {
  href: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}

export default function NavLink(props: Props) {
  const { className, activeClassName, children, href, ...rest } = props;
  const path = usePathname();

  const isActiveRoute = path === href;

  console.log({ path, href, isActiveRoute });

  return (
    <Link
      href={href}
      className={[className, path === href && activeClassName].join(' ')}
    >
      {children}
    </Link>
  );
}
