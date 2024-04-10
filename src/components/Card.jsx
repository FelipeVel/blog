import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function Card({ post }) {

    const fecha = ((date) => {
        const fecha = new Date(date)
        return `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`
    })(post.publishDate);

    return (
        <Container className='Card'>
            <Row>
                <Col className='Card-Image'>
                    <img src={post.image} alt={post.text} />
                </Col>
            </Row>
            <Row>
                <Col className='Card-Header'>
                    <h1>
                        {post.text}
                    </h1>
                </Col>
            </Row>
            <div className='Card-Footer'>
                <Row>
                    <Col className='Card-Date'>
                        {fecha}
                    </Col>
                    <Col className='Card-Likes'>
                        {post.likes} Likes
                    </Col>
                </Row>
                <Row>
                    <Col className='Card-Owner'>
                        {post.owner.firstName} {post.owner.lastName}
                    </Col>
                    <Col className='Card-Button'>
                        <a className='button' href='#'>Leer más</a>
                    </Col>
                </Row>
            </div>

        </Container>
    )
}

export default Card