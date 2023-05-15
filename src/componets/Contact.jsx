import React, { useState } from "react";
import './Contact.css';


export default function Contact() {


    const [name, setname] = useState('');
    const [ocup_type, setocup_type] = useState('');
    const [org_name, setorg_name] = useState('');
    const [Email, setEmail] = useState('');
    const [message, setmessage] = useState('');
    const oncontact = () => {
        console.log(name, ocup_type, org_name, Email, message)

    }
    return (
        <div>

        <div className="contact-main-container">
            <div className="contact-form">
            <div className="heading-detalis">
                <h1 className="hhh">Contact Form</h1>

            </div>
                <label htmlFor="" >Name </label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setname(e.target.value)}></input>
               
               
                <label htmlFor="">Ocuupation </label>
                <input type="text" id="ocup_type" name="ocup_type" value={ocup_type} onChange={(e) => setocup_type(e.target.value)}></input>
                
                <label htmlFor=""> Ocuupation/institue Name</label>
                <input type="text" id="org_name" name="org_name" value={org_name} onChange={(e) => setorg_name(e.target.value)}></input>
                
                <label htmlFor=""> Email</label>
                <input type="text" id="Email" name="Email" value={Email} onChange={(e) => setEmail(e.target.value)}></input>
                
                <label htmlFor="">Message </label>
                <textarea name="message" id="message" cols="30" rows="10" value={message} onChange={(e) => setmessage(e.target.value)}></textarea>

            <div className="savebtn">
                <button type="submit" onClick={oncontact}  className="submit">Send</button>
            </div>
            </div>
        </div>
        </div>
    )
}
