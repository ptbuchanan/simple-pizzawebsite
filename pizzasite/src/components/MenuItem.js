import React from 'react'

/* Individual component that will render data based on props that will contain
the name of the item and the price of the item.  We can grab the name and price
*/
function MenuItem({name, price}) {
  return (
    <div className='menuItem'>
        <h1> {name} </h1>
        <p> ${price} </p>
    </div>
  )
}

export default MenuItem