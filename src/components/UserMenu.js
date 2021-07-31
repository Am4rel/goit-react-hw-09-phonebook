import React from "react";
import { useDispatch, useStore} from 'react-redux'
import {logout} from '../redux/auth/auth-operations'
import '../styles/header.css'

const UserMenu = () => {
    const store = useStore();
    const {auth: {user: {name}}} = store.getState();
    const dispatch = useDispatch();

    const onLogOutClick = () => dispatch(logout());

    return (<div className="user-block">
        <p>Welcome, {name}!</p>
        <button type="button" onClick={onLogOutClick} className="button">Log out</button>
    </div>)
}

export default UserMenu;