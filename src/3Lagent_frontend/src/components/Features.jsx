import React from 'react'

const data = [
    {
        id : 1,
        img : "shipping.svg",
        titel : "Free Shipping",
        desc : "Order above $200"
    },
    {
        id : 2,
        img : "money.svg",
        titel : "Money-back",
        desc : "30 days guarantee"
    },
    {
        id : 3,
        img : "lock 01.svg",
        titel : "Secure Payments",
        desc : "Secured by Stripe"
    },
    {
        id : 4,
        img : "call.svg",
        titel : "24/7 Support",
        desc : "Phone and Email support"
    },
]

const Features = () => {
  return (
    <div className='flex overflow-scroll lg:overflow-hidden px-10 lg:px-40 gap-6 box-content lg:gap-10 my-10'>
      {
        data.map((item )=> (
            <div key={item.id} className='w-[200px] h-[200px] lg:w-[250px] lg:h-[200px] flex flex-col items-start justify-center box-content bg-[#F3F5F7] p-4'>
                <img src={item.img} alt={item.titel} className='lg:w-16'/>
                <p className='text-2xl'>{item.titel}</p>
                <p>{item.desc}</p>
            </div>
        ))
      }
    </div>
  )
}

export default Features
