import React from 'react';
import TrackFavorite from './TrackFavorite';

//console.log(sampleData);


const renderFaves = (props) => {
    //console.log(data);

    if(!props.data) return renderLoader();
    //debugger;
    return(
        props.data.map( (track, index) => {
            //debugger;
            return (
                <li key={index}>
                    <TrackFavorite {...props} index={index} data={props.data[index]} />
                </li>
            )
        })
    )
}

const renderLoader = () => <h1>Loading</h1> ;
const FavoriteTracksDisplay = (props) => {

    //debugger;
    return (
        <div className='favorite-tracks-diplay'>
            <ul>{renderFaves(props)}</ul>
        </div>
    )
}

export default FavoriteTracksDisplay;