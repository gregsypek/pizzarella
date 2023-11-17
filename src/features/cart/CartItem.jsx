import React from 'react'
import DeleteItem from './DeleteItem'

function CartItem({item}) {
  const {pizzaId, name, totalPrice} = item
  return (
    <li className="py-3" key={pizzaId}>
    <div className="flex items-center justify-between gap-4 text-sm">
  <div>
  <p className="capitalize">
        <span className="text-base font-bold">
          {"1"}&times;
        </span>
        {name}
      </p>
      <p className="text-sm capitalize italic text-text100">
      cheese, salami
    </p>
  </div>
      <div className="font-bold flex items-center gap-2"><p>{totalPrice} </p>     <DeleteItem pizzaId={pizzaId}/></div>

    </div>


  </li>
  )
}

export default CartItem