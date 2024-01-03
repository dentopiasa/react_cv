
import PersonalDetails from "./PersonalDetails"
import Education from "./Education"
import Experience from "./Experience"
import PersonalDetailsCVComponent from "./PersonalDetailsCVComponent"
import EducationCVComponent from "./EducationCVComponent"
import ExperienceCVComponent from "./ExperienceCVComponent"
import { useState } from "react"
import { v4 as uuid } from "uuid"

export default function App() {
    const [personalDetailsForm , setPersonalDetailsForm] =  useState([]);
    const [educationForm , setEducationForm] = useState([]);
    const [experienceForm , setExperienceForm] = useState([]);

    function handleSubmitPersonal(e, inputName, inputEmail, inputAddress, inputPhone) {
        e.preventDefault();
        const updatedInfo = {
            inputName : inputName, 
            inputEmail : inputEmail, 
            inputAddress : inputAddress, 
            inputPhone : inputPhone,
            keyForm : crypto.randomUUID(),
            keyCV : crypto.randomUUID(),
        };
        setPersonalDetailsForm([ ...personalDetailsForm , updatedInfo])
    }

    function handleSubmitEducation(e, schoolNameInput, degreeInput, startDateInput, endDateInput, locationInput) {
        e.preventDefault();
        const updatedInfo = {
            schoolNameInput : schoolNameInput, 
            degreeInput : degreeInput, 
            startDateInput : startDateInput, 
            endDateInput : endDateInput, 
            locationInput : locationInput,
            keyForm : crypto.randomUUID(),
            keyCV : crypto.randomUUID(),
        };
        setEducationForm([ ...educationForm , updatedInfo])
    }

    function handleSubmitExperience(e, inputTitle, inputCompany, inputDescription, inputStartDate, inputEndDate){
        e.preventDefault();
        const updatedInfo = {
            inputTitle : inputTitle,
            inputCompany: inputCompany,
            inputDescription : inputDescription, 
            inputStartDate : inputStartDate, 
            inputEndDate : inputEndDate, 
            keyForm : crypto.randomUUID(),
            keyCV : crypto.randomUUID(),
        };
        setExperienceForm([ ...experienceForm , updatedInfo])
    }

    return (
        <>
        <div className="main-header-container">
            <h1 className="main-header">CV GENERATOR</h1>
        </div>
        <div id="form">
            <PersonalDetails
                handleSubmit={handleSubmitPersonal}
                personalDetailsForm={personalDetailsForm}
                setPersonalDetailsForm={setPersonalDetailsForm}
            ></PersonalDetails>
            <Education
                handleSubmit={handleSubmitEducation}
                educationForm={educationForm}
                setEducationForm={setEducationForm}
            ></Education>
            <Experience
                handleSubmit={handleSubmitExperience}
                experienceForm={experienceForm}
                setExperienceForm={setExperienceForm}
            ></Experience>
        </div>

        <div id="cv-page">
            <PersonalDetailsCVComponent 
                personalDetailsForm={personalDetailsForm}
            ></PersonalDetailsCVComponent>
            <h3 className="education-section-main-header">Education</h3>
            <EducationCVComponent 
                educationForm={educationForm}
            ></EducationCVComponent>
            <h3 className="experience-section-main-header">Experience</h3>
            <ExperienceCVComponent
                experienceForm={experienceForm} 
            ></ExperienceCVComponent>
        </div>
        </>
    )
}