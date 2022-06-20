import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import {useNavigate} from 'react-router-dom';

function AddContact(props) {

    // const [name, setName] = useState("");
    // const trackName = (e) => {
    //     const Name = e.target.value
    //     setName(Name);

    // }

    // const [email, setEmail] = useState("");
    // const trackEmail = (e) => {
    //     const Email = e.target.value
    //     setName(Email);
    // }

    const navigate = useNavigate();

    function Redirection(){
        navigate("/");
    }

    const [contact, setContact] = useState({ name: "", email: "",user_id:"" });

    const trackChange = (e) => {
        const {name, value} = e.target;
        setContact(() => 
        {
           return{
            ...contact,
            [name]:value,
            user_id:uuidv4()
           }
        })
        console.log(contact);
    }

const onSubmit =
    (e) => {
        e.preventDefault();
        if (contact.name === "" || contact.email === "") {
            alert("field is required");
        }
        else{
            props.addContactHandler(contact);
        }
        // setContact({name:"",email:""});
        Redirection();
    }

return (
    <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form"
            onSubmit={onSubmit}>
            <div className="feild">
                <label>Name</label>
                <input type="text" value={contact.name} name="name" placeholder="Name" onChange={trackChange} ></input>
            </div>
            <div className="feild">
                <label>Email</label>
                <input type="text" value={contact.email} name="email" placeholder="Email" onChange={trackChange}></input>
            </div>
            <button className="ui button blue">Add</button>
        </form>
    </div>
)

}

export default AddContact;
// onClick={()=>{
//    props.addContactHandler(contact);
//}}