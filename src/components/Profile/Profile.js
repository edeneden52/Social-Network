import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Style from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile =(props) =>{
    return (
        <div className={Style.dialogs}>
            <ProfileInfo/>
            
            <MyPostsContainer />
        </div>
    );
}


export default Profile;