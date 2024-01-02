import React from "react";
import App from "./App";
import Experience from "./Experience";

export default function ExperienceCVComponent({ experienceForm }) {
    return (
        <>
            <div className="experience-details-cv-component-container">
                {experienceForm.map(item => {
                    return 
                    <>
                        <h3 key={item.keyCV}>{item.inputTitle}</h3>
                        <div className="company-location-container-personal-details">
                            <p>{item.inputCompany}</p>
                            <p>{item.inputDescription}</p>
                            <p>{item.inputStartDate}</p>
                            <p>{item.inputEndDate}</p>
                        </div>
                    </>
                })}
            </div>
        </>
    )
};