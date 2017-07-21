import './app.styl';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';
import Player from './components/player';

const GESTURES = ['rock', 'paper', 'scissors'];

class App extends Component {
  componentWillMount() {
    this.props.actions.newGame();
  }

  handleClick = e => {
    const isPlayed = this.props.game.isPlayed;
    if (isPlayed) {
      clearInterval(this.timerID);
      this.props.actions.throwingGesture();
    } else {
      this.timerID = setInterval(() => {
        this.props.actions.throwingGesture();
      }, 50);
    }
    this.props.actions.toggleGame(!isPlayed);
  }

  render() {
    return (
      <div>
        <div>
          {this.props.players.map((p, i) => {
            return <Player key={`player${i}`} {...p}></Player>;
          })}
        </div>
        <button className={classnames('button', {'stop': this.props.game.isPlayed})} onClick={this.handleClick}>{this.props.game.isPlayed ? 'Stop' : 'Start'}</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
