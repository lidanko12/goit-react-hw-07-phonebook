

import Container from './components/Conteiner/Container';
import s from './App.module.css';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';

import ContactList from './components/ContactList';
import { useState } from 'react';
import { useFetchContactsQuery } from './redux/phonebook/phonebookSlice';


export default function App() {
  const { data, isFetching } = useFetchContactsQuery("");

  
  const [filter, setFilter] = useState('');
  
  const changeFilter = e => {
    setFilter(e.currentTarget.value)
  }

  const getVisibleContacts = () => {
    const normilizedFilter = filter.toLowerCase();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter));
  }

  return (
    <>
          <Container>
            <h1 className={s.label}>Phonebook</h1>
    {data && <ContactForm contacts = {data} />}
      <h2 className={s.label}>Contacts</h2>
            <Filter value={filter} onChange={changeFilter} />
        {data &&<ContactList contacts={getVisibleContacts()} />}
      </Container>
    </>
  );
}

