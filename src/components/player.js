import './player.styl';
import { Component, PropTypes } from 'react';

export default class Player extends Component {
  render() {
    return (
      <div className='player'>
        <div className={classnames(`gesture-${this.props.gesture}`)}></div>
        <div className='winner'>{this.props.isWinner ? 'Winner!!' : ''}</div>
      </div>
    );
  }
}
