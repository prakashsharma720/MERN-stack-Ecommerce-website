import React, { Fragment } from "react";
import { Typography, Stepper, StepLabel, Step} from "@material-ui/core";
import { BiSolidTruck ,BiSolidBadgeCheck} from "react-icons/bi";
import { RiGovernmentFill} from "react-icons/ri";
import "./CheckoutSteps.css";

const CheckoutSteps = ({ activeStep }) => {

    const steps = [
        {
            label: <Typography>Shipping Details</Typography>,
            icon: <BiSolidTruck />,
        },
        {
            label: <Typography>Confirm Order</Typography>,
            icon: <BiSolidBadgeCheck />,
        },
        {
            label: <Typography>Place Order</Typography>,
            icon: <RiGovernmentFill />,
        }
    ];

    const stepStyles = {
        boxSizing: "border-box",
        fontSize: "2vmax",
    };

    return(
        <Fragment>
            <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
            {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
              style={{
                color: activeStep >= index ? "tomato" : "rgba(0, 0, 0, 0.649)",
              }}
              icon={item.icon}
            >
              {item.label}
            </StepLabel>
          </Step>
        ))}
            </Stepper>
        </Fragment>
        );
};

export default CheckoutSteps;