
import Link from 'next/link';

const Navbar = () => {

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-lg font-bold">
          <Link href="/">My Movie App</Link>
        </div>
        <div className="flex space-x-4">
          
          <Link href="/movies">Movies</Link>
          <Link href="/actors">Actors</Link>
          <input type="text" placeholder="Search..." className="p-2 rounded" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;