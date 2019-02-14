
import streams from '../api/streams';
import { SIGN_IN, SIGN_OUT } from './types';

export const setSignIn = userId => ({

    type: SIGN_IN,
    payload: userId 
});

export const setSignOut = () => ({ type: SIGN_OUT });

export const createStream = formValues => async dispatch => {

    streams.post('/streams/', formValues);
};