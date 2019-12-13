import React from 'react';
import {connect} from 'react-redux';
import {getBeer} from './actions/actions'

//import actions

import './App.css';

const App = (props) => {


  return (
    <div>
      <h1>Beer is Awesomeness</h1>
      {!props.beer && !props.isFetching && <p>Go ahead! Fetch a beer</p>}
      {props.isFetching && <p>Fetching Beer...</p>}
      {props.beer && <p>{props.beer.name}</p>}
      <button onClick={props.getBeer}>Fetch!</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    //reducer state
    beer: state.beer,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  {getBeer}
)(App);
