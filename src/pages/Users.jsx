import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import axios from 'axios'
import UserCard from '../components/UserCard'
import LoadMore from '../components/LoadMore';

function Users() {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(0)

    useEffect(() => {
        axios.get(`https://dummyapi.io/data/v1/user?limit=10&page=${page}`, {
            headers: {
                'app-id': '6616e3c08d6bd03efdbc907e'
            }
        })
            .then(res => {
                setUsers([...users, ...res.data.data])
            })
    }, [page])

    return (
        <Container className='Users'>
            {users.length > 0 ? users.map(user => (
                <UserCard key={user.id} user={user} />
            )) : null}
            <LoadMore loadMoreHandler={() => setPage(page + 1)} />
        </Container>
    )
}

export default Users