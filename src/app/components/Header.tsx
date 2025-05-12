import Link from 'next/link';
import HeaderNav from './HeaderNav';

export default function Header() {
  return (
    <header>
      <div className="container mx-auto my-4 py-4">
        <div className="flex space-x-4">
          <h1 className="text-2xl underline">
            <Link href="/" className="text-black">
              バンカラ ・ bankara
            </Link>
          </h1>

          <HeaderNav />
        </div>
      </div>
    </header>
  );
}
