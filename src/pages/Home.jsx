import React, { useEffect, useState } from 'react'
import MainCard from '../components/MainCard';
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Card from '../components/Card';
import 'swiper/css';
import 'swiper/css/pagination';
import Tags from '../components/Tags';
import LoadMore from '../components/LoadMore';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    const [posts, setPosts] = useState([])
    const [tag, setTag] = useState('')
    const [page, setPage] = useState(0)

    //TODO: Fetch posts from API with environment variable
    useEffect(() => {
        const apiUrl = `${tag && tag != '' ?
            `${process.env.REACT_APP_DUMMY_API_BASE_URL}/tag/${tag}/post` :
            `${process.env.REACT_APP_DUMMY_API_BASE_URL}/post`}`
        axios.get(`${apiUrl}?limit=20&page=${page}`, {
            headers: {
                'app-id': process.env.REACT_APP_DUMMY_APP_ID
            }
        })
            .then(res => {
                setPosts([...posts, ...res.data.data])
            })
    }, [tag, page]);

    const tagHandler = (tag) => {
        setPosts([])
        setPage(0)
        setTag(tag)
    }

    return (
        <div className='Home'>
            <Tags selectedTag={tag} onSelectedTag={tagHandler} />
            {posts.length > 0 ? <>
                <MainCard key={posts[0].id} post={posts[0]} />
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className='Home-Swiper'
                >
                    {posts.slice(1, posts.length > 20 ? 20 : posts.length).map(post => (
                        <SwiperSlide key={post.id}>
                            <Card post={post} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                {
                    posts.length > 20 ?
                        <Container>
                            <Row className='g-4'>
                                {posts.slice(20).map(post => (
                                    <Col sm={6} md={3}>
                                        <Card key={post.id} post={post} />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                        : null
                }
                <LoadMore loadMoreHandler={() => setPage(page + 1)} />
            </> :
                <h1>No se encontraron posts</h1>}
        </div>
    )
}

export default Home