import React, { useEffect } from 'react'
import MainCard from '../components/MainCard';
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Card from '../components/Card';

function Home() {
    const [posts, setPosts] = React.useState([])
    const [tags, setTags] = React.useState([])

    //TODO: Fetch posts from API with environment variable
    useEffect(() => {
        axios.get('https://dummyapi.io/data/v1/post', {
            headers: {
                'app-id': '6616e3c08d6bd03efdbc907e'
            }
        })
            .then(res => {
                setPosts(res.data.data)
            })
        axios.get('https://dummyapi.io/data/v1/tag', {
            headers: {
                'app-id': '6616e3c08d6bd03efdbc907e'
            }
        })
            .then(res => {
                setTags(res.data.data)
            })
    }, []);

    console.log(posts.length)
    return (
        <div className='Home'>
            {posts.length > 0 ? <>
                <MainCard key={posts[0].id} post={posts[0]} />
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    bulletClass='Bullet'
                >
                    {posts.slice(1).map(post => (
                        <SwiperSlide key={post.id}>
                            <Card post={post} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </> :
                <h1>Cargando...</h1>}
        </div>
    )
}

export default Home