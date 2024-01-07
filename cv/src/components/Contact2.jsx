import {useState} from "react"

function Contact ({nameStateFunction , emailStateFunction, phoneStateFunction}) {
    const [name , setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone , setPhone] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }
}

return (
    <div>
        <label>Name</label>
        <input type= "text" value= {name} onChange={handleNameChange}/>
    </div>
)
    


export default Contact