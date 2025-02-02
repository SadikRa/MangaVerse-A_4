export type TMangaGenres =
  | 'Shonen'
  | 'Shojo'
  | 'Seinen'
  | 'Slice of life'
  | 'Sports manga'
  | 'Josei'
  | 'Isekai'
  | 'Mecha'
  | 'Fantasy'
  | 'Sci-Fi'
  | 'Horror'
  | 'Psychological'
  | 'Mystery'
  | 'Thriller'
  | 'Romance'
  | 'Supernatural'
  | 'Historical'
  | 'Adventure'
  | 'Comedy'
  | 'Drama';

export type Product = {
  _id: string;
  id?: string;
  title: string;
  author: string;
  image: string;
  price: number;
  category: TMangaGenres;
  description: string;
  quantity: number;
  inStock: boolean;
  isDeleted: boolean;
};








// [
//   {
//     "title": "Naruto",
//     "author": "Masashi Kishimoto",
//     "image": "https://example.com/naruto.jpg",
//     "price": 200,
//     "category": "Shonen",
//     "description": "A test book.",
//     "quantity": 1000,
//     "inStock": true,
//     "isDeleted": false
//   },
//   {
//     "title": "Dragon Ball Super",
//     "author": "Akira Toriyama",
//     "image": "https://example.com/dragon-ball-super.jpg",
//     "price": 220,
//     "category": "Shonen",
//     "description": "The epic continuation of Dragon Ball.",
//     "quantity": 800,
//     "inStock": true,
//     "isDeleted": false
//   },
//   {
//     "title": "One Piece",
//     "author": "Eiichiro Oda",
//     "image": "https://example.com/one-piece.jpg",
//     "price": 250,
//     "category": "Shonen",
//     "description": "Follow the adventures of Luffy and his crew.",
//     "quantity": 1200,
//     "inStock": true,
//     "isDeleted": false
//   },
//   {
//     "title": "Bleach",
//     "author": "Tite Kubo",
//     "image": "https://example.com/bleach.jpg",
//     "price": 180,
//     "category": "Shonen",
//     "description": "A high school student becomes a Soul Reaper.",
//     "quantity": 500,
//     "inStock": true,
//     "isDeleted": false
//   },
//   {
//     "title": "Demon Slayer",
//     "author": "Koyoharu Gotouge",
//     "image": "https://example.com/demon-slayer.jpg",
//     "price": 230,
//     "category": "Shonen",
//     "description": "A boy fights demons to save his sister.",
//     "quantity": 1500,
//     "inStock": true,
//     "isDeleted": false
//   },
//   {
//     "title": "Sakamoto Days",
//     "author": "Yuto Suzuki",
//     "image": "https://example.com/sakamoto-days.jpg",
//     "price": 210,
//     "category": "Shonen",
//     "description": "The world's deadliest assassin is now a shopkeeper.",
//     "quantity": 400,
//     "inStock": true,
//     "isDeleted": false
//   }
// ]
