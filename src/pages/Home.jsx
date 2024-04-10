import React, { useEffect, useState } from 'react'
import MainCard from '../components/MainCard';
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Card from '../components/Card';
import 'swiper/css';
import 'swiper/css/pagination';
import Tags from '../components/Tags';

function Home() {
    const [posts, setPosts] = useState([])
    const [tag, setTag] = useState('')

    //TODO: Fetch posts from API with environment variable
    useEffect(() => {
        axios.get(`${tag && tag != '' ?
            `https://dummyapi.io/data/v1/tag/${tag}/post` :
            'https://dummyapi.io/data/v1/post'}`, {
            headers: {
                'app-id': '6616e3c08d6bd03efdbc907e'
            }
        })
            .then(res => {
                setPosts(res.data.data)
            })
    }, [tag]);

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
                    {posts.slice(1).map(post => (
                        <SwiperSlide key={post.id}>
                            <Card post={post} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </> :
                <h1>No se encontraron posts</h1>}
        </div>
    )
}

export default Home