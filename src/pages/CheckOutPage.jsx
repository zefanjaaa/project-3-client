import React, { useState } from "react";
import { CartContex } from "../context/cartContex";
import { useContext } from "react";
import "../style/CheckoutPage.css";

function CheckOutPage() {
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const { items, getTotalCost, getTotalItems, deleteWholeCart, deleteCart } =
    useContext(CartContex);

  const totalCost = getTotalCost();

  const totalItems = getTotalItems();

  return (
    <div className="maincontainer">
      <div className="container">
        <div className="py-5 text-center">
          <h2 className="checkouth2">YOUR DETAILS</h2>
          <p className="lead"></p>
        </div>
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">YOUR CART</span>
              <span className="badge badge-secondary badge-pill">3</span>
            </h4>

            {items?.map((product) => (
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">{product.nameOfProduct}</h6>
                    <small className="text-muted">{product.brand}</small>
                  </div>
                  <span className="text-muted">${product.price}</span>
                </li>

                
              </ul>
            ))}
            <ul className="list-group mb-3">
              
              <li className="list-group-item d-flex justify-content-between bg-light">
                  <div className="text-success">
                    <h6 className="my-0 promocodeControl">Promo code</h6>
                    <small className="promocodeControl">EXAMPLECODE</small>
                  </div>
                  <span className="text promocodeControl">-$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                <span>Total: {totalCost} (USD)</span>
                {/* <strong>$20</strong> */}
              </li>
            </ul>
            
            <form className="card p-2 border-light">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-light"
                  placeholder="Promo code"
                />
                
                <div className="input-group-append">
                  <button type="button" className="btn btn-light border-light ">
                    APPLY
                  </button>
                </div>
              </div>
              <br></br>
              <button
          class="btn btn-outline-dark btn-sm w-50 test "
          onClick={deleteWholeCart}
        >
         REMOVE ALL
        </button>
            </form>
          </div>
          
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">BILLING ADDRESS</h4>
            <form className="needs-validation" novalidate>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label for="firstName" className="textControlInForm">
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    value=""
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label for="lastName" className="textControlInForm">
                    LAST NAME
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    value=""
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label for="email" className="textControlInForm">
                  EMAIL <span className="text-muted"></span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>
              <div className="mb-3">
                <label for="address" className="textControlInForm">
                  ADDRESS
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>
              <div className="mb-3">
                <label for="address2" className="textControlInForm">
                  ADDRESS 2 <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                />
              </div>
              <div className="row">
                <div className="col-md-5 mb-3">
                  <label for="country" className="textControlInForm">
                    COUNTRY
                  </label>
                  <select
                    className="custom-select d-block w-100"
                    id="country"
                    required
                  >
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label for="state" className="textControlInForm">
                    PROVINCE / STATE
                  </label>
                  <select
                    className="custom-select d-block w-100"
                    id="state"
                    required
                  >
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label for="zip" className="textControlInForm">
                    ZIP / POSTAL CODE
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Post code required.</div>
                </div>
              </div>
              <hr className="mb-4" />
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="same-address"
                />
                <label
                  className="custom-control-label textControlInForm"
                  for="same-address"
                >
                  SHIPPING ADDRESS IS THE SAME AS MY BILLING ADDRESS
                </label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="save-info"
                />
                <label
                  className="custom-control-label textControlInForm"
                  for="save-info"
                >
                  SAVE THIS INFORMATION FOR NEXT TIME
                </label>
              </div>
              <hr className="mb-4" />
              <h4 className="mb-3">PAYMENT</h4>
              <div className="d-block my-3">
                <div className="custom-control custom-radio">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    checked
                    required
                  />
                  <label
                    class="custom-control-label textControlInForm"
                    for="credit"
                  >
                    CREDIT CARD
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                  />
                  <label
                    className="custom-control-label textControlInForm"
                    for="debit"
                  >
                    DEBIT CARD
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                  />
                  <label
                    className="custom-control-label textControlInForm"
                    for="paypal"
                  >
                    Paypal
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label for="cc-name" className="textControlInForm">
                    NAME ON CARD
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder=""
                    required
                  />
                  <small class="text-muted">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label for="cc-number" className="textControlInForm">
                    CARD NUMBER
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label for="cc-expiration" className="textControlInForm">
                    EXPIRATION
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label for="cc-expiration" className="textControlInForm">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>
              <hr className="mb-4" />
              <button className="btn btn-outline-dark btn-md btn-block" type="button">
                Continue to payment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage;
