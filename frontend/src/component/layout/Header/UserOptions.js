import React, { Fragment, useState} from "react";
import SpeedDial from '@mui/material/SpeedDial';
import Backdrop from "@material-ui/core/Backdrop";
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { BiSolidDashboard, BiLogOut} from "react-icons/bi";
import { CgList, CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/userAction";
import { useDispatch, useSelector} from "react-redux";
import { MdShoppingCart } from "react-icons/md";

import "./Header.css";
// import zIndex from "@material-ui/core/styles/zIndex";

const UserOptions = ( {user} ) => {
    const { cartItems } = useSelector((state) => state.cart);

    const navigate= useNavigate();
    const alert = useAlert();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const options = [
        {icon: <CgList />, name: "Orders", func: orders },
        {icon: <CgProfile />, name: "Profile", func: account },
        {icon: <MdShoppingCart style={{color: cartItems.length>0 ? "tomato" : "unset"}}/>, name: `Cart(${cartItems.length})`, func: cart },
        {icon: <BiLogOut />, name: "Logout", func: logoutUser },
    ];

    if (user.role === "admin"){
        options.unshift({
            icon: <BiSolidDashboard/>,
            name: "Dashbord",
            func: dashboard,
        });
    }

    function dashboard() {
        navigate("/admin/dashbord");
    }

    function orders() {
        navigate("/orders");
    }

    function account() {
        navigate("/account");
    }

    function cart() {
        navigate("/cart");
    }

    function logoutUser() {
        dispatch(logout());
        alert.success("Logout Successfully");
        navigate("/");
    }

    return (
    <Fragment>
        <Backdrop open={open} style={{zIndex: "10"}} />
      <SpeedDial
        ariaLabel="SpeedDial tooltiip example"
        onClose={()=> setOpen(false)}
        onOpen={()=> setOpen(true)}
        open={open}
        direction="down"
        className="speedDial"
        icon={
            <img 
                className="speedDialIcon"
                src={user.avatar.url ? user.avatar.url : "/Profiles.png" }
                alt="Profile"
            />
        }
      >
        {options.map((item) => (
            <SpeedDialAction    
                key={item.name}
                icon={item.icon}
                tooltipTitle={item.name}
                onClick={item.func}
                tooltipOpen={window.innerWidth<=600?true:false}
            />
        ))}

      </SpeedDial>
    </Fragment>
    )
};

export default UserOptions;