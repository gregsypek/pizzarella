import React from 'react'
import bg from "../images/order_bg.png";

function CardLogo() {
  return (
    <div className=" m-3 w-full h-24 lg:hidden bg-no-repeat  bg-contain bg-right" style={{backgroundImage: `url(${bg})`}}>
            
    </div>
  )
}

export default CardLogo