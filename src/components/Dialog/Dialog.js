import React from 'react'
import Style from './Dialog.module.css'

import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'




const Dialog =(props) =>{
    let state=props.dialogsPage;
   
    let DialogsElements= state.dialogs.map( dialog=>
        <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
    );
    let messagesElements= state.messages.map(m=>
        <Message message={m.message} key={m.id}/>);


    let newMessageBody=props.newMessageBody;

    let onSendMessageClick=()=>{
        
        props.sendMessage();
        
    }
    let onNewMessageChange =(e)=>{
        let bodyText = e.target.value;
        props.updateNewMessageBody(bodyText);
       
    }

    

    return (
        <div className={Style.dialogs}>
            <div className={Style["dialogs-items"]}>

             {DialogsElements}
            
   
            
            </div>
            <div className={Style.messages}>
               {messagesElements}
               <div>
                <textarea onChange={onNewMessageChange} value={state.newMessageBody} placeholder='Enter your message' />
               </div>
               <div>
                   <button onClick={onSendMessageClick}>send </button>

               </div>
               
                 
                </div>
        </div>
    );
}


export default Dialog;