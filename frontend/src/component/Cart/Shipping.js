import React, { Fragment, useState } from "react";
import "./Shipping.css"
import { useSelector, useDispatch } from "react-redux";
import { saveShippingInfo } from "../../actions/cartAction";
import MetaData from "../layout/MetaData";
import { useAlert } from "react-alert";
import CheckoutSteps from "../Cart/CheckoutSteps.js";
import { useNavigate } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";
import { BiSolidCity, BiWorld } from "react-icons/bi";
import { MdPinDrop ,MdCall} from "react-icons/md";
import { TbBuildingEstate } from "react-icons/tb";





const Shipping = () =>{

    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const alert = useAlert();
    const { shippingInfo } = useSelector((state) => state.cart);

    const [address, setAddress] = useState(shippingInfo.address);
    const [city, setCity] = useState(shippingInfo.city);
    const [state, setState] = useState(shippingInfo.state);
    const [country, setCountry] = useState(shippingInfo.country);
    const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

    const shippingSubmit= (e) => {
        e.preventDefault();

        if(phoneNo.length < 10 || phoneNo.length > 10 ){
            alert.error("Phone Number should be 10 degite long");
            return;
        }
        dispatch(
            saveShippingInfo({ address, city, state, country, pinCode, phoneNo})
        );
        Navigate("/order/confirm");

    };
    return (
        <Fragment>
            <MetaData title="Shipping Details"></MetaData>
            <CheckoutSteps activeStep={0} />
            <div className="shippingContainer">
                <div className="shippingBox">
                    <h2 className="shippingHeading">Shipping Details</h2>

                    <form
                        className="shippingForm"
                        enctype="multipart/form-data"
                        onSubmit={shippingSubmit}
                    >
                        <div>
                            <AiFillHome/>
                            <input
                                type="text"
                                placeholder="Address"
                                required
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>

                        <div>
                            <BiSolidCity/>
                            <input
                                type="text"
                                placeholder="City"
                                required
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>

                        <div>
                            <MdPinDrop/>
                            <input
                                type="number"
                                placeholder="Pin Code"
                                required
                                value={pinCode}
                                onChange={(e) => setPinCode(e.target.value)}
                            />
                        </div>

                        <div>
                            <MdCall/>
                            <input
                                type="number"
                                placeholder="Phone Number"
                                required
                                value={phoneNo}
                                onChange={(e) => setPhoneNo(e.target.value)}
                                size="10"
                            />
                        </div>

                        <div>
                            <BiWorld/>
                            <input
                                type="text"
                                placeholder="Country"
                                required
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </div>

                        <div>
                            <TbBuildingEstate/>
                            <input
                                type="text"
                                placeholder="State"
                                required
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            />
                        </div>
                        
                        <input
                            type="submit"
                            value="Continue"
                            className="shippingBtn"
                            disabled={state ? false : true}
                        />
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default Shipping