// import React, { useState } from "react";
// import Header from "../Header/header";
// import Footer from "../Footer/footer";
// import { useCart } from "react-use-cart";

// function Checkout() {
//   const { isEmpty, cartTotal, items, updateItemQuantity, removeItem } =
//     useCart();
//   const [couponCode, setCouponCode] = useState("");
//   const [discount, setDiscount] = useState(0);
//   const [isCouponApplied, setIsCouponApplied] = useState(false);
//   const [isOrderPlaced, setIsOrderPlaced] = useState(false);

//   const applyCoupon = () => {
//     if (couponCode === "wdpf54") {
//       const couponDiscount = cartTotal * 0.1; // 10% discount
//       setDiscount(couponDiscount);
//       setIsCouponApplied(true);
//     } else {
//       setDiscount(0); // Reset discount if the coupon code is invalid
//       setIsCouponApplied(false);
//     }
//   };

//   const discountedTotal = cartTotal - discount;

//   const updateQuantity = (itemId, newQuantity) => {
//     updateItemQuantity(itemId, newQuantity);
//   };

//   const removeCartItem = (itemId) => {
//     removeItem(itemId);
//   };

//   const checkoutButtonStyle = {
//     backgroundColor: "#1175A8",
//     color: "white",
//     border: "none",
//     padding: "10px 20px",
//     cursor: "pointer",
//     marginTop: "5px",
//   };

//   return (
//     <div>
//       <Header />
//       <div className="hero">
//         <div className="container">
//           <div className="row justify-content-between">
//             <div className="col-lg-5">
//               <div className="intro-excerpt text-warning">
//                 <h1>Checkout</h1>
//               </div>
//             </div>
//             <div className="col-lg-7"></div>
//           </div>
//         </div>
//       </div>

//       <div className="untree_co-section">
//         <div className="container">
//           <div className="row mb-5">
//             <div className="col-md-12">
//               <div className="border p-4 rounded" role="alert">
//                 Returning customer? <a href="./signin">Click here</a> to login
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-5 mb-md-0">
//               <h2 className="h3 mb-3 text-warning">Billing Details</h2>
//               <div className="p-3 p-lg-5 border bg-white">
//                 <div className="form-group">
//                   <label for="c_country" className="text-black">
//                     Shipping City <span className="text-danger">*</span>
//                   </label>
//                   <select id="c_country" className="form-control">
//                     <option value="1">Select a City</option>
//                     <option value="2">Chattogram</option>
//                     <option value="3">Dhaka</option>
//                     <option value="4">Comilla</option>
//                     <option value="5">Rajshahi</option>
//                     <option value="6">Rangpur</option>
//                     <option value="7">Other</option>
//                   </select>
//                 </div>
//                 <div className="form-group row">
//                   <div className="col-md-6">
//                     <label for="c_fname" className="text-black">
//                       First Name <span className="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="c_fname"
//                       name="c_fname"
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <label for="c_lname" className="text-black">
//                       Last Name <span className="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="c_lname"
//                       name="c_lname"
//                     />
//                   </div>
//                 </div>

//                 <div className="form-group row">
//                   <div className="col-md-12">
//                     <label for="c_address" className="text-black">
//                       Address <span className="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="c_address"
//                       name="c_address"
//                       placeholder="Street address"
//                     />
//                   </div>
//                 </div>

//                 <div className="form-group row mb-5">
//                   <div className="col-md-6">
//                     <label for="c_email_address" className="text-black">
//                       Email Address <span className="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="c_email_address"
//                       name="c_email_address"
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <label for="c_phone" className="text-black">
//                       Phone <span className="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="c_phone"
//                       name="c_phone"
//                       placeholder="Phone Number"
//                     />
//                   </div>
//                 </div>

                 

//                 <div className="form-group">
//                   <label for="c_order_notes" className="text-black">
//                     Order Notes
//                   </label>
//                   <textarea
//                     name="c_order_notes"
//                     id="c_order_notes"
//                     cols="30"
//                     rows="5"
//                     className="form-control"
//                     placeholder="Write your notes here..."
//                   ></textarea>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="row mb-5"></div>

//               <div className="row mb-5">
//                 <div className="col-md-12">
//                   <h2 className="h3 mb-3 text-warning">Your Order</h2>
//                   <div className="p-3 p-lg-5 border bg-white">
//                     <table className="table site-block-order-table mb-5">
//                       <thead>
//                         <th>Product</th>
//                         <th>Total</th>
//                       </thead>

//                       <tbody>
//                         {items.map((item) => (
//                           <tr>
//                             <td>
//                               {item.nname} <strong className="mx-2">x</strong>{" "}
//                               {item.quantity}
//                             </td>
//                             <td>{"$" + item.itemTotal.toFixed(2)}</td>
//                           </tr>
//                         ))}
//                         {/* <tr>
//                             <td>
//                               Polo Shirt <strong className="mx-2">x</strong> 1
//                             </td>
//                             <td>{"$" + item.price}</td>
//                           </tr> */}

//                         <tr>
//                           <td className="text-black font-weight-bold">
//                             <strong>Cart Subtotal</strong>
//                           </td>
//                           <td className="text-black">
//                             {" "}
//                             {"$" + cartTotal.toFixed(2)}
//                           </td>
//                         </tr>

