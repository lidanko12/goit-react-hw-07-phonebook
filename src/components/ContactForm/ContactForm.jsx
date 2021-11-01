
// import { useState } from "react";
// import { useDispatch,useSelector } from "react-redux";
import s from './ContactForm.module.css';

import { toast, ToastContainer, Zoom } from 'react-toastify';
import Loader from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import { useCreateContactMutation,useFetchContactsQuery } from "../../redux/phonebook/phonebookSlice";


export default function ContactForm() {
    const [createContact, { isLoading }] = useCreateContactMutation();
    const { data: contacts } = useFetchContactsQuery();

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.currentTarget.name.value;
        const number = e.currentTarget.number.value;
        const newContact = {
            name,
            number,
        };
        if (contacts.find(
            contact => name.toLowerCase() === contact.name.toLowerCase())) {
            toast.warning('Contact is already added !!!');
            e.currentTarget.reset();
            return;
        }
        createContact(newContact);
        e.currentTarget.reset();
    }
        return (
            <>
                <form className={s.form} onSubmit={handleSubmit}>
                    <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                            className={s.input} />
                    </label>
                    <label>
                        Number
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                            className={s.input} />
                    </label>
                    <button type="submit" className={s.btn} disabled={isLoading}>Add contact
                        {isLoading && (
                            <Loader
                                type="Puff"
                                color="#000000"
                                height={25}
                                width={25}
                            />
                        )}</button>
                </form>
                <ToastContainer transition={Zoom} autoClose={3000} />
            </>
        )
    
}
