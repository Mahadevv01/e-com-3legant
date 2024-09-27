import React, { useContext, useState } from "react";
import { CartCounterContext } from "../features/Context/CartContext";
import { Link } from "react-router-dom";

const FlayoutCart = ({setIsCart,isCart}) => {
  const { cartItems, handleAddQuantity, handleRemoveQuantity } = useContext(CartCounterContext);

  const closeCart = () => {
    setIsCart(false);
  };

  const handleCartClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="w-[320px] bg-white h-screen absolute top-0 right-0 box-content z-20" onClick={handleCartClick}>
      <div className="flex items-center justify-between p-4">
        <p className="font-medium text-[28px]">Cart</p>
        <button className="bg-black text-white rounded-3xl p-3 py-1" onClick={closeCart}>X</button>
      </div>
      <div className=" flex flex-col px-4 justify-between gap-10  box-content">
        <div className="flex flex-col w-full justify-between gap-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between py-4 border-b"
            >
              <div className="flex gap-4">
                <img
                  src={item.img}
                  alt="Product Image"
                  className="h-[80px] w-[96px] "
                />
                <div className="">
                  <p className="font-semibold text-[14px] pb-1">{item.title}</p>
                  <p className="text-gray-500 text-[14px] pb-2">Color: {item.color}</p>
                  <div className="flex items-center rounded border pb-1 px-1">
                    <button className="px-1"onClick={() => handleAddQuantity(item.id, item.quantity)}>+</button>
                    <p className="px-4">{item.quantity}</p>
                    <button className="px-1" onClick={() => handleRemoveQuantity(item.id, item.quantity)}>-</button>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[14px] font-semibold">${item.price}</p>
                <button className="">X</button>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-4">
          <div className="flex border-b py-2 items-center justify-between mb-2">
            <p>Subtotal</p>
            <p>
              $
              {cartItems.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
              )}
            </p>
          </div>
          <div className="flex items-center justify-between mb-4">
            <p>Total</p>
            <p>
              $
              {cartItems.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
              )}
            </p>
          </div>
          <div className="flex flex-col gap-2 bg-white">
            <button className="bg-black text-white py-2 rounded-md">
            <Link to="/check">Checkout</Link>
            </button>
            <button className="border-b py-2"><Link to="/cart">View Cart</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlayoutCart;
