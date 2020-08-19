import React from 'react'
import Style from './Post.module.css'

const Post =(props) =>{
    return (
        <div className={Style.item}>
            <div>
                <span>The message :{props.message}</span>
                <br></br>
                <span>count like:{props.likesCount}</span>
            </div>
        </div>
    );
}


export default Post;