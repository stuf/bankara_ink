import { Fragment } from 'react';

const socials = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/piparkaq',
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto border-t-2 my-4 py-4 text-right">
        &copy; 2025 piparkaq{' '}
        {socials.map((it, ix) => (
          <Fragment key={ix}>
            ・ <a href={it.href}>{it.label}</a>
          </Fragment>
        ))}
      </div>
    </footer>
  );
}
