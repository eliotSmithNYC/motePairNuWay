import React from 'react';
import { removeFromFavorites } from './../../actions/AllTracksActions';

//console.log(sampleData);




const TrackFavorite = (props) => {

    const src = props.data.artworkUrl60;
    //const imageLargeURL = src
    const removeTrack = ({index, dispatch}) => {
        dispatch( removeFromFavorites(index) );
    }

    return (
        
        <div className='track-favorite'>
            <div onClick={() => {removeTrack(props)}}>X</div>
            <img className='album-cover' role="presentation" src={src}/>
            <h2>{props.data.trackName}</h2> 
        </div>
    );
}

export default TrackFavorite;