// import logo from './logo.svg';?
// import './App.css';
// import { json } from "body-parser";
import React, { useState, useEffect } from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import useLocalStorage from "./Hooks/useLocalStorage";
import ContactDetails from "./components/ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContact] = useLocalStorage(LOCAL_STORAGE_KEY, []);

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.user_id != id;

    })
    setContact(newContactList);
  }

  const addContactHandler = (contact) => {
    console.log(contact);
    setContact((prevValue) => {
      return [...prevValue, contact];
    })
    console.log(contacts);
  }

  // useEffect(()=>{
  //   const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  //     setContact(retrieveContacts)

  // },[])

  // useEffect(()=>{
  //   localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))

  // },[contacts]);

  return (
    <div className="ui container">

      <Router>
        <Header />
        <Routes>
          <Route exact path="/add" element={<AddContact addContactHandler={addContactHandler} /> } />
          <Route exact path="/" element={<ContactList getContactId={removeContactHandler} contacts={contacts} /> } />
          <Route exact path="/contact/:id" element={<ContactDetails/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
/* <AddContact addContactHandler={addContactHandler}/>
    <ContactList getContactId={removeContactHandler} contacts={contacts}/> */