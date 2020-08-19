import React from 'react'
import Post from './Post/Post'
import {connect} from 'react-redux'

import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'




const mapStateToProps=(state)=>{
    return  {
        posts: state.profilePage.posts,
        NewPostText: state.profilePage.NewPostText

    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        updateNewPostText:(text)=>{
            let action=updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: ()=>{
            dispatch(addPostActionCreator());
        }

    }

}
const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer;