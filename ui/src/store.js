import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//const logger = createLogger();
import RootReducer from './reducers';


export default createStore(
    RootReducer, 
    applyMiddleware(thunk, logger())
);