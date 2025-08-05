import { useState } from "react";
import "../style/Volunteer.css";

import {toast} from "react-toastify";

function Volunteer(){

    let[details, setDetails] = useState({
        name: "",
        date: "",
        email: "",
        number: "",
        gender: "",
        address: "",
    })

    const detailsHandler = (e)=>{
        setDetails((curr)=>(
            {
                ...curr,
                [e.target.name] : e.target.value
            }
        ))
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        setDetails({
            name: "",
            date: "",
            email: "",
            number: "",
            gender: "",
            address: "",
        })
        toast.success("Your Response is Recorded")
    }
    return(
        <div className="volunteer">
            <div className="volunteer-container">
            <strong>Volunteer Opportunities Form</strong>
            <form className="volunteer-form" onSubmit={submitHandler}>

                <label htmlFor="name">
                    Your name
                </label>
                <input type="text" name="name" id="name" placeholder="Enter you full name" onChange={detailsHandler} value={details.name} required/>

                <label htmlFor="date">Date Of Birth</label>
                <input type="date" name="date" id="date" onChange={detailsHandler} value={details.date} required/>

                <label htmlFor="email">Your Email Address</label>
                <input type="email" name="email" id="email" placeholder="Email" onChange={detailsHandler} value={details.email} required/>

                <label htmlFor="contact">Your Contact Number</label>
                <input type="number" name="number" id="contact" onChange={detailsHandler} value={details.number} placeholder="Concact" required/>

                <label htmlFor="gender">
                    Gender
                </label>
                <select name="gender" id="gender" onChange={detailsHandler} value={details.gender} required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <label htmlFor="address">Your Current Address</label>
                <input type="text" name="address" id="address" placeholder="Address" onChange={detailsHandler} value={details.address} required />

                <button type="Subimt" className="donate">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default Volunteer;