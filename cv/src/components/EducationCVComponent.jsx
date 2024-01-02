import React from "react";
import App from "./App";
import Education from "./Education";

export default function EducationCVComponent({ educationForm }) {
    return (
        <>
            <div className="education-details-cv-component-container">
                {educationForm.map(item => {
                    return 
                    <>
                        <h3 key={item.keyCV}>{item.schoolNameInput}</h3>
                        <div className="degree-address-container-personal-details">
                            <p>{item.degreeInput}</p>
                            <p>{item.startDateInput}</p>
                            <p>{item.endDateInput}</p>
                            <p>{item.locationInput}</p>
                        </div>
                    </>
                })}
            </div>
        </>
    )
};