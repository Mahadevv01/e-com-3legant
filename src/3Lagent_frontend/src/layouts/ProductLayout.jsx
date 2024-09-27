import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { CgMenuGridO } from "react-icons/cg";
import { TbLayoutGridFilled } from "react-icons/tb";
import { CiGrid2V , CiGrid2H} from "react-icons/ci";
import Product from "../components/Product";
import Contact from "../components/Contact";




const ProductLayout = () => {
  return (
    <div>
      <Carousel />

      <section className="px-10 lg:px-40 py-20">
        <div>
            <div className="md:flex items-end justify-between">
               <div className="flex items-center justify-center gap-4">
               <div>
                    <p className="pb-2 text-gray-400">CATEGORIES</p>
                    <select name="" id="" className="border border-black p-2 rounded-lg w-[150px] md:w-[180px]">
                        <option value="">Living Room</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </div>
                <div>
                    <p className="pb-2 text-gray-400">PRICES</p>
                    <select name="" id="" className="border border-black p-2 rounded-lg w-[150px] md:w-[180px]">
                        <option value="">All Price</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </div>
               </div>
               <div className="flex items-center justify-between sm:gap-20 md:gap-2 ">
                    <select name="" id="">
                        <option value="">Sort By</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                   <div className="flex p-2 rounded gap-2 text-2xl text-black-200">
                   <CgMenuGridO/>
                    <TbLayoutGridFilled/>
                    <CiGrid2V/>
                    <CiGrid2H/>
                   </div>
               </div>
            </div>
        </div>
        <div className="py-8">
            <Product/>
        </div>
      </section>

      <Contact/>
    </div>
  );
};

export default ProductLayout;