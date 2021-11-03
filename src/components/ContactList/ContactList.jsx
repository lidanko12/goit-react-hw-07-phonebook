
import s from './ContactList.module.css'
import ContactListItem from '../ContactListItem';

export default function ContactList({contacts}) {


  return (
    <ul>
      {contacts.map((contact) => (
          <ContactListItem key={contact.id} {...contact} />
        ))}
    </ul>
  );
}


