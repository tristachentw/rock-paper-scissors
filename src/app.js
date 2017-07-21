import './app.styl';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';
import Player from './components/player';

class App extends Component {
  componentWillMount() {
    this.props.actions.newGame();
  }

  handleClick = e => {
    switch (this.props.game.status) {
      case 'new': //start round1
      case 'stop':
        this.props.actions.startGame();
        this.timerID = setInterval(() => {
          this.props.actions.throwingGesture();
        }, 50);
        break;
      case 'start': //stop game
        clearInterval(this.timerID);
        this.props.actions.stopGame();
        break;
      case 'end': //new game
        this.props.actions.newGame();
        break;
    }
  }

  render() {
    //status: new, end, start, stop
    let btnText = '';
    switch (this.props.game.status) {
      case 'new':
      case 'stop':
        btnText = `Round ${this.props.game.round+1}`;
        break;
      case 'start':
        btnText = 'STOP';
        break;
      case 'end':
        btnText = 'NEW';
        break;
    }
    const record = this.props.players.map(p => p.wins);
    return (
      <div className={classnames('game', this.props.game.status, `r-${record.join('-')}`)}>
        <div>
          {this.props.players.map((p, i) => {
            return <Player key={`player-${i}`} {...p}></Player>;
          })}
        </div>
        <button className={classnames('button')} onClick={this.handleClick}>
          {btnText}
        </button>
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
