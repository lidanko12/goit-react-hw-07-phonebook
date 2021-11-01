
import { useFetchContactsQuery,useDeleteContactMutation } from "../redux/phonebook/phonebookSlice";
import ContactList from "../components/ContactList";

export const ContactsPage = () => {
    const { data, isFetching } = useFetchContactsQuery();
    const [deleteContact,{isLoading:isDeleting}] = useDeleteContactMutation();
    return (
        <div>
            {data && <ContactList contacts={data} onDelete={deleteContact} deleting ={isDeleting} />}
        </div>
    )
};