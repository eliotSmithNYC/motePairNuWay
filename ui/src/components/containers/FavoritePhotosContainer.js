import React, {Component} from 'react';
import {connect} from 'react-redux';

import FavoriteTracksDisplay from './../presentational/FavoriteTracksDisplay';
import AllTracksDisplay from './../presentational/AllTracksDisplay';

import * as actions from './../../actions/AllTracksActions';

class FavoritePhotosContainer extends Component {

    componentDidMount() {
        // debugger;
        //this.props.dispatch(actions.fetchInitialData());
    }

    render() {
        //console.log(this.props.data);
        return ( 
            <FavoriteTracksDisplay {...this.props} data={this.props.data}/>
        );
    }
}

function mapStateToProps(state) {
   //debugger
    return {
        data: state.FavoriteTracksReducer
    }
}

export default connect(mapStateToProps)(FavoritePhotosContainer);