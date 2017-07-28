import './app.styl';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import gameSetting from './app.json';
import * as actions from './actions';
import Player from './components/player';

class App extends Component {
  componentWillMount() {
    this.props.actions.newGame();
  }

  handleClick = e => {
    switch (this.props.game.status) {
      case 'new': //start game
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

  renderToggleStatus = () => {
    switch (this.props.game.status) {
      case 'new':
      case 'stop':
        return `Round ${this.props.game.round+1}`;
      case 'start':
        return 'STOP';
      case 'end':
        return 'NEW';
    }
  }

  render() {
    const {game, players} = this.props;
    let sub = 0;
    if (game.status === 'end') {
      sub = players[0].isWinner ? gameSetting.need_wins : -1 * gameSetting.need_wins;
    } else {
      sub = players.length && players[0].wins - players[1].wins;
    }
    return (
      <div className={classnames('game', game.status, `battle-${sub}`)}>
        <div className='players'>
          {players.map((p, i) => <Player key={`player-${i}`} {...p}></Player>)}
        </div>
        <button className='button status-button' onClick={this.handleClick}>
          {this.renderToggleStatus()}
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
