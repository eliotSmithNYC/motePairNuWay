import React from 'react';
import { addToFavorites } from './../../actions/AllTracksActions';

//console.log(sampleData);




const Track = (props) => {
    //console.log(props.data);
    const trackClicked = ()  => {
        //console.log('im clicked');
        props.dispatch( addToFavorites(props.data) )
    }
    //debugger;
    const src = props.data.artworkUrl100;
    const click = props.type === 'favorite' ? null : trackClicked;
    //const imageLargeURL = src

    return (
        
        <div className='Track' onClick={click}>
            <img className='album-cover' role="presentation" src={src}/>
            <h2>{props.data.trackName}</h2> 
        </div>
    );
}

export default Track;