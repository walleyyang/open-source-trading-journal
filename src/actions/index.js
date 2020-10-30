const getTradeEntryId = () => new Date().valueOf();

export const updateTradeEntry = (tradeEntry) => ({
  type: 'TRADE_ENTRY',
  payload: {
    id: getTradeEntryId(),
    type: tradeEntry.type,
    symbol: tradeEntry.symbol,
    size: tradeEntry.size,
    entryDateTime: tradeEntry.entryDateTime,
    exitDateTime: tradeEntry.exitDateTime,
    entryPrice: tradeEntry.entryPrice,
    exitPrice: tradeEntry.exitPrice,
    setups: tradeEntry.setups,
    mistakes: tradeEntry.mistakes,
    others: tradeEntry.others,
    image: tradeEntry.image,
    scale: tradeEntry.scale,
  },
});

export const hello = () => ({
  type: 'TEST',
});
