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
    <div>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="wishlist-header border p-2">
                <div className="row">
                  <div className="col-md-6">
                    <h2 className="mb-0 font-weight-bold">YOUR PROFILE</h2>
                  </div>

                  <div className="col-md-3">
                    <h6 className="mb-0 font-weight-bold">
                      <b>Welcome:</b> {user && user.name} {user && user.surname}
                    </h6>
                  </div>

                  <div className="col-md-3">
                    <button
                      className="btn btn-dark btn-sm wishlist-remove-btn"
                      onClick={handleEdit}
                    >
                      Edit
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
          <div className="row">
            <div className="col-md-12">
              <div className="wishlist-header border p-2">
                <div className="row">
                  <div className="col-md-12">
                    <button
                      className="btn btn-dark btn-sm wishlist-remove-btn"
                      onClick={handleWishlist}
                    >
                      wishlist
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
              <div className="wishlist-header border-light p-2">
                <div className="row">
                  <div className="col-md-12">
                    {administrator ? (
                      <button
                        className="btn btn-dark btn-sm wishlist-remove-btn"
                        onClick={handleContact}
                      >
                        Contact
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
              <div className="wishlist-header border-light p-2">
                <div className="row">
                  <div className="col-md-12">
                    {administrator ? (
                      <button className="btn btn-dark btn-sm wishlist-remove-btn"  onClick={handleAdd}>Add Product</button>
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
