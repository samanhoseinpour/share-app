import Link from "next/link";
import Image from "next/image";

export const navbarItems = [
  { name: "Apps", path: "/apps" },
  { name: "Community", path: "/community" },
];

const Navbar = () => {
  return (
    <header className="bg-white/10 shadow-2xl text-black backdrop-blur-3xl py-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center flex-1 space-x-4">
          <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
          <h2 className="font-bold">Share Applications</h2>
        </Link>
        <ul className="flex space-x-4 flex-1 justify-center font-semibold">
          {navbarItems.map((item) => (
            <li key={item.path}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex-1 flex justify-end text-white font-bold">
          <Link
            href="/apps/share"
            className="bg-indigo-600 px-8 py-4 rounded-full hover:bg-indigo-500 transition"
          >
            Share App
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
