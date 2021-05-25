import { combineReducers, createStore } from "redux";
import bookReducer from './reducers/bookReducer';
import finishedBookReducer from './reducers/finishedBookReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const combineReducer = combineReducers({
    books: bookReducer,
    //finisedBooks: finishedBookReducer,
})

export const store = createStore(combineReducer, composeWithDevTools());