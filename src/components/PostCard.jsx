import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function PostCard({ post }) {

    return (
        <Container className='Card'>
            <Row>
                <Col className='Card-Header' sm={6}>
                    {post.text}
                </Col>
                <Col className='Card-Image' sm={6}>
                    <img src={post.image} alt={post.text} />
                </Col>
            </Row>
            <Row>
                <div className='Card-Footer'>
                    <div className='Card-Date'>
                        {post.publishDate}
                    </div>
                    <div className='Card-Likes'>
                        {post.likes} Likes
                    </div>
                    <div className='Card-Owner'>
                        {post.owner.firstName} {post.owner.lastName}
                    </div>
                    <div className='Card-Button'>
                        <button>Read more</button>
                    </div>
                </div>

            </Row>
        </Container>
    )
}

export default PostCard