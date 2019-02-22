
import React from 'react';
import { connect } from 'react-redux';

const StreamEdit = (props) => {

    console.log(props)
    return <div>StreamEdit</div>;
}

// ownProps object is the same as props object available in the StreamEdit component
const mapStateToProps = (state, ownProps) => ({ stream: state.streams[ownProps.match.params.id] });

export default connect(mapStateToProps)(StreamEdit);