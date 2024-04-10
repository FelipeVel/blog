import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MainCard({ post, className }) {

    const fecha = ((date) => {
        const fecha = new Date(date)
        return `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`
    })(post.publishDate);

    return (
        <Container className={`MainCard ${className}`}>
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
                        <Link to={`/${post.id}`} className='button'>Leer más</Link>
                    </div>
                </div>

            </Row>
        </Container>
    )
}

export default MainCard