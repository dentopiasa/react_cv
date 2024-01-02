import { useState } from "react";
import React from "react";
import EducationCvComponent from "./EducationCVComponent";
import App from "./App";

export default function Education({
    handleSubmit, 
    educationForm, 
    setEducationForm,
}) {
    const [schoolNameInput , setSchoolNameInput] = useState("");
    const [degreeInput , setDegreeInput] = useState("");
    const [startDateInput , setStartDateInput] = useState("");
    const [endDateInput , setEndDateInput] = useState("");
    const [locationInput , setLocationInput] = useState("");
    const [showedEducation , setShowedEducation] = useState(false);
}

function clearEducationInputs() {
    setSchoolNameInput("");
    setDegreeInput("");
    setStartDateInput("");
    setEndDateInput("");
    setLocationInput("");
    setShowedEducation("");
}

function handleDelete(e) {
    let clickedOnEntry = e.target.name;
    setEducationForm(Education.filter(item => item.keyForm != clickedOnEntry))
}

function handleEdit(item) {
    setSchoolNameInput(item.schoolNameInput);
    setDegreeInput(item.degreeInput);
    setStartDateInput(item.startDateInput);
    setEndDateInput(item.endDateInput);
    setLocationInput(item.locationInput);
    setShowedEducation("showedEducation")
}

return (
    <>
    <div className="education-details-container">
        <h3>Education:</h3>
        <div className="dropdown-icon-education-details">
            <img src={dropdownImg} onClick={() => setShowedEducation(!showedEducation)}></img>
        </div>

    <form className="hide-show-content-education-details" style={showedEducation ? {display: 'none'} : {display: 'flex'}}>
        <label>School:</label>
        <input 
        type="text"
        value={schoolNameInput}
        onChange={e => setSchoolNameInput(e.target.value)}/>

        <label>Degree:</label>
        <input 
        type="text"
        value={degreeInput}
        onChange={e => setDegreeInput(e.target.value)}/>

        <label>Start Date:</label>
        <input 
        type="text"
        value={startDateInput}
        onChange={e => setStartDateInput(e.target.value)}/>

        <label>End Date:</label>
        <input 
        type="text"
        value={endDateInput}
        onChange={e => setEndDateInput(e.target.value)}/>

        <label>Location:</label>
        <input 
        type="text"
        value={locationInput}
        onChange={e => setLocationInput(e.target.value)}/>


        <div className="education-details-btn-container">
            <button onClick={e => {
                handleSubmit (
                    e,
                    schoolNameInput,
                    degreeInput, 
                    startDateInput, 
                    endDateInput,
                    locationInput,
                );
                clearEducationInputs();
            }}
            type="submit">Submit              
            </button>
        </div>
    </form>

    <div>
        {educationForm.map(item =>{
            return (
                <div key={item.keyForm} className="education-details-form-content">
                <h3>{item.schoolNameInput}</h3>
                <h3>{item.degreeInput}</h3>
                <h3>{item.startDateInput}</h3>
                <h3>{item.endDateInput}</h3>
                <h3>{item.locationInput}</h3>

                <div className="education-details-btns-container-below-form">
                    <button
                        onClick={e =>{
                            setShowedEducation(!showedEducation)
                            handleDelete(item)
                            handleEdit(e)
                        }}
                        name= {item.keyForm}
                    >
                        EDIT
                    </button>
                    <button 
                        onclick={e => {
                            handleDelete(e)
                        }}
                        name= {item.keyForm}
                    >
                        DELETE BRO
                    </button>
                    </div>
                    </div>
            )
        })}
    </div>
    </div>
    </>
    )


