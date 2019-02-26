
import React from 'react';
import Modal from '../Modal';

const StreamDelete = () => {

    const actions = (
        // React Fragment fixes styling issue: there used to be a div element in its place.
        <React.Fragment>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </React.Fragment>
    ); 

    return (
        <div>
            Stream Delete
            <Modal 
                title="Delete Stream"
                content="Are you sure you want to delete this stream?"
                actions={actions}
            />
        </div>
    )
}
export default StreamDelete;