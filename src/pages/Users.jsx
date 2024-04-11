import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';
import axios from 'axios'
import UserCard from '../components/UserCard'
import LoadMore from '../components/LoadMore';

function Users() {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(0)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_DUMMY_API_BASE_URL}/user?limit=10&page=${page}`, {
            headers: {
                'app-id': process.env.REACT_APP_DUMMY_APP_ID
            }
        })
            .then(res => {
                setUsers([...users, ...res.data.data])
            })
    }, [page])

    return (
        <Container className='Users'>
            <Row className='g-4'>
                {users.length > 0 ? users.map(user => (
                    <UserCard key={user.id} user={user} />
                )) : null}
            </Row>
            <LoadMore loadMoreHandler={() => setPage(page + 1)} />
        </Container>
    )
}

export default Users