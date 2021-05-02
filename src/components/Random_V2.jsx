import React from 'react';
import useGif from '../useGif'

const Random = () => {

    const {gif, fetchGif} = useGif();


    return (
        <div classname="container">
        <h1>Random gif</h1>
        <img width="500" src={gif} alt="Random gif" />
        <button onClick={fetchGif}>Click for new</button>
    </div>
    )
}

export default Random