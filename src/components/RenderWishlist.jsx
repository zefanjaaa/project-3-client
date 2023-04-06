import React,{useContext,useEffect,useState} from 'react'
import axios from 'axios';
import { AuthContext } from '../context/auth.context';

function RenderWishlist() {
    const [wishlist, setWishlist] = useState([])
    
    const {user} = useContext(AuthContext)

    const API = "http://localhost:5005";

    const getWishList = () => {
       
        axios.get(`${API}/product/product/${user._id}/wishlist`
            )
            .then((response) => {
                console.log(response)
                setWishlist(response.data)
            })
        .catch((error) => {console.log('there is an error rendering the wishlist',error)})
    }

    useEffect(() => {
getWishList()
    },[])


  return (
      <div>
          <h1>This is your wishlist</h1>
          {wishlist.map(item => (
              <div>
                  {item && item.nameOfProduct && <h2>{item.nameOfProduct}</h2> }
                  {/* {item.price} */}
              </div>
          ))}
      </div>
  )
}

export default RenderWishlist