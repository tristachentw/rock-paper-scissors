import './player.styl';
import { Component, PropTypes } from 'react';

export default class Player extends Component {
  renderCrownIcon = i => {
    return (
      <div key={i} className='icon-crown'></div>
    );
  }

  render() {
    const recordElem = [];
    for (let i = this.props.wins; i > 0; i--) {
      recordElem[recordElem.length] = this.renderCrownIcon(i);
    }
    return (
      <div className='player'>
        <div className='records'>{recordElem}</div>
        <div className={classnames(`gesture-${this.props.gesture}`)}></div>
      </div>
    );
  }
}
