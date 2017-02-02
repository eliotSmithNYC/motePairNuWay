import React, {Component} from 'react';
import AllTracksDisplay from './../presentational/AllTracksDisplay';
import {connect} from 'react-redux';

import * as actions from './../../actions/AllTracksActions';

class AllPhotosContainer extends Component {

    componentDidMount() {
        // debugger;
        this.props.dispatch(actions.fetchInitialData());
    }

    render() {
        //console.log(this.props.data);
        return( <AllTracksDisplay {...this.props} data={this.props.data} isLoading={this.props.isLoading}/> );
    }
}

function mapStateToProps(state) {
   //debugger
    return {
        data: state.AllTracksReducer.data,
        isLoading: state.AllTracksReducer.isLoading
    }
}

export default connect(mapStateToProps)(AllPhotosContainer);