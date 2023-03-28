import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const API_URL = "http://localhost:5005";
 
function AddProductPage(props) {
  const [nameOfProduct, setNameOfProduct] = useState("");
  const [brand, setBrand] = useState("");
  const [categoryOfProduct, setCategoryOfProduct] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(0);

//   const [RelatedProducts, setRelatedProducts] = useState([]);

  const [ProductDetails, setProductDetails] = useState("");



  const navigate = useNavigate("") //destructuring navigate to use it in function below

 
function handleSubmit(e){
    e.preventDefault()

    const bodyToPost = {nameOfProduct,brand,categoryOfProduct,image,price,size,quantity, RelatedProducts, ProductDetails} //like destructuring but upsidedown as we puting stuff into object
    
    axios.post(`${API_URL}/product/products`, bodyToPost)
    .then (()=>{
      setNameOfProduct('')
      setBrand('')
      setImage('')
      setPrice(0)
      setQuantity(0)
      setProductDetails("")
      setCategoryOfProduct('')
      // setRelatedProducts([])
      setSize('')

      alert("Done")
      navigate("/")


    })
  }
 
  return (
    <div>
    <form action="" onSubmit={handleSubmit}>

        <label htmlFor=""> Name of the product</label>
        <input
          type="text"
          name="name"
          value={nameOfProduct}
          onChange={(e) => setNameOfProduct(e.target.value)}
        />
 
        <label htmlFor="">Brand</label>
        <input
          type="text"
          name="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
 
        <label htmlFor="">Category</label>
        <input
          type="text"
          name="category"
          value={categoryOfProduct}
          onChange={(e) => setCategoryOfProduct(e.target.value)}
        />

        <label htmlFor="">Price</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label htmlFor="">Quantity</label>
        <input
          type="number"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <label htmlFor="">Size</label>
        <input
          type="text"
          name="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />

        <label htmlFor="">Image</label>
        <input
          type="file"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label htmlFor="">Details</label>
        <input
          type="text"
          name="details"
          value={ProductDetails}
          onChange={(e) => setProductDetails(e.target.value)}
        />

        


        <button type="submit">Submit</button>

      </form>
    
    </div>
  )
}

export default AddProductPage