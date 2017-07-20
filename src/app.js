import './app.styl';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';
import Page from './components/page';

class App extends Component {
  handleClick = e => {
    this.props.actions.showPage('One');
  }

  render() {
    if (this.props.page) {
      return (
        <div className='app'>
          <h1>{`Page ${this.props.page}`}</h1>
        </div>
      );
    } else {
      return (
        <div className='app'>
          <h1>React</h1>
          <button className='btn-next' onClick={this.handleClick}>Next</button>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
