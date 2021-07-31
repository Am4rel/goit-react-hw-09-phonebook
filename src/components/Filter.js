import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../redux/contacts/contacts-actions';
import styles from '../styles/Filter.module.css'

const Filter = () => {
    const dispatch = useDispatch();

    const onFilter = e => dispatch(actions.filter(e.target.value));

    return (
        <div className={styles.filterField}>
            <h2>Contacts</h2>
            <label> <p>Find contact by name:</p>
                <input type="text" name="filter" onChange={onFilter}></input>
            </label>
        </div>
    )
}

export default Filter;