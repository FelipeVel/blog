import React from 'react'

function LoadMore({ loadMoreHandler }) {
    return (
        <button className='LoadMore' onClick={loadMoreHandler}>
            Cargar más
        </button>
    )
}

export default LoadMore