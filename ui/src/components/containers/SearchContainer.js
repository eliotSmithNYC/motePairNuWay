import React, {Component} from 'react';
import AllTracksDisplay from './../presentational/AllTracksDisplay';
import {connect} from 'react-redux';

import * as actions from './../../actions/AllTracksActions';

class SearchContainer extends Component {

    componentDidMount() {

    }

    onInput(event) {
        const name = event.target.value === '' ? 'borat' : event.target.value;
        this.props.dispatch(actions.searchByName(name));
    }

    render() {
        return( 
            <div className='search-container'>
                <input placeholder='trailer park boys' onChange={this.onInput.bind(this)}/>
            </div>
        );
    }
}

export default connect()(SearchContainer);