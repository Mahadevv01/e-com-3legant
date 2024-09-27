import React, { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { products } from "../data"; // Ensure this contains product data
import { starRating } from "../functions/rating";
import { CartCounterContext } from "../features/Context/CartContext";
import { Link } from "react-router-dom";

const Product = () => {
  const { handleAddCart } = useContext(CartCounterContext);

  // Debugging: Check if products exist
  if (!products || products.length === 0) {
    return <p>No products available to display.</p>;
  }

  return (
    <div className="flex flex-wrap items-center justify-evenly">
      {products.map((item) => (
        <div
          className="relative flex flex-col items-start mb-8"
          key={item.id}
        >
          <div className="relative group flex items-center justify-center">
            <img src={item.img} alt="product img" className="" />
            <p className="absolute left-4 top-2 bg-white rounded px-[12px] text-[14px]">
              New
            </p>
            <p className="absolute left-4 top-10 bg-[#38CB89] rounded px-[12px] text-[14px]">
              -50%
            </p>
            <p className="absolute top-4 right-4 bg-white p-1 rounded-lg text-xl">
              <CiHeart />
            </p>
            <button
              className="hidden group-hover:flex p-2 text-center absolute rounded-md bg-[#141718] text-white bottom-10 w-[90%]"
              onClick={() => handleAddCart(item.id, item)}
            >
              Add to cart
            </button>
          </div>
          <Link to="/product" state={{ fromHome: { data: item } }}>
            <div className="mt-4">
              <p className="flex text-black">{starRating(item.rating)}</p>
              <p>{item.title}</p>
              <span className="flex items-center gap-2">
                <p>${item.price}</p>
                <p className="line-through">$400.00</p>
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Product;
