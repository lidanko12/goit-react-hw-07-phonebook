import { useDeleteContactMutation } from "../../redux/phonebook/phonebookSlice";
import Loader from "react-loader-spinner";
import s from './ContactListItem.module.css';

export default function ContactLiSItem({ id, name, number }) {
    const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
    return (
        <li className={s.listItem} key={id}>
            {`${name}: ${number}`}
            <button className={s.btn}
                type="button" onClick={() => deleteContact(id)} disabled={isDeleting}>
                {isDeleting ?( <Loader
                                type="ThreeDots"
                                color="#000000"
                                height={15}
                                width={15}
                            />):'Delete'} </button>
        </li>
    );
}