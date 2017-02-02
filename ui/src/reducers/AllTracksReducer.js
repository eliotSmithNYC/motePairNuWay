const defaultState = {
    isLoading: false,
    data: []
};

const AllTrackReducer = (state=defaultState, action ) => {
    //debugger;
    switch(action.type) {
        case 'FETCH_INITIAL_DATA_START' :
            console.log('herere');
            return Object.assign({}, state, {isLoading: true});

        case 'FETCH_INITIAL_DATA_COMPLETE' :
            //debugger;
            return Object.assign({}, {data:action.payload.results}, {isLoading: false});

        default:
            return state;
    
    }
}

export default AllTrackReducer;