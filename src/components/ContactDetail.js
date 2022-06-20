import React from 'react';
import { Link ,useLocation} from "react-router-dom";

const ContactDetails=()=>{
    const location = useLocation();
    console.log(location);
    const {Name,Email}=location.state;
    return(
      <div className='main'>
        <div className='ui card centered'>
            <div className='image'>
            <img  src='./images/image.jpg'></img>
            </div>
            <div className='content'>
                <div className='header'>{Name}</div>
                <div className='description'>{Email}</div>
            </div>
        </div>
        <div className='center-div' style={{textAlign:"center"}}>
           <Link to="/"><button className='ui button blue center'>Back to ContactList</button></Link> 
        </div>
      </div>
    )
}

export default ContactDetails;