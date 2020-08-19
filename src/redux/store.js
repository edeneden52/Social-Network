
import ProfilePageReducer from './profile-reducer'
import DialogReducer from './dialogs-reducer'
import SidebarReducer from './sidebar-reducer'

let store={
   _state:{
      dialogsPage: {
       dialogsData:[
          {id:1,name:"Dima"},
          {id:2,name:"Andrey"},
          {id:3,name:"sveta"},
          {id:4,name:"Valera"},
          {id:5,name:"eden"},
          {id:6,name:"davedd"}
      ],
       messagesData:[
          {id:1,message:"Hiaaa"},
          {id:2,message:"how is your name"},
          {id:3,message:"Hi"},
          {id:4,message:"how is your name"},
          {id:5,message:"Hi"},
          {id:6,message:"how is your n"}
      ]
      ,
      newMessageBody:''
       }
      ,
      ProfilePage:{
       postsData:[
          {id:1,message:"Hi, how are you ?",likesCount:0},
          {id:2,message:"it's my first post",likesCount:11}],
          
        
        NewPostText:'it '
     },
     sidebar:{},
       
  }
  ,
  getState(){
     return this._state;
  }
   ,
    _callSubscriber(){  
   console.log('state changed');
   }
   ,
   
   _subscribe (observer){
      this._callSubscriber=observer;
     
   }
   ,
   
   dispatch(action){//{type:'add-post'}

   this._state.ProfilePage=ProfilePageReducer(this._state.ProfilePage,action);
   this._state.dialogesPage=DialogReducer(this._state.dialogesPage,action);
   this._state.sidebar=SidebarReducer(this._state.sidebar,action);
   this._callSubscriber(this._state);
   
   }
   ,

}

        




window.store=store;





export default store;