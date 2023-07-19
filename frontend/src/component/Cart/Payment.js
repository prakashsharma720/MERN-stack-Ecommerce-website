// import React, { Fragment, useEffect, useState, useRef } from "react";
import React, { Fragment } from "react";

import CheckoutSteps from "../Cart/CheckoutSteps";
// import { useSelector, useDispatch } from "react-redux";
import Metadata from "../layout/MetaData";
// import { Typography } from "@material-ui/core";
// import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
// import { createOrder } from "../../actions/orderAction";

// import axios from "axios";
import "./payment.css";
// import { AiOutlineCreditCard, AiOutlineCalendar } from "react-icons/ai";
// import { RiKeyFill } from "react-icons/ri";


const Payment = () => {

  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  
  const Navigate = useNavigate();
  // const dispatch = useDispatch();
  // // const alert = useAlert();
  // const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  // const { user } = useSelector((state) => state.user);

  // const { Orders } = useSelector((state) => state.newOrder);

  // const [cardNo,setCardNo] = useState();
  // const [date, setDate] = useState();
  //  const [cvv, setCvv] = useState();
   
  // const order = {
  //   name: user.name,
  //   email: user.email,
  //   shippingInfo,
  //   orderItems: cartItems,
  //   itemsPrice: orderInfo.subtotal,
  //   taxPrice: orderInfo.tax,
  //   shippingPrice: orderInfo.shippingCharges,
  //   totalPrice: orderInfo.totalPrice,
  // };

  const submitHandler= (e) => {
      e.preventDefault();

    //   if(cardNo.length < 16 || cardNo.length > 16 ){
    //     alert.error("Card number should be 16 degite");
    //     return;
    // }
    // if(cvv.length < 3 || cvv.length > 3){
    //   alert.error("Enter a valid Cvv");
    //   return;
    // }
      // dispatch(
      //     createOrder(JSON.stringify(order))
      // );
      Navigate("/orders");
      };
  
  //      const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  //        const payBtn = useRef(null);
  //       const alert = useAlert();
  //       const dispatch = useDispatch();
  //       const Navigate = useNavigate();

  //        const [cardNo,setCardNo] = useState();
  //       const [date, setDate] = useState();
  //       const [cvv, setCvv] = useState();

  //         const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  //         const { user } = useSelector((state) => state.user);
  //         const { error } = useSelector((state) => state.newOrder);

  //           const order = {
  //   shippingInfo,
  //   orderItems: cartItems,
  //   itemsPrice: orderInfo.subtotal,
  //   taxPrice: orderInfo.tax,
  //   shippingPrice: orderInfo.shippingCharges,
  //   totalPrice: orderInfo.totalPrice,
  // };

  //         const submitHandler = async (e) => {
  //           e.preventDefault();

  //           if(cardNo.length < 16 || cardNo.length > 16 ){
  //             alert.error("Card number should be 16 degite");
  //             return;
  //         }
  //         if(cvv.length < 3 || cvv.length > 3){
  //           alert.error("Enter a valid Cvv");
  //           return;
  //         }
        
  //           payBtn.current.disabled = true;
        
  //           try {
  //               const result =  {
  //               payment_method: {
  //                 billing_details: {
  //                   name: user.name,
  //                   email: user.email,
  //                   address: {
  //                     line1: shippingInfo.address,
  //                     city: shippingInfo.city,
  //                     state: shippingInfo.state,
  //                     postal_code: shippingInfo.pinCode,
  //                     country: shippingInfo.country,
                    
  //                 },
  //               },
  //               }
  //             };
        
  //             // if (result.error) {
  //             //   payBtn.current.disabled = false;
        
  //             //   alert.error(result.error.message);
  //             // } else {
  //               // if (result.status === "succeeded") {
  //                 order.paymentInfo = {
  //                   id: result.paymentIntent.id,
  //                   status: result.paymentIntent.status,
  //                 };
        
  //                 dispatch(createOrder(order));
        
  //                 Navigate("/success");
  //               // } else {
  //                 alert.error("There's some issue while processing payment ");
  //               // }
              
  //           } catch (error) {
  //             payBtn.current.disabled = false;
  //             alert.error(error);
  //           }
  //         };

  //           useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch(clearErrors());
  //   }
  // }, [dispatch, error, alert ]);


      return( 
        <Fragment>
     <Metadata title="Payment" />
     <CheckoutSteps activeStep={2} />
     <div className="paymentContainer">

         <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
           {/* <Typography>Card Info</Typography>

           <div>
             <AiOutlineCreditCard />
             <input type="number" 
               placeholder="1234123412341234"
               value={cardNo} 
               onChange={(e) => setCardNo(e.target.value)}
              />
           </div>
           <div>
             <AiOutlineCalendar />
             <input
              type="month"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              />
           </div>
           <div>
             <RiKeyFill />
             <input
              type="number"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              />
           </div> */}
           <input
             type="submit"
             value={`Place your Order - ₹${orderInfo && orderInfo.totalPrice}`}
            //  ref={payBtn}
             className="paymentFormBtn"
            //  onClick={orderSubmit()}
           />
         </form>
       </div>
     </Fragment>
    );
};

export default Payment;





// import React, { Fragment, useEffect, useState, useRef } from "react";
// import CheckoutSteps from "../Cart/CheckoutSteps";
// import { useSelector, useDispatch } from "react-redux";
// import Metadata from "../layout/Metadata";
// import { Typography } from "@material-ui/core";
// import { useAlert } from "react-alert";
// import { useNavigate } from "react-router-dom";
// import {
//   CardNumberElement,
//   CardCvcElement,
//   CardExpiryElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";

// import axios from "axios";
// import "./payment.css";
// import { AiOutlineCreditCard, AiOutlineCalendar } from "react-icons/ai";
// import { RiKeyFill } from "react-icons/ri";

// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";


// // import CreditCardIcon from "@material-ui/icons/CreditCard";
// // import EventIcon from "@material-ui/icons/Event";
// // import VpnKeyIcon from "@material-ui/icons/VpnKey";
// import { createOrder, clearErrors } from "../../actions/orderAction";

// const Payment = () => {
//   const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

//   const Navigate = useNavigate();
//   const dispatch = useDispatch();
//   const alert = useAlert();
//   const stripe = useStripe();
//   const elements = useElements();
//   const payBtn = useRef(null);

//   const { shippingInfo, cartItems } = useSelector((state) => state.cart);
//   const { user } = useSelector((state) => state.user);
//   const { error } = useSelector((state) => state.newOrder);

//   const paymentData = {
//     amount: Math.round(orderInfo.totalPrice * 100),
//   };

//   const order = {
//     shippingInfo,
//     orderItems: cartItems,
//     itemsPrice: orderInfo.subtotal,
//     taxPrice: orderInfo.tax,
//     shippingPrice: orderInfo.shippingCharges,
//     totalPrice: orderInfo.totalPrice,
//   };

  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   payBtn.current.disabled = true;

  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     const { data } = await axios.post(
  //       "/api/v1/payment/process",
  //       paymentData,
  //       config
  //     );

  //     const client_secret = data.client_secret;

  //     if (!stripe || !elements) return;

  //     const result = await stripe.confirmCardPayment(client_secret, {
  //       payment_method: {
  //         card: elements.getElement(CardNumberElement),
  //         billing_details: {
  //           name: user.name,
  //           email: user.email,
  //           address: {
  //             line1: shippingInfo.address,
  //             city: shippingInfo.city,
  //             state: shippingInfo.state,
  //             postal_code: shippingInfo.pinCode,
  //             country: shippingInfo.country,
  //           },
  //         },
  //       },
  //     });

  //     if (result.error) {
  //       payBtn.current.disabled = false;

  //       alert.error(result.error.message);
  //     } else {
  //       if (result.paymentIntent.status === "succeeded") {
  //         order.paymentInfo = {
  //           id: result.paymentIntent.id,
  //           status: result.paymentIntent.status,
  //         };

  //         dispatch(createOrder(order));

  //         Navigate("/success");
  //       } else {
  //         alert.error("There's some issue while processing payment ");
  //       }
  //     }
  //   } catch (error) {
  //     payBtn.current.disabled = false;
  //     alert.error(error.response.data.message);
  //   }
  // };


//   const [stripeApiKey, setStripeApiKey] = useState("");

//   async function getStripeApiKey() {
//     const { data } = await axios.get("/api/v1/stripeapikey");

//     setStripeApiKey(data.stripeApiKey);
//   }


//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }
//     getStripeApiKey();
//   }, [dispatch, error, alert ]);

//   return (
//     <Fragment>
//       <Metadata title="Payment" />
//       <CheckoutSteps activeStep={2} />
//       <div className="paymentContainer">

//       <Elements stripe = {loadStripe(stripeApiKey)}>

//         <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
//           <Typography>Card Info</Typography>
//           <div>
//             <AiOutlineCreditCard />
//             <CardNumberElement className="paymentInput" />
//           </div>
//           <div>
//             <AiOutlineCalendar />
//             <CardExpiryElement className="paymentInput" />
//           </div>
//           <div>
//             <RiKeyFill />
//             <CardCvcElement className="paymentInput" />
//           </div>

//           <input
//             type="submit"
//             value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
//             ref={payBtn}
//             className="paymentFormBtn"
//           />
//         </form>

//         </Elements>

//       </div>
//     </Fragment>
//   );
// };

// export default Payment;