import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserCard from '../ui/UserCard';

function UserList() {

    const url = 'http://localhost:8080/api/user/list';

    const [userList, setUserList] = useState();

    useEffect(() => {
        axios.get(url)
        .then(Response => {
            // console.log(Response.data);
            setUserList(Response.data);
        });
    }, [setUserList])

    return ( 
        <div className='userList'>
            <div className='container'>
                <div className='userList-wrapper'>
                    <h2 className='page-title'>목록</h2>
                    {
                        userList &&
                        userList.map(user => (
                            <UserCard user={user} key={user.id} />
                        ))
                    }
                </div>
            </div>
        </div>
     );
}

export default UserList;