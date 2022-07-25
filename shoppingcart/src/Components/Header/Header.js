import React from 'react'
import './Header.css'



export default function Header() {



  return (
    <div className='head'>
      <div className='heading-container'>
          <h1 className='heading'>Shopping cart</h1>
      </div>
      
      <div>
        <div>
        <input type="text" placeholder='Search by name'/>
        </div>
        
        <div>Sort</div>
        <div>
          
        </div>
        
      </div>
    </div>
  )
}
