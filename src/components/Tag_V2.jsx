import React, {useState} from 'react';
import useGif from '../useGif'

const Tag = () => {

    const [tag, setTag] = useState('dogs');
    const {gif, fetchGif} = useGif(tag);


    return (
        <div classname="container">
        <h1>Random {tag} gif</h1>
        <img width="500" src={gif} alt="Random gif" />
        <input value={tag} onChange={(e) => setTag(e.target.value)} />
        <button onClick={() => {fetchGif(tag)}}>Click for new</button>
    </div>
    )
}

export default Tag