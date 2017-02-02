//root reducer
import { combineReducers } from 'redux';
import AllTracksReducer from './AllTracksReducer';
import FavoriteTracksReducer from './FavoriteTracksReducer';


const rootReducer = combineReducers({
    AllTracksReducer,
    FavoriteTracksReducer,
})

export default rootReducer;




