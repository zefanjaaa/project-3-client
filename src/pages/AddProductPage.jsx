import { useState } from "react";

import { useNavigate } from "react-router-dom";
 
import service from "../api/service";


 
function AddProductPage(props) {
  const [nameOfProduct, setNameOfProduct] = useState("");
  const [brand, setBrand] = useState("");
  const [categoryOfProduct, setCategoryOfProduct] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [ProductDetails, setProductDetails] = useState("");
//   const [RelatedProducts, setRelatedProducts] = useState([]);

 const navigate = useNavigate()

  const handleFileUpload = (e) => {
console.log('The file being uploaded is ===>', e.target.files[0])

    const uploadData = new FormData()
    
    uploadData.append('image', e.target.files[0])
    
    service
      .uploadImage(uploadData)
      .then(value => {
        console.log('THE RETURN VALUE IS ==>', value)
        setImage(value.fileUrl)
      })
    .catch((error) => console.log('THERE IS AN ERROR UPLOADING IMAGE',error))
}

 

 
function handleSubmit(e){
    e.preventDefault()

    

  service
    .addProduct({ nameOfProduct, brand, categoryOfProduct, image, price, size, quantity, ProductDetails })
    .then(res => {
      console.log("NEW PRODUCT ADDED", res)
      
      setNameOfProduct('')
      setBrand('')
      setCategoryOfProduct('')
      setImage('')
      setPrice(0)
      setSize('')
      setQuantity(0)
      setProductDetails('')

      navigate('/')
    })
    .catch((error) => {console.log('there is an error adding a new product',error)})
    }
  
 
  return (
    <div>
      <h3>New Product</h3>
    <form onSubmit={handleSubmit}>

        <label> Name of the product</label>
        <input
          type="text"
          name="name"
          value={nameOfProduct}
          onChange={(e) => setNameOfProduct(e.target.value)}
        />
 
        <label>Brand</label>
        <input
          type="text"
          name="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
 
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={categoryOfProduct}
          onChange={(e) => setCategoryOfProduct(e.target.value)}
        />

        <label>Price</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <label>Size</label>
        <input
          type="text"
          name="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />


        <input type='file' onChange={(event) => handleFileUpload(event)} />

        <label>Details</label>
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