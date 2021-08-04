import React, {useState} from 'react';
import { addNumber } from '../redux/contacts/contacts-operations';
import { useDispatch, useStore } from 'react-redux';
import buttonStyles from '../styles/button.module.css';
import styles from '../styles/Form.module.css';

const Form = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const dispatch = useDispatch();

    const store = useStore();
    const state = store.getState();
    const existingContacts = state.contacts.items;

    const onContactAdd = e => {
        e.preventDefault();

        const existingNames = existingContacts.map(contact => contact.name.toLowerCase());

        if (existingNames.includes(name.toLowerCase())){
            setName("");
            setNumber("");
            return alert(`Contact with name ${name} is already in your Phonebook.`)
        };

        dispatch(addNumber(name, number))

        setName("");
        setNumber("");
    }

    return <form onSubmit={onContactAdd} className={styles.formBox}>
        <label> 
            <p>Name:</p>
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                onChange={e => setName(e.target.value)}
                value={name}
                required
            />
        </label>

        <label> 
            <p>Telephone number:</p>
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять из цифр, может содержать пробелы, тире, круглые скобки и может начинаться с +"
                onChange={e => setNumber(e.target.value)}
                value={number}
                required
            />
        </label>

        <button type="submit" className={buttonStyles.button}> Add a contact</button>
    </form>
}

export default Form;