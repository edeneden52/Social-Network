import React from 'react'
import s from './users.module.css'
import userPhoto from '../../assets/images/avatar.jpg'

let Users = (props) => {
    let pagesCount= Math.ceil(props.totalUsersCount/props.pageSize);
        
    let pages=[];
    for(let i=1; i<=pagesCount;i++){
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span onClick={() => { props.onPageChanged(p); }} className={props.currentPage === p && s.selectedPage} >{p}</span>
                })}

            </div>
            {

                props.users.map(u =>
                    <div key={u.id} >
                        <span>
                            <div><img className={s.img} src={u.photos.large != null ? u.photos.large : userPhoto} /></div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { props.unfollow(u.id) }} >Unfollow</button>
                                    : <button onClick={() => { props.follow(u.id) }} >follow</button>}
                            </div>
                        </span>


                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>

                        </span>

                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>

                        </span>

                    </div>
                )
            }
        </div>
    )

}

export default Users;