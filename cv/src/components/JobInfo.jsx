import {useState} from 'react'
import '/src/styles/GeneralInfo.css'

function Jobs () {
    const [Position , setPosition] = useState("")
    const [Company , setCompany] = useState("")
    const [Start , setStart] = useState("")
    const [End , setEnd] = useState("")
    const [Description , setDescription] = useState("")

    return (
        <div className="jobsInfo"><span className="infoTitles">Work Experience</span>
            <input
            type = "text"
            placeholder = "position"
            value = {Position}
            onChange={(event) => setPosition(event.target.value)}
            />
            <input
            type = "text"
            placeholder = "company"
            value = {Company}
            onChange={(event) => setCompany(event.target.value)}
            />
            <input
            type = "text"
            placeholder = "start date"
            value = {Start}
            onChange={(event) => setStart(event.target.value)}
            />
            <input
            type = "text"
            placeholder = "end date"
            value = {End}
            onChange={(event) => setEnd(event.target.value)}
            />
            <input
            type = "text"
            placeholder = "description"
            value = {Description}
            onChange={(event) => setDescription(event.target.value)}
            />
        </div>
    )
}

export default Jobs