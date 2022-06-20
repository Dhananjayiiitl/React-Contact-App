import React from 'react';
import { Link } from "react-router-dom";

const CardContact=(props)=>{
    return(
        <div className='item'>
                <img class="ui mini image" src='./images/image.jpg'></img>
                <div className='content'>
                    <Link to={`/contact/${props.contact.user_id}`} state={{Name:props.contact.name,Email:props.contact.email}}><div className='header'>{props.contact.name}</div></Link>
                    <div>{props.contact.email}</div>
                    <i className='trash alternate outline icon' onClick={()=> props.clickHandler(props.contact.user_id)}></i>
                </div>
            </div>
    )
}

export default CardContact;