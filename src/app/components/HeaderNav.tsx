import Link from 'next/link';
import NavLink from './NavLink';

const navItems = [
  {
    id: 'works',
    label: 'Works',
    href: '/works',
  },
  {
    id: 'about',
    label: 'About',
    href: '/about',
  },
];

export default function HeaderNav() {
  return (
    <nav>
      <ul className="uppercase inline-flex space-x-4">
        {navItems.map(it => (
          <NavLink
            key={it.id}
            href={it.href}
            className="p-1"
            activeClassName="bg-black text-white"
          >
            {it.label}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
