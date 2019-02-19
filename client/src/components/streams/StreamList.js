
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends Component {

    componentDidMount() {

        this.props.fetchStreams();
    }
    renderList() {
    
        return this.props.streams.map(({ id, title, description }) => {

            return (
                <div className="item" key={id}>
                    <i className="large middle aligned icon camera" />
                    <div className="content">{title}
                        <div className="description">{description}</div>
                    </div>
                </div>
            );            
        });
    }

    render() {

        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}
// object.values takes the values stored in the state object and moves them into an array
const mapStateToProps = state => ({ streams: Object.values(state.streams) });

export default connect(mapStateToProps, { fetchStreams })(StreamList);