import { useState } from "react";

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
    const [showedEducaion , setShowedEducation] = useState(false);
}


