import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {

    const [gif, setGif] = useState('');

    const fetchGif = async () => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data } = await Axios.get(url);
        
        const imageSrc = data.data.images.downsized_large.url;
        setGif(imageSrc)
    }   

    useEffect(() => {
            fetchGif();
    }, [])

    const handleClick = () => {
        fetchGif();
    }

    return (
        <div classname="container">
            <h1>Random gif</h1>
            <img width="500" src={gif} alt="Random gif" />
            <button onClick={handleClick}>Click for new</button>
        </div>
    )
}

export default Random