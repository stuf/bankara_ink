export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
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
  {
    id: 'refs',
    label: 'Reference',
    href: '/ref',
  },
];
