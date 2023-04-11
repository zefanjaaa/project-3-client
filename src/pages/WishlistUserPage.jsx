import React, { useContext,  useState } from "react";
import { AuthContext } from "../context/auth.context";
import EditUser from "../components/EditUser";
import ContactFormResult from "../components/ContactFormResult";
import RenderWishlist from "../components/RenderWishlist";
import { useParams } from "react-router-dom";

function WishlistUserPage() {
  const { user, administrator } = useContext(AuthContext);
  const { contactId } = useParams()
  
  const [edit, setEdit] = useState(false);
  const [contact, setContact] = useState(false);
  const [wishlist,setWishlist] = useState(false)

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleContact = () => {
    setContact(!contact);
  };

  const handleWishlist = () => {
    setWishlist(!wishlist)
  }
  return (
    <div>
      <h1>User environment</h1>
      <p>
        <b>Welcome:</b> {user && user.name} {user && user.surname}
      </p>

      <button onClick={handleEdit}>Edit</button>
      {edit ? <EditUser user={user} /> : <p></p>}

      {administrator ? (
        <button onClick={handleContact}>Contact</button>
      ) : (<p></p>)}
      {administrator && contact ? <ContactFormResult contactId={contactId} /> : <p></p>}


      <button onClick={handleWishlist}>wishlist</button>
{wishlist ?  <RenderWishlist  /> : <p></p> }
    </div>
  );
}

export default WishlistUserPage;
