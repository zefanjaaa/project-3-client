import { createContext, useState } from "react";

export const CartContex = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteCart: () => {},
//   getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProds, setCartProds] = useState([]);

  function getProductQuantity(_id) {
    const quantity = cartProds.find((prod) => prod._id === _id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addOneToCart(_id) {
    const quantity = getProductQuantity(_id);

    if (quantity === 0) {
      //product is not in cart

      setCartProds([...cartProds, { _id: _id, quantity: 1 }]);
    } else {
      //prod is in cart

      setCartProds(
        cartProds.map(
          (prod) =>
            prod._id === _id //if contition
              ? { ...prod, quantity: prod.quantity + 1 } //if statement is true
              : prod //if it false, ternary statement :
        )
      )
    }
  }

  function removeOneFromCart(_id) {
    const quantity = getProductQuantity(_id);

    if (quantity == 1) {
      deleteCart(_id);
    } else {
      setCartProds(
        cartProds.map(
          (prod) =>
            prod._id === _id 
              ? { ...prod, quantity: prod.quantity - 1 } 
              : prod 
        )
      )
    }
  }



  function deleteCart(_id) {
    setCartProds((cartProds) =>
      cartProds.filter((currentProd) => {
        return currentProd._id != _id;
      })
    );
  }

//  function getTotalCost(){
//    let totalCost = 0
//    allprodsIDKwheretheyare.map((cartItem) =>{
//       const Dataofaproduct = getProdData(cartItem._id);
//       totalCost += (Dataofaproduct.price * cartItem.quantity);
//    });
//    return totalCost
//  }


  const contexValue = {
    items: [],
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteCart,
   //  getTotalCost, 
    
    //so we can define all these functions
  };

  return (
    <CartContex.Provider value={contexValue}>
    {children}
    </CartContex.Provider>
  );
}

export default CartProvider;
