
import { 
    CREATE_STREAM, 
    DELETE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM  
} from '../actions/types';

export default (state = {}, action) => {

    switch(action.type) {

        case FETCH_STREAM || CREATE_STREAM || EDIT_STREAM:
        return { ...state, [action.payload.id]: action.payload };
        
        default:
        return state;
    }
}