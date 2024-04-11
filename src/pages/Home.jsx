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

function Home() {
    const [posts, setPosts] = useState([])
    const [tag, setTag] = useState('')
    const [page, setPage] = useState(0)

    //TODO: Fetch posts from API with environment variable
    useEffect(() => {
        const apiUrl = `${tag && tag != '' ?
            `https://dummyapi.io/data/v1/tag/${tag}/post` :
            'https://dummyapi.io/data/v1/post'}`
        axios.get(`${apiUrl}?limit=20&page=${page}`, {
            headers: {
                'app-id': '6616e3c08d6bd03efdbc907e'
            }
        })
            .then(res => {
                setPosts([...posts, ...res.data.data])
            })
    }, [tag, page]);

    const tagHandler = (tag) => {
        setTag(tag)
    }

    return (
        <div className='Home'>
            <Tags onSelectedTag={tagHandler} />
            {posts.length > 0 ? <>
                <MainCard key={posts[0].id} post={posts[0]} />
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                >
                    {posts.slice(1, posts.length > 20 ? 20 : posts.length).map(post => (
                        <SwiperSlide key={post.id}>
                            <Card post={post} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                {
                    posts.length > 20 ? posts.slice(20).map(post => (
                        <Card key={post.id} post={post} />
                    )) : null
                }
                <LoadMore loadMoreHandler={() => setPage(page + 1)} />
            </> :
                <h1>No se encontraron posts</h1>}
        </div>
    )
}

export default Home