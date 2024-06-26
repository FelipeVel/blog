import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Tags({ onSelectedTag }) {
    const [tags, setTags] = useState([])

    useEffect(() => {
        axios.get(`https://dummyapi.io/data/v1/tag`, {
            headers: {
                'app-id': '6616e3c08d6bd03efdbc907e'
            }
        })
            .then(res => {
                setTags(res.data.data)
            })
    }, []);

    return (
        <div className='Tags'>
            {tags.map((tag, i) => {
                if (!tag) return null;
                const text = tag.trim();
                return text !== '' ? (
                    <button key={`Tag-${i}`} className='button Tag' onClick={() => onSelectedTag(text)}>{text}</button>
                ) : null
            })}
        </div>
    )
}

export default Tags