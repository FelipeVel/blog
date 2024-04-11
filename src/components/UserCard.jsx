import React from 'react'
import { Row, Col } from 'react-bootstrap';

function UserCard({ user }) {
    return (
        <Col className='UserCard' sm={5}>
            <Row>
                <Col className='UserCard-Image' sm={3}>
                    <img src={user.picture} alt={user.firstName} />
                </Col>
                <Col sm={9} className='UserCard-Header'>
                    <h1>
                        {user.title} {user.firstName} {user.lastName}
                    </h1>
                </Col>

            </Row>
        </Col>
    )
}

export default UserCard