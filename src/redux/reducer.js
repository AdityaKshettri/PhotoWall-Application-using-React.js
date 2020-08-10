import {combineReducers} from 'redux';

import Posts from '../data/posts';

function comments(state = [], action) {
    switch(action.type) {
        case 'REMOVE_COMMENT':
            return state;
        case 'ADD_COMMENT':
            return [...state, action.comment];
        default:
            return state;
    }
}

function posts(state = Posts, action) {
    switch(action.type) {
        case 'REMOVE_POST':
            return [...state.slice(0, action.index), ...state.slice(action.index+1)];
        case 'ADD_POST':
            return [...state, action.post];
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    posts, 
    comments
});

export default rootReducer;