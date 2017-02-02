import React from 'react';
import Track from './Track';

//console.log(sampleData);


const renderTracks = (props) => {
    //console.log(data);

    //debugger;
    return(
        props.data.map( (track, index) => {
            return (
                <li key={index}>
                    <Track {...props} index={index} data={props.data[index]} />
                </li>
            )
        })
    )
}

const renderLoader = () => <h1>Loading</h1> ;

const AllTracksDisplay = (props) => {

    return (
        <div className='AllTracksDisplay'>
            {props.isLoading ? renderLoader() : <ul>{renderTracks(props)}</ul>  }
        </div>
    )
}

export default AllTracksDisplay;