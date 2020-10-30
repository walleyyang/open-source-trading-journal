import React from 'react';
import { connect } from 'react-redux';
import { updateTradeEntry } from '../../actions';

import styles from './TradeEntry.module.css';

const mapStateToProps = (state) => {
  console.log(state.tradeEntry);

  return state;
};

const TradeEntry = (state) => (
  <div className={styles.container}>
    <div className={styles.flexRowContainer}>
      <label htmlFor="type">Type</label>
      <input type="radio" id="shares" name="type" value="shares" />
      <label htmlFor="shares">Shares</label>
      <input type="radio" id="contracts" name="type" value="contracts" />
      <label htmlFor="contracts">Contracts</label>
    </div>
    <div className={styles.flex}>
      <div className={styles.flexColumnContainer}>
        <label htmlFor="symbol">Symbol</label>
        <input type="text" id="symbol" />
        <label htmlFor="entry-datetime">Entry DateTime</label>
        <input type="datetime-local" id="entry-datetime" />
        <label htmlFor="exit-datetime">Exit DateTime</label>
        <input type="datetime-local" id="exit-datetime" />
      </div>
      <div className={styles.flexColumnContainer}>
        <label htmlFor="size">Size</label>
        <input type="number" id="symbol" />
        <label htmlFor="entry-price">Entry Price</label>
        <input type="number" id="entry-price" />
        <label htmlFor="exit-price">Exit Price</label>
        <input type="number" id="exit-price" />
      </div>
    </div>
    <div>
      <label htmlFor="setups">Setups</label>
      <select id="setups">
        <option>Breakout</option>
        <option>Flag</option>
        <option>Triangle</option>
      </select>
      <label htmlFor="mistakes">Mistakes</label>
      <select id="mistakes">
        <option>FOMO</option>
        <option>False Breakout</option>
        <option>Averaged Down</option>
      </select>
      <label htmlFor="others">Others</label>
      <select id="others">
        <option>Choppy</option>
        <option>Lunchtime</option>
        <option>Revenge</option>
      </select>
      <button type="button">Upload Image</button>
    </div>
    <div>Display Tags Here</div>
    <div className={styles.flexEnd}>
      <button type="button" onClick={() => state.updateTradeEntry()}>Update</button>
      <button type="button">Cancel</button>
      <button type="button">Subtract Size</button>
      <button type="button">Add Size</button>
      <button type="button">Close Trade</button>
    </div>
  </div>
);

export default connect(mapStateToProps, { updateTradeEntry })(TradeEntry);
