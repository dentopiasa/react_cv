import { useState } from "react";
import React from "react";

function App2() {
    const [name , setName] = useState("name");
    const [email , setEmail] = useState("email");
    const [phone , setPhone] = useState("phone");
    const [school , setSchool] = useState("school");
    const [study , setStudy] = useState("study");
    const [studyStartDate , setStudyStartDate] = useState("study start date");
    const [studyEndDate , setStudyEndDate] = useState("study end date");
    const [company , setCompany] = useState("company");
    const [title , setTitle] = useState("title");
    const [responsibilities , setResponsibilities] =  useState("responsibilities");
    const [workStart , setWorkStart] = useState("workStart");
    const [workEnd , setWorkEnd] = useState("workEnd");

    //contact 
    const setNameChange = function(value) {
        setName(value);
    }
    const setEmailChange = function(value) {
        setEmail(value); 
    }
    const setPhoneChange = function(value) {
        setPhone(value);
    }


    return (
        <div>
            <h1>CV APPLICATION</h1>
            <Contact2
                nameStateFn={setNameChange} 
            />
        </div>
    )
}

export default App2