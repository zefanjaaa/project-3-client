import { useState } from "react";

import { useNavigate } from "react-router-dom";

import service from "../api/service";

import { Form, Button } from "react-bootstrap";

import '../style/AddProduct.css'

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

  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    console.log("The file being uploaded is ===>", e.target.files[0]);

    const uploadData = new FormData();

    uploadData.append("image", e.target.files[0]);

    service
      .uploadImage(uploadData)
      .then((value) => {
        console.log("THE RETURN VALUE IS ==>", value);
        setImage(value.fileUrl);
      })
      .catch((error) =>
        console.log("THERE IS AN ERROR UPLOADING IMAGE", error)
      );
  };

  function handleSubmit(e) {
    e.preventDefault();

    service
      .addProduct({
        nameOfProduct,
        brand,
        categoryOfProduct,
        image,
        price,
        size,
        quantity,
        ProductDetails,
      })
      .then((res) => {
        console.log("NEW PRODUCT ADDED", res);

        setNameOfProduct("");
        setBrand("");
        setCategoryOfProduct("");
        setImage("");
        setPrice(0);
        setSize("");
        setQuantity(0);
        setProductDetails("");

        navigate("/");
      })
      .catch((error) => {
        console.log("there is an error adding a new product", error);
      });
  }

  return (
    
      <div className="row align-items-center styleForm">
      <div class="mx-auto col-10 col-md-8 col-lg-6">
      <h3>NEW PRODUCT</h3>
      <Form onSubmit={handleSubmit}>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> NAME OF THE PRODUCT</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={nameOfProduct}
            onChange={(e) => setNameOfProduct(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> BRAND</Form.Label>
          <Form.Control
            type="text"
            name="brand"
            placeholder="Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> CATEGORY</Form.Label>
          <Form.Control
            type="text"
            name="category"
            placeholder="ART/HOME/SALE"
            value={categoryOfProduct}
            onChange={(e) => setCategoryOfProduct(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> PRICE</Form.Label>
          <Form.Control
            type="number"
            name="price"
            placeholder="0"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> QUANTITY</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> SIZE</Form.Label>
          <Form.Control
            type="text"
            name="size"
            placeholder="XS/S/M/L/XL/FREE SIZE"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> PHOTO</Form.Label>
          <Form.Control
            type="file"
            onChange={(event) => handleFileUpload(event)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> DETAILS</Form.Label>
          <Form.Control
            type="text"
            name="details"
            value={ProductDetails}
            onChange={(e) => setProductDetails(e.target.value)}
          />
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
      </div>
      </div>
    
  );
}

export default AddProductPage;
