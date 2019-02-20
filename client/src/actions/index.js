
import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM, 
    DELETE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM  
} from './types';
import streams from '../api/streams';

// Google Authenticate
//=======================================================
export const setSignIn = userId => ({

    type: SIGN_IN,
    payload: userId 
});

export const setSignOut = () => ({ type: SIGN_OUT });
//=======================================================

// INDEX
export const fetchStreams = () => async dispatch => {

    const response = await streams.get('/streams');

    dispatch({ type: FETCH_STREAMS, payload: response.data });
};

// NEW
export const createStream = formValues => async (dispatch, getState) => {

    const { userId } = getState().auth;
    const response = await streams.post('/streams', { ...formValues, userId });

    dispatch({ type: CREATE_STREAM, payload: response.data });
};

// SHOW
export const fetchStream = id => async dispatch => {

    const response = await streams.get(`/streams/${id}`);

    dispatch({ type: FETCH_STREAM, payload: response.data });
};

// EDIT
export const editStream = (id, updateValues) => async dispatch => {

    const response = await streams.put(`/streams${id}`, updateValues);

    dispatch({ type: EDIT_STREAM, payload: response.data });
};

// REMOVE
export const deleteStream = id => async dispatch => {

    const response = await streams.delete(`/streams${id}`);

    dispatch({ type: DELETE_STREAM, payload: id });
};