
import _ from 'lodash';
import React, { Component } from 'react';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
import { connect } from 'react-redux';

class StreamEdit extends Component {

    componentDidMount() {

        this.props.fetchStream(this.props.match.params.id);
    }
    onSubmit = formValues => {

        console.log(formValues)
    }
    render() {
        return (
            <div>
                <h3>Edit Stream</h3>
                <StreamForm 
                    initialValues={_.pick(this.props.stream, 'title', 'description')} 
                    onSubmit={this.onSubmit} 
                />
            </div>
        );
    }
}

// ownProps object is the same as props object available in the StreamEdit component
const mapStateToProps = (state, ownProps) => ({ stream: state.streams[ownProps.match.params.id] });

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);