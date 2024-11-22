import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Addcontact from './components/Addcontact';
import ContactList from './components/ContactList';
import { useState, useEffect } from 'react';
import uuid4 from 'uuid4';

function App() {
const localStorageKey = "contact"
  const [contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey))
  || []},)

  useEffect(() => {
    
    localStorage.setItem(localStorageKey, JSON.stringify(contact))
  }, [contact])
  const removeContact = (id) => {
    const updatedList = contact.filter((val)  => {
      return val.id !== id; 
    }) 
    setContact(updatedList)
  }
  const addContact = (data) => {
    console.log(data)
    setContact([...contact, {id:uuid4(), data}])
  }
  return (
    <div >
     
      <Header/>
      <Addcontact addContact = {addContact}/>
      <ContactList contact = {contact} removeContact={removeContact}/>
    </div>
  );
}

export default App;
