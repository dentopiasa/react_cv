import {useState} from "react"
import '/src/styles/GeneralInfo.css'

function Personal() {
    const [Name , setName] = useState("")
    const [SurName , setSurname] = useState("")
    const [Age , setAge] = useState("")
    const [Email , setEmail] = useState("")
    const [Phone  , setPhone] = useState("")

    return (
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
    )
}

export default Personal
