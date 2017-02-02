const defaultState = [];

const FavoriteTracksReducer = (state=defaultState, action ) => {
    
    switch(action.type) {
        case 'ADD_TO_FAVORITES' :
            if(state.indexOf(action.payload) === -1) {
                return [...state, action.payload];
            }
            return state;

        case 'REMOVE_FROM_FAVORITES' : 
            const newState = [...state];
            newState.splice(action.payload, 1);
            return newState;

        default:
            return state;
    
    }
}

export default FavoriteTracksReducer;