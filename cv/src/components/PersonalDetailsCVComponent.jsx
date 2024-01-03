import React from "react";
import App from "./App";
import PersonalDetails from "./PersonalDetails";

export default function PersonalDetailsCVComponent({ personalDetailsForm }) {
    return (
        <>
            <div className="personal-details-cv-component-container">
                {personalDetailsForm.map(item => {
                    return 
                    <>
                        <h3 key={item.keyCV}>{item.inputName}</h3>
                        <div className="email-address-container-personal-details">
                            <p>{item.inputEmail}</p>
                            <p>{item.inputAddress}</p>
                            <p>{item.inputPhone}</p>
                        </div> 
                    </>
                })}
            </div>
        </>
    )
}