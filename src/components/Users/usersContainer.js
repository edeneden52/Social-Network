import React from 'react';
import {connect} from 'react-redux';
import {setTotalUsersCountAC,setCurrentPageAC,unfollowAc, followAC, setUsersAc} from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import preloader from '../../assets/images/Spinner-1s-200px.svg' ;

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(
                    response => {
                        this.props.setUsers(response.data.items);
                        //console.log(response.data);

                        this.props.setTotalUsersCount(response.data.totalCount);
                    }
                );

        

    }
    onPageChanged = (pageNumber) => {

        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(
                response => {
                    this.props.setUsers(response.data.items);
                }
            );

    }
    
    onPageChanged = (pageNumber) => {

        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(
                response => {
                    this.props.setUsers(response.data.items);
                }
            );

    }

    render() {
        return <>
        {this.props.isFetching? <img src={preloader}/> :null}
        <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        onPageChanged={this.onPageChanged}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
    
        />
    </>
    }
}



let mapStateToProps=(state)=>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            let action = followAC(userId);
            dispatch(action);
        },
        unfollow: (userId) => {
            dispatch(unfollowAc(userId));
        }
        ,
        setUsers: (users) => {

            dispatch(setUsersAc(users));
        }
        ,
        setCurrentPage: (page) => {

            dispatch(setCurrentPageAC(page));
        }

        ,
        setTotalUsersCount: (totalUserCount) => {

            dispatch(setTotalUsersCountAC(totalUserCount));
        }

    }

}
export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);
