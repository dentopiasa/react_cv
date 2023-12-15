import {useState} from 'react'
import '/src/styles/GeneralInfo.css'

function Education() {
    const [School , setSchool] = useState("")
    const [Degree , setDegree] = useState("")
    const [Graduated , setGraduated] = useState("")

    return (
        <div className='educationInfo'><span className="infoTitles">Education</span>
            <input
                type = "text"
                placeholder = "university"
                value = {School}
                onChange={(event) => setSchool(event.target.value)}
            />
             <input
                type = "text"
                placeholder = "degree"
                value = {Degree}
                onChange={(event) => setDegree(event.target.value)}
            />
             <input
                type = "text"
                placeholder = "graduated year"
                value = {Graduated}
                onChange={(event) => setGraduated(event.target.value)}
            />
        </div>
    )
}

export default Education