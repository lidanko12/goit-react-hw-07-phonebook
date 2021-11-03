import s from "./Filter.module.css";
import { getFilter} from "../../redux/phonebook/selector";
import { useDispatch,useSelector } from "react-redux";
import actions from '../../redux/phonebook/phonebook-actions'
export default function Filter({value, onChange}) {


  return (
    <label className={s.label}>
      Filter
      <input
        className={s.input}
        type="text"
        name="filter"
        placeholder="Enter some letters to search"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
}