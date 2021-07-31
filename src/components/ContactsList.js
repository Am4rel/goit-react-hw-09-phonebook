import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNumber, fetchContacts } from '../redux/contacts/contacts-operations';
import * as selectors from '../redux/contacts/contacts-selectors';
import {Loader} from './Loader'
import styles from '../styles/ContactList.module.css'
import buttonStyles from '../styles/button.module.css'

const ContactsList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => selectors.getContacts(state))
    const filter =  useSelector(state => selectors.getFilter(state));
    const isLoading = useSelector(state => selectors.getLoadingState(state));

    const onContactDelete = e => dispatch(deleteNumber(e.target.parentElement.id));
    
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    
    const contactList = filter !== "" ?
        contacts.filter(contact => { return contact.name.toString().toLowerCase().includes(filter.toString().toLowerCase()) }) :
        contacts;

    return (
        <>
            {isLoading === true && <Loader />}
            <ul className={styles.list}>
                {contactList?.map(contact =>
                    <li id={contact.id} key={contact.id} className={styles.listItem}>
                        <p><b>Name: </b>{contact.name}</p>
                        <p><b>Number: </b>{contact.number}</p>
                        <button type="button" onClick={onContactDelete} className={buttonStyles.button}>Delete</button>
                    </li>)
                }
            </ul >
        </>
    )
};

export default ContactsList;