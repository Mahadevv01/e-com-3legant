import React from 'react'

const Contact = () => {
  return (
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
  )
}

export default Contact