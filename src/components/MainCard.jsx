import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function MainCard({ post }) {

    const fecha = ((date) => {
        const fecha = new Date(date)
        return `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`
    })(post.publishDate);

    return (
        <Container className='MainCard'>
            <Row>
                <Col className='MainCard-Header' sm={6}>
                    <Row>
                        <h1>
                            {post.text}
                        </h1>
                    </Row>
                    <Row>
                        <div className='MainCard-OwnerAvatar'>
                            <img src={post.owner.picture} alt={post.owner.firstName} />
                        </div>
                    </Row>
                    <Row>
                        <div className='MainCard-Owner'>
                            {post.owner.firstName} {post.owner.lastName}
                        </div>
                    </Row>
                    <Row>
                        <div className='MainCard-Tags'>
                            {post.tags.map((tag, i) => {
                                if (!tag) return null;
                                const text = tag.trim();
                                return text !== '' ? (
                                    <button key={`Tag-${i}`} className='button Tag'>{text}</button>
                                ) : null
                            })}
                        </div>
                    </Row>
                </Col>
                <Col className='MainCard-Image' sm={6}>
                    <img src={post.image} alt={post.text} />
                </Col>
            </Row>
            <Row>
                <div className='MainCard-Footer'>
                    <div className='MainCard-Date'>
                        {fecha}
                    </div>
                    <div className='MainCard-Likes'>
                        {post.likes} Likes
                    </div>
                    <div className='MainCard-Button'>
                        <a href='#' className='button'>Leer más</a>
                    </div>
                </div>

            </Row>
        </Container>
    )
}

export default MainCard