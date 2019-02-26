
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
import history from '../history';

// Google Authenticate
//=======================================================
export const setSignIn = userId => ({

    type: SIGN_IN,
    payload: userId 
});

export const setSignOut = () => ({ type: SIGN_OUT });
//=======================================================

// Call to API
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

    // Programmatically navigate user back to root route
    history.push('/');
};

// SHOW
export const fetchStream = id => async dispatch => {

    const response = await streams.get(`/streams/${id}`);

    dispatch({ type: FETCH_STREAM, payload: response.data });
};

// EDIT
// changed from put to patch request
// put requests update all the record's properties
// patch requests update only some specified properties of a record
export const editStream = (id, updateValues) => async dispatch => {

    const response = await streams.patch(`/streams/${id}`, updateValues);

    dispatch({ type: EDIT_STREAM, payload: response.data });
    history.push('/');
};

// REMOVE
export const deleteStream = id => async dispatch => {

    const response = await streams.delete(`/streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id });
    history.push('/');
};