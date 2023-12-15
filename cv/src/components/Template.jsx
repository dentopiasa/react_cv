import Personal from "./PersonalInfo.jsx";
import Jobs from "./JobInfo.jsx";
import Education from "./Education.jsx";
import '/src/styles/GeneralInfo.css'

function Template() {

return (
        <div>
            <h1 className="title">CV GENERATOR</h1>
        <div className="container">
            <div className="infoContainer">
            <Personal/>
            <Jobs/>
            <Education/>
            </div>
        </div>
        </div>
    )
}

export default Template
