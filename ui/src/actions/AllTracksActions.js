
import fetch from 'isomorphic-fetch';
const $ = require('jquery');

const FETCH_INITIAL_DATA_START =  {
    type: 'FETCH_INITIAL_DATA_START'
}


const initialDataFetched = (payload) => {
    return {
        type: 'FETCH_INITIAL_DATA_COMPLETE',
        payload
    }
}


export const addToFavorites = (payload) => {
    return (
        {
            type: 'ADD_TO_FAVORITES',
            payload
        }
    )
}

export const removeFromFavorites = (payload) => {
    return (
        {
            type: 'REMOVE_FROM_FAVORITES',
            payload
        }
    )
}

export const searchByName = (name) => {
    return (dispatch) => {
        //debugger;
        dispatch(FETCH_INITIAL_DATA_START);

        $.ajax({
            url: `https://itunes.apple.com/search?term=${name}`,
            // The name of the callback parameter
            jsonp: "callback",
            // Tell jQuery we're expecting JSONP
            dataType: "jsonp",
            // Work with the response
            success: function( response ) {
                //console.warn( response ); // server response
                dispatch(initialDataFetched(response));
            }
        });
   }
}



export const fetchInitialData = () => {
   return (dispatch) => {
        //debugger;
        dispatch(searchByName('trailer+park+boys'));
   }
}






