import React from 'react';

const CartOverview = () => {
  return (
 
    <div className=" w-20 sm:w-32 z-50 sm:w-30 border-bg300 fixed bottom-20 right-0 p-4 bg-bg200 rounded-2xl border-2 ">
      <div className='flex justify-end cursor-pointer '>
      <span className=' text-text200 hover:text-accent200 text-base' aria-hidden="true">&times;</span>

      </div>
      <div className="flex flex-col justify-between gap-1 sm:gap-3">
        <p className=" text-center  text-sm sm:text-base font-bold capitalize text-text100 ">
        Cart
        </p>

        <div
          className="h-0.5 w-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 87, 34, 0.00) 0%, #979797 51.62%, rgba(255, 87, 34, 0.00) 100%)",
          }}
        />
        <p className=" text-center  text-xs sm:text-sm font-normal  text-text200 ">
       20 Pizzas
        </p>
        <div className="sm:mt-2 text-center text-xs sm:text-sm font-normal  text-text200">
       <span className="font-bold ">Total:</span> $50.00
       </div>
      
      </div>
    </div>
  );
};

export default CartOverview;
