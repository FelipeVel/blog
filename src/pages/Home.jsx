import React, { useEffect } from 'react'
import PostCard from '../components/PostCard';
import axios from 'axios'

function Home() {

    const [posts, setPosts] = React.useState([])

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
    }, []);

    console.log(posts)

    return (
        <div className='Home'>
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    )
}

export default Home