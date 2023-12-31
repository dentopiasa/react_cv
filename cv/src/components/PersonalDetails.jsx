import React from "react";
import { useState } from "react";
import PersonalCVcomponent
import App from "./components/App,jsx" 
import dropdownImg

export default function PersonalDetails({
    handleSubmit, 
    personalDetailsForm, 
    setPersonalDetailsForm
}) {
    const [inputName , setInputName] = useState("");
    const [inputEmail , setInputEmails] = useState("");
    const [inputAddress , setInputAddress] = useState("");
    const [inputPhone , setInputPhone] = useState("");
    const [showed , setShowed] = useState(false);
}

function clearPersonalDetailsInputs() {
    setInputName("");
    setInputEmails("");
    setInputAddress("")
    setInputPhone("")
}

function handleDelete(e) {
    let clickedOnEntry = e.target.name;
    setPersonalDetailsForm(PersonalDetails.filter(item => item.keyForm != clickedOnEntry))
}

function handleEdit(item) {
    setInputName(item.inputName);
    setInputEmail(item.inputEmail);
    setInputAddress(item.inputAddress);
    setInputPhone(item.inputPhone);
    setShowed(showed);
}

return (
    <>
    <div className="personal-details-container">
        <h3>Personal Details:</h3>
        <div className="dropdown-icon-personal-details">
            <img src={dropdownImg} onClick={() => setShowed(!showed)}></img>
        </div>

    <form className="hide-show-content-personal-details" style={showed ? {display: 'none'} : {display: 'flex'}}>
        <label>Full Name:</label>
        <input 
        type="text"
        value={inputName}
        onChange={e => setInputName(e.target.value)}/>

        <label>Email:</label>
        <input 
        type="text"
        value={inputEmail}
        onChange={e => setInputEmail(e.target.value)}/>

        <label>Address:</label>
        <input 
        type="text"
        value={inputAddress}
        onChange={e => setInputAddress(e.target.value)}/>

        <label>Phone:</label>
        <input 
        type="text"
        value={inputPhone}
        onChange={e => setInputPhone(e.target.value)}/>

        <div className="personal-details-btn-container">
            <button onClick={e => {
                handleSubmit (
                    e,
                    inputName,
                    inputEmail, 
                    inputAddress, 
                    inputPhone,
                );
                clearPersonalDetailsInputs();
            }}
            type="submit">Submit              
            </button>
        </div>
    </form>

    <div>
        {personalDetailsForm.map(item =>{
            return (
                <div key={item.keyForm} className="personal-details-form-content">
                <h3>{item.inputName}</h3>
                <h3>{item.inputEmail}</h3>
                <h3>{item.inputAddress}</h3>
                <h3>{item.inputPhone}</h3>

                <div className="personal-details-btns-container-below-form">
                    <button
                        onClick={e =>{
                            setShowed(!showed)
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
    