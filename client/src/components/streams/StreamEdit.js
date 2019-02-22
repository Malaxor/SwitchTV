
import React, { Component } from 'react';
import { fetchStream } from '../../actions';
import { connect } from 'react-redux';

class StreamEdit extends Component {

    componentDidMount() {

        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        return <div>Edit Stream</div>
    }
}

// ownProps object is the same as props object available in the StreamEdit component
const mapStateToProps = (state, ownProps) => ({ stream: state.streams[ownProps.match.params.id] });

export default connect(mapStateToProps, { fetchStream })(StreamEdit);