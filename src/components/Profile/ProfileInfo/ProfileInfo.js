import React from 'react'
import s from "./ProfileInfo.module.css"

const ProfileInfo =() =>{
    return (
        <div>
            
            <div className={s.postsBlock}>
                <img  src="https://cdn.pixabay.com/photo/2018/06/17/20/35/chain-3481377_960_720.jpg 1x, https://cdn.pixabay.com/photo/2018/06/17/20/35/chain-3481377_1280.jpg 1.333x"/>
            </div>
            <div className={s.descriptionBlock}>
                ava +description
            </div>
            
        </div>
    );
}


export default ProfileInfo;