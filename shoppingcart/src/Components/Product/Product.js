import React,{useContext} from 'react'
import { appContext } from '../../Context/AppContext';

export default function Product() {
    const {selectedProduct, setSelectedProduct} = useContext(appContext);
  return (

    <div>
        <div>
            <button onClick={()=>setSelectedProduct(null)}>Go back</button>
        </div>
        
        <div>
            <img src={selectedProduct.images[0]}/>
        </div>
        <div>
            <h1>{selectedProduct.title}</h1>
            <p>{selectedProduct.description}</p>
        </div>
        <div>
            <p>{selectedProduct.stock}</p>
        </div>
        <div>
            <h3>{selectedProduct.price}</h3>
        </div>
        
        
    
    </div>
    
  )
}
