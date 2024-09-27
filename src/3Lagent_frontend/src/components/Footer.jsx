import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="px-10 lg:px-40 bg-[#141718] text-white">
        <div className="md:flex items-center justify-between w-full py-8">
          <span className="flex items-center justify-between">
          <p className="text-[24px]">3legant.</p>
          <p>Gift & Decoration Store</p>
          </span>
          <span className="flex items-center gap-4">
            <p>Home</p>
            <p>Shop</p>
            <p>Product</p>
            <p>Blog</p>
            <p>Contact Us</p>
          </span>
        </div>
        <div className="md:flex items-center justify-between w-full border-t py-4">
          <span className="flex gap-4">
            <p>Copyright © 2023 3legant. All rights reserved</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </span>
            <span className="flex items-center gap-4 text-2xl">
              <FaInstagram/>
              <CiFacebook/>
              <CiYoutube/>
            </span>
        </div>
      </footer>
  )
}

export default Footer
