import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import { FaArrowRight } from "react-icons/fa6";
import Product from "../components/Product";
import Features from "../components/Features";
import Footer from "../components/Footer";



const MainLayout = () => {
  return (
    <div>
      <section>
        <Carousel />
        <div className="px-10 lg:px-40 md:flex items-center justify-between py-4">
          <div>
            <p className="text-[38px] md:text-[42px] lg:text-[72px]">
              Simply Unique/ Simply Better.
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">3legant</span> is a gift &
              decorations store based in HCMC, Vietnam. Est since 2019.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="lg:flex px-10 lg:px-40 h-auto">
        <img
          src="livingRoom.png"
          alt=""
          className="p-2 w-full h-[100%] lg:w-[50%]"
        />
        <div>
          <img src="bathroom.png" alt="" className="p-2 w-full h-[50%]" />
          <img src="kitchen.png" alt="" className="p-2 w-full h-[50%]" />
        </div>
      </section>
      <section className="px-10 lg:px-40 my-10">
        <div className="flex items-end justify-between">
          <p className="text-[20px] md:text-[30px] lg:text-[40px] w-20 md:w-40">
            New Arrivals
          </p>
          <p className="border-b-2 border-black flex items-center gap-1">
            More Products <FaArrowRight />
          </p>
        </div>
        <div className="flex flex-nowrap gap-4 my-4 snap-x">
          <Product />
        </div>
      </section>
      <section className="">
        <Features />
      </section>
      <section className="md:flex items-center-justify-evenly">
        <div>
          <img src="home.png" alt="home" />
        </div>
        <div className="flex items-center justify-center">
          <div className="md:px-10 lg:px-20 lg:w-[90%]">
            <p className="text-[#377DFF] font-semibold text-sm">
              SALE UP TO 35% OFF
            </p>
            <p className="text-[40px] leading-10">
              HUNDREDS of New lower prices!
            </p>
            <p>
              It’s more affordable than ever to give every room in your home a
              stylish makeover
            </p>

            <p className="border-b-2 border-black flex items-center gap-1 w-24">
              Shop Now <FaArrowRight />
            </p>
          </div>
        </div>
      </section>
      <section className="relative flex w-full h-[360px] items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <img src="drawer-chair.png" alt="Drawer" className="w-full h-full" />
        </div>

        <div className="relative z-10  rounded-lg p-8 max-w-lg text-center">
          <div className="space-y-4">
            <p className="text-[44px]">Join Our Newsletter</p>
            <p>Sign up for deals, new products, and promotions</p>
          </div>
          <div className="mt-6 flex border-b-2 p-2 items-center justify-center space-x-2">
            <input
              type="text"
              placeholder="Email address"
              className="p-2 bg-transparent rounded-md w-64"
            />
            <button className="p-2 rounded-md">Sign Up</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainLayout;