import "./App.css";
import { useEffect } from "react";
import Header from './component/layout/Header/Header.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebFont from 'webfontloader';
import React from "react";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js"
import ProductDetails from "./component/Product/ProductDetails.js"
import Products from "./component/Product/Products.js"
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js"
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import Payment from "./component/Cart/Payment.js";
import MyOrders from "./component/Orders/MyOrders.js";
import OrderDetails from "./component/Orders/OrderDetails.js";
import Dashboard from "./component/admin/Dashbord.js";
import ProductList from "./component/admin/ProductList.js";
import NewProduct from "./component/admin/NewProduct.js";
import UpdateProduct from "./component/admin/UpdateProduct.js";
// import PlaceOrder from "./component/Cart/PlaceOrder.js";
// import axios from "axios";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";


// import ProtectedRoute from "./component/Route/ProtetctedRoute";
// import React, { Fragment } from "react";
// import { useSelector } from "react-redux";
// import { Navigate} from "react-router-dom";

function App() {

  const { isAuthenticated, user} = useSelector(state=>state.user);

  // const [stripeApiKey, setStripeApiKey] = useState("");

  // async function getStripeApiKey() {
  //   const { data } = await axios.get("/api/v1/stripeapikey");

  //   setStripeApiKey(data.stripeApiKey);
  // }

  useEffect(() => {
    WebFont.load({
      google:{
        families:["Roboto", "Droid Sans", "Chilanka"]
      },
    });

    store.dispatch(loadUser());

    // getStripeApiKey();
  }, [])

  return (
    <BrowserRouter>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />

        <Route path="/login" element={<LoginSignUp />} />

        <Route path="/account" element={<Profile />} />

        <Route path="/me/update" element={<UpdateProfile />}/>
        
        <Route path="/password/update" element={<UpdatePassword />}/>

        <Route path="/cart" element={<Cart />}/>

        <Route path="/shipping" element={<Shipping/>}/>

        <Route path="/order/confirm" element={<ConfirmOrder/>}/>

        <Route path="/process/payment" element={<Payment/>}/>

        <Route path="/orders" element={<MyOrders/>}/>

        <Route path="/order/:id" element={<OrderDetails/>}/>

        <Route path="/admin/dashbord" element={<Dashboard/>}/>

        <Route path="/admin/products" element={<ProductList/>}/>

        <Route path="/admin/product" element={<NewProduct/>}/>

        <Route path="/admin/product/:id" element={<UpdateProduct/>}/>


      </Routes>
      <Footer />
     </BrowserRouter>
  );

}

export default App;
