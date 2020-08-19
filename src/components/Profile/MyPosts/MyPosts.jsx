import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'
const MyPosts=(props)=>{
  
    

    let messagesElement=
    props.posts.map(m=><Post message ={m.message} likesCount={m.likesCount}/>);
        
    let newPostElement=React.createRef();

    let onAddPost=()=>{
        props.addPost();
       // let text = newPostElement.current.value;
       // props.dispatch(addPostActionCreator());
       
        
        
    }
    
    let onPostChange=()=>{
        let text =newPostElement.current.value;
        props.updateNewPostText(text);
    
    }


    return (
        <div className={s.postsBlock}>
            MyPosts
            <div>
                <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.NewPostText}/>
                </div>
                <div>
                <button onClick={onAddPost }>Add post</button>
                </div>
            </div>
            <div className="">
                {messagesElement}
                

            </div>
        </div>
    );
}

export default MyPosts;