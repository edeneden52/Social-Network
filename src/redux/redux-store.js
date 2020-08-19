import {createStore, combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import SidebarReducer  from "./sidebar-reducer";
import usersReducer from "./users-reducer";



let reducers=combineReducers(
    {
        
        dialogsPage:dialogReducer,
        profilePage:profileReducer,
        sidebar:SidebarReducer,
        usersPage:usersReducer



    }
);

let store =createStore(reducers);
window.store=store;

export default store;