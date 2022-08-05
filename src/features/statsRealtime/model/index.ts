import * as statsClicks from './statsClicks';
import * as statsCount from './statsCount';
import * as statsRealtime from './statsRealtime';

export const selectors = {
  ...statsCount.selectors,
  ...statsClicks.selectors,
  ...statsRealtime.selectors,
};

export const events = {
  ...statsCount.events,
  ...statsClicks.events,
};

export const effects = {
  ...statsCount.effects,
  ...statsClicks.effects,
  ...statsRealtime.effects,
};
