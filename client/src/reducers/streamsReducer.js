import _ from 'lodash';
import { CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM  } from '../actions/types';

// const arrayToObject = (arr, keyField) =>
//   Object.assign({}, ...arr.map(item => ({[item[keyField]]: item})));
//   const streamsObject = arrayToObject(action.payload, 'id');

export default (state = {}, action) => {
    switch(action.type){
        case CREATE_STREAM:
        case FETCH_STREAM:
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload }; 
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        case DELETE_STREAM:
            return { ...state, [action.payload]: undefined };
        default:
            return state;
    }
}
