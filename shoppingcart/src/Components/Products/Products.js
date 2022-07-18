import React, { useContext } from 'react'
import data from '../../Object/products.json'
import Aside from '../Aside/Aside'
import Card from '../Card/Card'
import Header from '../Header/Header'
import './Products.css'
import { appContext } from '../../Context/AppContext'
import Product from '../Product/Product'

export default function Products() {

  const {selectedProduct, setSelectedProduct} = useContext(appContext);

  if(selectedProduct!==null){
    return <Product />
  }
  
  return (
    <div>

      <Header/>
      <Aside/>

      <div className='productcontainer'>

        {data.products.map((product)=>(
          <Card product={product}/>
        )
        )}

      </div>
    </div>
  )
}
