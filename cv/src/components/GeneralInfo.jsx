import {useState} from "react"
import '/src/styles/GeneralInfo.css'

function Info() {
    const [Name , setName] = useState("")
    const [SurName , setSurname] = useState("")
    const [Age , setAge] = useState("")
    const [Email , setEmail] = useState("")
    const [Phone  , setPhone] = useState("")

    return (
        <div>
            <h1 className="title">CV GENERATOR</h1>
        <div className="container">
        <div className="personalInfo">
        <input
            type = "text"
            placeholder = "name"
            value = {Name}
            onChange={(event) => setName(event.target.value)}
        />
        <input
            type = "text"
            placeholder = "surname"
            value = {SurName}
            onChange={(event) => setSurname(event.target.value)}
        />
        <input
            type = "text"
            placeholder = "age"
            value = {Age}
            onChange={(event) => setAge(event.target.value)}
        />
        <input
            type = "text"
            placeholder = "email"
            value = {Email}
            onChange={(event) => setEmail(event.target.value)}
        />
        <input
            type = "text"
            placeholder = "phone"
            value = {Phone}
            onChange={(event) => setPhone(event.target.value)}
        />
        </div>
        </div>
        </div>
    )
}

export default Info



