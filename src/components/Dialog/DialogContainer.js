import React from 'react'
import Style from './Dialog.module.css'
import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {sendMessageCreator,updateNewMessageBodyCreator} from '../../redux/dialogs-reducer'
import Dialog from './Dialog'

import {connect} from 'react-redux'




let mamStateToProps=(state)=>{
    return {
        dialogsPage: state.dialogsPage,
        
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        updateNewMessageBody:(bodyText)=>{
            dispatch(updateNewMessageBodyCreator(bodyText));
        },
        sendMessage:()=>{
            dispatch(sendMessageCreator());
            
        }
    }
}
const DialogsContainer=connect(mamStateToProps,mapDispatchToProps)(Dialog);
export default DialogsContainer;