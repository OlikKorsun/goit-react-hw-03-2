import { useState, useEffect } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'

export default function App() {

  const initContacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("savedCont");
    return savedContacts !== '[]' ? JSON.parse(savedContacts): initContacts}
  );

  useEffect(() => {
    window.localStorage.setItem("savedCont", JSON.stringify(contacts))
  }, [contacts]);

  const [filter, setFilter] = useState('');

  const filterContact = contacts.filter((contact) =>
    (contact.name.toLowerCase().includes(filter.toLowerCase())) ||
    (contact.number.includes(filter))
  );

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

   return (
    <div>
    <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filterContact} onDelete={deleteContact}/>
    </div>
  )
}


