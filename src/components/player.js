import './player.styl';
import { Component, PropTypes } from 'react';

export default class Player extends Component {
  renderCrown = i => {
    return (
      <div key={i} className='icon-crown'></div>
    );
  }
  render() {
    let crownElem = [];
    for (let i = 0; i < this.props.wins; i++) {
      crownElem.push(this.renderCrown(i));
    }
    return (
      <div className='player'>
        <div className={classnames(`gesture-${this.props.gesture}`)}></div>
        <div className='crows'>{crownElem}</div>
      </div>
    );
  }
}
