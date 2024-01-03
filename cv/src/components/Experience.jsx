import React from "react";
import { useState } from "react";
import App from "./App";
import ExperienceCVComponent from "./ExperienceCVComponent";


export default function Experience({
    handleSubmit, 
    experienceForm, 
    setExperienceForm
}) {
    const [inputTitle , setInputTitle] = useState("");
    const [inputCompany , setInputCompany] = useState("");
    const [inputDescription , setInputDescription] = useState("");
    const [inputStartDate , setInputStartDate] = useState("");
    const [inputEndDate , setInputEndDate] = useState("");
    const [showedExperience , setShowedExperience] = useState(false);


function clearExperienceInputs() {
    setInputTitle("");
    setInputCompany("");
    setInputDescription("");
    setInputStartDate("");
    setInputEndDate("");
    setShowedExperience("");
}

function handleDelete(e) {
    let clickedOnEntry = e.target.name;
    setExperienceForm(Experience.filter(item => item.keyForm != clickedOnEntry))
}

function handleEdit(item) {
    setInputTitle(item.inputTitle);
    setInputCompany(item.inputCompany);
    setInputDescription(item.inputDescription);
    setInputStartDate(item.inputStartDate);
    setInputEndDate(item.inputEndDate)
    setShowedExperience(showedExperience);
}

return (
    <>
    <div className="experience-details-container">
        <h3>Experience:</h3>
        <div className="dropdown-icon-experience-details">
            <img src={dropdownImg} onClick={() => setShowedExperience(!showedExperience)}></img>
        </div>

    <form className="hide-show-content-experience-details" style={showedExperience ? {display: 'none'} : {display: 'flex'}}>
        <label>Title:</label>
        <input 
        type="text"
        value={inputTitle}
        onChange={e => setInputTitle(e.target.value)}/>

        <label>Email:</label>
        <input 
        type="text"
        value={inputCompany}
        onChange={e => setInputCompany(e.target.value)}/>

        <label>Description:</label>
        <input 
        type="text"
        value={inputDescription}
        onChange={e => setInputDescription(e.target.value)}/>

        <label>Start Date:</label>
        <input 
        type="text"
        value={inputStartDate}
        onChange={e => setInputStartDate(e.target.value)}/>

        <label>End Date:</label>
        <input 
        type="text"
        value={inputEndDate}
        onChange={e => setInputEndDate(e.target.value)}/>

        <div className="experience-details-btn-container">
            <button onClick={e => {
                handleSubmit (
                    e,
                    inputTitle,
                    inputCompany, 
                    inputDescription, 
                    inputStartDate,
                    inputEndDate,
                );
                clearExperienceInputs();
            }}
            type="submit">Submit              
            </button>
        </div>
    </form>

    <div>
        {experienceForm.map(item =>{
            return (
                <div key={item.keyForm} className="experience-details-form-content">
                <h3>{item.inputTitle}</h3>
                <h3>{item.inputCompany}</h3>
                <h3>{item.inputDescription}</h3>
                <h3>{item.inputStartDate}</h3>
                <h3>{item.inputEndDate}</h3>

                <div className="experience-details-btns-container-below-form">
                    <button
                        onClick={e =>{
                            setShowedExperience(!showedExperience)
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
    )}
    