import React from 'react'
import s from './main.module.css'
import Profile from '../Profile/Profile'
import {Route} from 'react-router-dom'
import DialogContainer from '../Dialog/DialogContainer'
import MyPostsContainer from '../Users/usersContainer'

const Main =(props) =>{
    return (
        <div className={s.main}>
            
            <Route path="/profile" render={ ()=><Profile />} />
            <Route path="/dialogs" render= { ()=><DialogContainer/>}/>
            <Route path="/users" render= { ()=><MyPostsContainer/>}/>
      
        </div>
    );
}


export default Main;