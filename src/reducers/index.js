import { combineReducers } from 'redux';

const tradeEntryReducer = (tradeEntry = null, action) => {
  if (action.type === 'TRADE_ENTRY') {
    return action.payload;
  }

  return tradeEntry;
};

export default combineReducers({
  tradeEntry: tradeEntryReducer,
});
