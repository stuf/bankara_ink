import NavLink from './NavLink';

import { navItems } from '@/content/headerNav';

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
