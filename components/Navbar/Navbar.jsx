// // app/components/Navbar.js
// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { fetchGenres } from '@/services/useFetch'; // Create this function to fetch genres

// const Navbar = () => {
//   const [genres, setGenres] = useState([]);

//   useEffect(() => {
//     const getGenres = async () => {
//       const genreList = await fetchGenres();
//       setGenres(genreList);
//     };
//     getGenres();
//   }, []);

//   return (
//     <nav className="bg-gray-800 text-white p-4">
//       <div className="container mx-auto flex justify-between">
//         <div className="text-lg font-bold">
//           <Link href="/">My Movie App</Link>
//         </div>
//         <div className="flex space-x-4">
//           <div className="relative">
//             <button className="hover:underline">Genres</button>
//             <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
//               {genres.map((genre) => (
//                 <Link key={genre.id} href={`/genres/${genre.id}`} className="block px-4 py-2 hover:bg-gray-100">
//                   {genre.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//           <Link href="/movies/top-rated">Top Rated</Link>
//           <Link href="/movies/popular">Popular</Link>
//           <Link href="/actors">Actors</Link>
//           <input type="text" placeholder="Search..." className="p-2 rounded" />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from '@shadcn/ui';
import Link from 'next/link';

const Navbar = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      const genreList = await fetchGenres();
      setGenres(genreList);
    };
    getGenres();
  }, []);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-lg font-bold">
          <Link href="/">My Movie App</Link>
        </div>
        <div className="flex space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="hover:underline">Genres</button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-black rounded-md shadow-lg">
              {genres.map((genre) => (
                <DropdownMenuItem key={genre.id}>
                  <Link href={`/genres/${genre.id}`} className="block px-4 py-2 hover:bg-gray-100">
                    {genre.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/movies/top-rated">Top Rated</Link>
          <Link href="/movies/popular">Popular</Link>
          <Link href="/actors">Actors</Link>
          <input type="text" placeholder="Search..." className="p-2 rounded" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
