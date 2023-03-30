import axios from "axios";

const api = axios.create({
   baseURL: "http://localhost:5005"
});

const error = (err) => {
   throw err
};

const getProducts = () => {
   return api.get('/products')
      .then((res) => res.data)
      .catch(error);
};

const uploadImage = (image) => {
   return api.post('/product/upload', image)
      .then((res,) => res.data)
      .catch(error);
};

const addProduct = (addProduct) => {
   return api.post('/product/product', addProduct)
      .then((res,) => res.data)
      .catch(error);
};

export default {
   getProducts, uploadImage, addProduct
}