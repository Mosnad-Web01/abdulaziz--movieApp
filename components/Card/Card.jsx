// import Image from 'next/image';

// export default function MovieCard({ title, posterPath, releaseDate }) {
//   const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden">
//       <Image
//         src={imageUrl}
//         alt={title}
//         width={500}
//         height={750}
//         className="w-full h-auto"
//       />
//       <div className="p-4">
//         <h2 className="text-xl font-semibold mb-2">{title}</h2>
//         <p className="text-gray-600">Release Date: {releaseDate}</p>
//       </div>
//     </div>
//   );
// }