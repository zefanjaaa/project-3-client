import { createContext, useState } from "react";

export const CartContex = createContext();

export function CartProvider({ children }) {
  const [cartProds, setCartProds] = useState([]);

  // const getCart = () => {
  //   axios.get(/*to cart */).then(response => setCartProds(response.data))
  // }

  function getProductQuantity(_id) {
    const quantity = cartProds.find((prod) => prod._id === _id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addOneToCart(product) {
    const quantity = getProductQuantity(product._id);

    if (quantity === 0) {
      //product is not in cart

      setCartProds([...cartProds, { ...product, quantity: 1 }]);
    } else {
      //prod is in cart

      setCartProds(
        cartProds.map(
          (prod) =>
            prod._id === product._id //if contition
              ? { ...prod, quantity: prod.quantity + 1 } //if statement is true
              : prod //if it false, ternary statement :
        )
      )
    }
  }

  function removeOneFromCart(product) {
    const quantity = getProductQuantity(product._id);

    if (quantity === 1) {
      deleteCart(product);
    } else {
      setCartProds(
        cartProds.map(
          (prod) =>
            prod._id === product._id 
              ? { ...prod, quantity: prod.quantity - 1 } 
              : prod 
        )
      )
    }
  }

  function deleteCart(product) {
    setCartProds((cartProds) =>
      cartProds.filter((currentProd) => {
        return currentProd._id !== product._id;
      })
    );
  }

  function deleteWholeCart(){
    setCartProds([])
  }

  const getTotalCost = () => cartProds.reduce((acc, cV) => acc + (cV.quantity * cV.price), 0)

  const getTotalItems = () => cartProds.reduce((acc, cV) => acc + cV.quantity, 0)

  const contexValue = {
    items: cartProds,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteCart,
    getTotalCost,
    getTotalItems ,
    deleteWholeCart
   
    //so we can define all these functions
  };

  return (
    <CartContex.Provider value={contexValue}>
    {children}
    </CartContex.Provider>
  );
}

export default CartProvider;
