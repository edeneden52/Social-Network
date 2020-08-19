import React from 'react'
import s from './navbar.module.css'
import {NavLink} from 'react-router-dom'


const NavBar =() =>{
    return (
        <div className={s.nav}>
                <nav className={s.navbar}> 
        <div  className={s.item}>
            <NavLink  to="/profile" activeClassName={s.activeLink}>profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink  to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink  to="/users" activeClassName={s.activeLink}>users</NavLink>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>music</a>
        </div>
        <div className={s.item}>
            <a>settings</a>
        </div>
        </nav>
        </div>
    );
}


export default NavBar;