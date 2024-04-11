import React from 'react'
import { Row, Col } from 'react-bootstrap';

function UserCard({ user }) {
    return (
        <Row className='UserCard'>
            <Col className='UserCard-Image' sm={3}>
                <img src={user.picture} alt={user.firstName} />
            </Col>
            <Col sm={9} className='UserCard-Header'>
                <h1>
                    {user.title} {user.firstName} {user.lastName}
                </h1>
            </Col>
        </Row>
    )
}

export default UserCard