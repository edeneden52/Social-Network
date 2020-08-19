
const UPDATE_NEW_MESSAGE_BODY='UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE='SEND_MESSAGE';


let initialState={
    
    dialogs:[
        {id:1,name:"Dima"},
        {id:2,name:"Andrey"},
        {id:3,name:"sveta"},
        {id:4,name:"Valera"},
        {id:5,name:"eden"},
        {id:6,name:"davedd"}
    ],
     messages:[{id: 1, message: 'Hi'},
     {id: 2, message: 'How is your it-kamasutra?'},
     {id: 3, message: 'Yo'},
     {id: 4, message: 'Yo'},
     {id: 5, message: 'Yo'}],
    newMessageBody:""

     
};

export const dialogReducer=(state=initialState,action)=>{
    
    

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return{
                ...state,
                newMessageBody:action.body
                //dealogesPage:
                //messages:[...state.messages]
            }
            
             
        
            
            
             
        case SEND_MESSAGE:
            let body=state.newMessageBody;
            
            return {
                ...state,
                newMessageBody:"",
                messages:[...state.messages,{id:6,message:body}]
                //dealogesPage:
                //messages:[...state.messages]
            };

            
            
            
    
        default: 
            return state;
    }

    
  
}
export default dialogReducer;

//action creator
export const updateNewMessageBodyCreator=(bodyText)=>{
    return{
        type:UPDATE_NEW_MESSAGE_BODY,
        body:bodyText,
    }
 }
 export const sendMessageCreator=()=>{
    return{
        type:SEND_MESSAGE,
        
    }
 }