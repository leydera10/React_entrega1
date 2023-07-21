import React from 'react'
import {ShoppingCartIcon} from '@heroicons/react/24/outline'

function CartWidget() {
  return (
    <div className='flex gap-3'>
        <ShoppingCartIcon className=' h-8'/>
        <p className=' text-xl'>0</p>
    </div>
  )
}

export default CartWidget
