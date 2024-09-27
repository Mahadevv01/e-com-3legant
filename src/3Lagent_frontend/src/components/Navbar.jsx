import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
import FlayoutCart from "./FlayoutCart";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isCart, setIsCart] = useState(false);

  const toggleCart = () => {
    setIsCart(true);
  };
  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };
  return (
    <div>
      <nav className="relative flex items-center justify-between px-10 lg:px-40 p-4 w-full text-[18px]">
        <p>3legant.</p>
        <span className="hidden md:flex items-center justify-between gap-10">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/shop">Shop</Link>
          </p>
          <p>
            <Link to="/product">Product</Link>
          </p>
          <p>
            <Link to="/contact">Contact Us</Link>
          </p>
        </span>
        <span className="flex gap-4">
          <p>
            <RiSearchLine />
          </p>
          <p onClick={toggleCart}>
            {isCart ? <FlayoutCart isCart={isCart} setIsCart={setIsCart}/> : <HiOutlineShoppingBag />}
          </p>
          <p>
            <CgProfile />
          </p>
          <p className="sm:flex md:hidden" onClick={toggleMenu}>
            {isMenu ? <Menu /> : <IoMdMenu />}
          </p>
        </span>
      </nav>
    </div>
  );
};

export default Navbar;

export const Menu = () => {
  return (
    <>
      <span className="bg-white w-[200px] p-4 absolute top-0 right-0 flex flex-col items-start justify-between gap-10">
        <BiLeftArrowAlt />
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/shop">Shop</Link>
        </p>
        <p>
          <Link to="/product">Product</Link>
        </p>
        <p>
          <Link to="/contact">Contact Us</Link>
        </p>
      </span>
    </>
  );
};