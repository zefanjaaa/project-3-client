import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from "react-router-dom"
import ProductCard2 from '../components/ProductCard2'

const API_URL = "http://localhost:5005";



function SingleProductPage() {
    const [product, setProduct] = useState(null)
    const { productId } = useParams()

    const getProduct = () => {
        const token = localStorage.getItem('authToken')
        axios.get(
            `${API_URL}/product/products/${productId}`,
            {headers: {Authorization:`Bearer${token}`}}
        )
            .then((res) => {
                const oneProduct = res.data;
                setProduct(oneProduct)
            })
        .catch((error)=>{console.log('THERE IS AN ERROR',error)})
}

    useEffect(() => {
        getProduct()
    }, [])
    
    
  return (
      <div>
          {product && (
              <div>
                  <img src={product.image} alt='pic-product' />

                  <h3>{product.nameOfProduct}</h3>

                  <br />
                  <br />
                  <p><b>Brand :</b> {product.brand}</p>
                  <p> <b>$ :</b> {product.price}</p>
                  <p><b> Size :</b> {product.size}</p>
                  <p><b> Category:</b> {product.categoryOfProduct}</p>
              </div>
       )}
    </div>
    
      
  )
}

export default SingleProductPage