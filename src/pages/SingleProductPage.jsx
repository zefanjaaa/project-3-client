import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from "react-router-dom"
import ProductCard2 from '../components/ProductCard2'

const API_URL = "http://localhost:5005";



function SingleProductPage() {
    const [product, setProduct] = useState([])
    const { productId } = useParams()

    const getProduct = () => {
        const token = localStorage.getItem('authToken')
        axios.get(
            `${API_URL}/product/${productId}`,
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
                  <h3>{product.nameOfProduct}</h3>
                  <p><b>Brand :</b> {product.brand}</p>
              </div>
       )}
    </div>
      
  )
}

export default SingleProductPage