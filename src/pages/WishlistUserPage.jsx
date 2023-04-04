import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import EditUser from "../components/EditUser";
import ContactFormResult from "../components/ContactFormResult";
import ContactFormCard from "../components/ContactFormCard";

function WishlistUserPage() {
  const { user, administrator } = useContext(AuthContext);

  const [edit, setEdit] = useState(false);
  const [contact, setContact] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleContact = () => {
    setContact(!contact);
  };

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
      ) : (
        <p></p>
      )}
      {administrator && contact ? <ContactFormResult /> : <p></p>}

    </div>
  );
}

export default WishlistUserPage;
