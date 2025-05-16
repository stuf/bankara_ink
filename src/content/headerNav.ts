export type NavItem = {
  id: string;
  label: string;
  href: string;
  disabled?: boolean;
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
    disabled: true,
  },
  {
    id: 'refs',
    label: 'Reference',
    href: '/ref',
    disabled: true,
  },
];
