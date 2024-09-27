import { IoIosStarHalf, IoIosStar, IoIosStarOutline } from "react-icons/io";

export function starRating(rating) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={`full-${i}`} className="text-black-500"><IoIosStar /></span>);
  }

  if (halfStar) {
    stars.push(<span key="half" className="text-black-500"><IoIosStarHalf /></span>
    );
  }

  for (let i = stars.length; i < 5; i++) {
    stars.push(<span key={`empty-${i}`} className="text-black-400"><IoIosStarOutline /></span>);
  }
  return stars;
}
