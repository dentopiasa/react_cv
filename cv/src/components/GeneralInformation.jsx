import {useState} from "react"

function Info() {
    const [Name , setName] = useState("")
    const [SurName , setSurname] = useState("")
    const [Age , setAge] = useState("")
    const [Email , setEmail] = useState("")
    const [Phone  , setPhone] = useState("")

    return (
        <div>
        <input
            type = "text"
            value = {Name}
            onChange={(event) => setName(event.target.value)}
        />
        <input
            type = "text"
            value = {SurName}
            onChange={(event) => setSurname(event.target.value)}
        />
        <input
            type = "text"
            value = {Age}
            onChange={(event) => setAge(event.target.value)}
        />
        <input
            type = "text"
            value = {Email}
            onChange={(event) => setEmail(event.target.value)}
        />
        <input
            type = "text"
            value = {Phone}
            onChange={(event) => setPhone(event.target.value)}
        />
        <button type="submit">submit</button>
        </div>
    )
}

export default Info



