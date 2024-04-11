import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import MainCard from '../components/MainCard';

function Post() {
    const { postId } = useParams();
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_DUMMY_API_BASE_URL}/post/${postId}`, {
            headers: {
                'app-id': process.env.REACT_APP_DUMMY_APP_ID
            }
        })
            .then(res => {
                setPost(res.data);
            })
        axios.get(`${process.env.REACT_APP_DUMMY_API_BASE_URL}/post/${postId}/comment`, {
            headers: {
                'app-id': process.env.REACT_APP_DUMMY_APP_ID
            }
        })
            .then(res => {
                setComments(res.data.data);
            })
    }, []);

    if (!post || !post.id) return <h1>Cargando...</h1>;

    return (
        <Container className='Post'>
            <MainCard post={post} className='MainCard_nobutton' />
            <div className='Post-Comments'>
                <h2>Comentarios</h2>
                {comments && comments.map(comment => (
                    <div key={comment.id} className='Comment'>
                        <h3>{comment.owner.firstName} {comment.owner.lastName}</h3>
                        <p>{comment.message}</p>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Post