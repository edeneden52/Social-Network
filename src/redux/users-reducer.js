
const FOLLOW='FOLLOW';
const UNFOLLOW='UNFOLLOW';
const SET_USERS='SET_USERS';
const SET_CURRENT_PAGE='SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT';


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false

};
 const usersReducer =(state=initialState,action)=>{
  

    switch(action.type){
        
        case FOLLOW:
            
            return{
                ...state,
                users: state.users.map(u => {
                if(u.id===action.userId){
                    return {...u,followed:true};
                }
                return u;

            } )
        }

        case UNFOLLOW:
            return{
                ...state,
            users:state.users.map(u=>{
                if(u.id===action.userId){
                    return {...u,followed:false};
                }
                return u;

            } )
        }
        case SET_USERS:{
           // return {...state,users: [...state.users,...action.users] }
           return {...state,users: action.users }
        }
        case SET_CURRENT_PAGE:{
            return {...state,currentPage:action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT:{
            return {...state,totalUsersCount: action.TotalUsers }
        }
            
        
           default:
            return state;
    }

  

}

export const followAC=(userId)=>{
    return{
        type:FOLLOW,
        userId:userId
    }
}

export const unfollowAc=(userId)=>{
  return{
      type: UNFOLLOW,
      userId:userId,
  }
}
export const setUsersAc=(users)=>{
    return{
        type: SET_USERS,
        users:users,
    }
  }

  export const setCurrentPageAC=(CurrentPage)=>{
    return{
        type: SET_CURRENT_PAGE,
        currentPage:CurrentPage,
    }
  }
  export const setTotalUsersCountAC=(totalUsers)=>{
    return{
        type: SET_TOTAL_USERS_COUNT,
        TotalUsers:totalUsers,
    }
  }
  
export default usersReducer;