//                         <tr>
//                           <td className="text-black font-weight-bold">
//                             <strong>Order Total</strong>
//                           </td>
//                           <td className="text-black font-weight-bold">
//                             <strong> {"$" + cartTotal.toFixed(2)}</strong>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>

//                     <div className="form-group">
//                       <button
//                         style={checkoutButtonStyle}
//                         onClick={() => {
//                           if (!isEmpty) {
//                             // Update the state to indicate that the order is placed
//                             setIsOrderPlaced(true);
//                           }
//                         }}
//                       >
//                         Place Order
//                       </button>
//                       <button
//                         style={checkoutButtonStyle}
//                         onClick={() => (window.location.href = "./cart")}
//                       >
//                         Bcak to cart
//                       </button>
//                     </div>

//                     {isOrderPlaced && (
//                       <div>Your order has been placed successfully!</div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* </form> */}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default Checkout;






import React, { useState } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { useCart } from "react-use-cart";

function Checkout() {
  const { isEmpty, cartTotal, items, updateItemQuantity, removeItem } =
    useCart();
  const [couponCode ] = useState("");
  const [  setDiscount] = useState(0);
  const [ setIsCouponApplied] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const applyCoupon = () => {
    if (couponCode === "wdpf54") {
      const couponDiscount = cartTotal * 0.1; // 10% discount
      setDiscount(couponDiscount);
      setIsCouponApplied(true);
    } else {
      setDiscount(0); // Reset discount if the coupon code is invalid
      setIsCouponApplied(false);
    }
  };

  

  const updateQuantity = (itemId, newQuantity) => {
    updateItemQuantity(itemId, newQuantity);
  };

  const removeCartItem = (itemId) => {
    removeItem(itemId);
  };

  const checkoutButtonStyle = {
    backgroundColor: "#1175A8",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    marginTop: "5px",
  };

  return (
    <div>
      <Header />
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt text-warning">
                <h1>Checkout</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>

      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="border p-4 rounded" role="alert">
                Returning customer? <a href="./signin">Click here</a> to login
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <h2 className="h3 mb-3 text-warning">Billing Details</h2>
              <div className="p-3 p-lg-5 border bg-white">
                <div className="form-group">
                  <label for="c_country" className="text-black">
                    Shipping City <span className="text-danger">*</span>
                  </label>
                  <select id="c_country" className="form-control">
                    <option value="1">Select a City</option>
                    <option value="2">Chattogram</option>
                    <option value="3">Dhaka</option>
                    <option value="4">Comilla</option>
                    <option value="5">Rajshahi</option>
                    <option value="6">Rangpur</option>
                    <option value="7">Other</option>
                  </select>
                </div>
                <div className="form-group row">
                  
                  <div className="col-md-12">
                    <label for="c_lname" className="text-black">
                    Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_lname"
                      name="c_lname"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <label for="c_address" className="text-black">
                      Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_address"
                      name="c_address"
                      placeholder="Street address"
                    />
                  </div>
                </div>

                <div className="form-group row mb-5">
                  <div className="col-md-6">
                    <label for="c_email_address" className="text-black">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_email_address"
                      name="c_email_address"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="c_phone" className="text-black">
                      Phone <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_phone"
                      name="c_phone"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                 

                <div className="form-group">
                  <label for="c_order_notes" className="text-black">
                    Order Notes
                  </label>
                  <textarea
                    name="c_order_notes"
                    id="c_order_notes"
                    cols="30"
                    rows="5"
                    className="form-control"
                    placeholder="Write your notes here..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row mb-5"></div>

              <div className="row mb-5">
                <div className="col-md-12">
                  <h2 className="h3 mb-3 text-warning">Your Order</h2>
                  <div className="p-3 p-lg-5 border bg-white">
                    <table className="table site-block-order-table mb-5">
                      <thead>
                        <th>Product</th>
                        <th>Total</th>
                      </thead>

                      <tbody>
                        {items.map((item) => (
                          <tr>
                            <td>
                              {item.nname} <strong className="mx-2">x</strong>{" "}
                              {item.quantity}
                            </td>
                            <td>{"$" + item.itemTotal.toFixed(2)}</td>
                          </tr>
                        ))}
                        {/* <tr>
                            <td>
                              Polo Shirt <strong className="mx-2">x</strong> 1
                            </td>
                            <td>{"$" + item.price}</td>
                          </tr> */}

                        <tr>
                          <td className="text-black font-weight-bold">
                            <strong>Cart Subtotal</strong>
                          </td>
                          <td className="text-black">
                            {" "}
                            {"$" + cartTotal.toFixed(2)}
                          </td>
                        </tr>

                        <tr>
                          <td className="text-black font-weight-bold">
                            <strong>Order Total</strong>
                          </td>
                          <td className="text-black font-weight-bold">
                            <strong> {"$" + cartTotal.toFixed(2)}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="form-group">
                      <button
                        style={checkoutButtonStyle}
                        onClick={() => {
                          if (!isEmpty) {
                            // Update the state to indicate that the order is placed
                            setIsOrderPlaced(true);
                          }
                        }}
                      >
                        Place Order
                      </button>
                      <button
                        style={checkoutButtonStyle}
                        onClick={() => (window.location.href = "./cart")}
                      >
                        Bcak to cart
                      </button>
                    </div>

                    {isOrderPlaced && (
                      <div>Your order has been placed successfully!</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </form> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Checkout;
