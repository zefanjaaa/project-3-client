import React, { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import EditUser from "../components/EditUser";
import ContactFormResult from "../components/ContactFormResult";
import RenderWishlist from "../components/RenderWishlist";
import { useParams } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import "../style/WishlistPage.css";

function WishlistUserPage() {
  const { user, administrator } = useContext(AuthContext);
  const { contactId } = useParams();

  const [edit, setEdit] = useState(false);
  const [contact, setContact] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const [add, setAdd] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleContact = () => {
    setContact(!contact);
  };

  const handleWishlist = () => {
    setWishlist(!wishlist);
  };

  const handleAdd = () => {
    setAdd(!add);
  };

  return (
    <div className="AllWishpage">
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="wishlist-header border-light p-2">
                <div className="row">

                  {/*<div className="col-md-6">
                    <h2 className="mb-0 font-weight-bold">YOUR PROFILE</h2>
                  </div>*/}

                  <div className="col-md-6">
                  <br></br>
                    <h5 className="mb-0 font-weight-bold">
                      <b className="calorgray">WELCOME</b><br></br><br></br><h2 className="NameControl"> {user && user.name} {user && user.surname}</h2>
                      
                      <h5>{user.email}</h5>
                    </h5>
                  </div>

                  <div className="col-md-6 d-grid gap-2 justify-content-md-end">
                    <button
                      className="btn btn-light btn-md"
                      onClick={handleEdit}
                    >
                      EDIT YOUR ACCOUNT
                    </button>
                    {edit ? <EditUser user={user} /> : <p></p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row colorcontrol">
            <div className="col-md-12">
              <div className="wishlist-header border p-2">
                <div className="row">
                  <div className="col-md-12 d-grid gap-2 d-md-block">
                    <button
                      className="btn btn-light btn-md"
                      onClick={handleWishlist}
                    >
                      CLICK TO SEE YOUR WISHLIST
                    </button>
                    {wishlist ? <RenderWishlist /> : <p></p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="wishlist-header border p-2">
                <div className="row">
                  <div className="col-md-12 d-grid gap-2 d-md-block">
                    {administrator ? (
                      <button
                        className="btn btn-light btn-md"
                        onClick={handleContact}
                      >
                      USER REQUESTS VIA CONTACT US
                      </button>
                    ) : (
                      <p></p>
                    )}
                    {administrator && contact ? (
                      <ContactFormResult contactId={contactId} />
                    ) : (
                      <p></p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="wishlist-header border p-2">
                <div className="row">
                  <div className="col-md-12 d-grid gap-2 d-md-block">
                    {administrator ? (
                      <button className="btn btn-light btn-md"  onClick={handleAdd}>ADD PRODUCTS</button>
                    ) : (
                      <p></p>
                    )}
                    {administrator && add ? <AddProduct /> : <p></p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default WishlistUserPage;
