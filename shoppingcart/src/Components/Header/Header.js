import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='head'>
      <div>
          <h1 className='heading'>Shopping cart</h1>
      </div>
      
      <div>
        <div>
        <input type="text" placeholder='Search product'/>
        </div>
        
        <div>Sort</div>
      </div>
    </div>
  )
}
