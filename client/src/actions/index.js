
import { SIGN_IN, SIGN_OUT } from './types';
import streams from '../api/streams';

export const setSignIn = userId => ({

    type: SIGN_IN,
    payload: userId 
});

export const setSignOut = () => ({ type: SIGN_OUT });

// CREATE
export const createStream = formValues => async dispatch => {

    streams.post('/streams', formValues);
};