/* eslint-disable import/no-extraneous-dependencies */
import _ from 'lodash';
import game from '../index.js';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
export const getBrainEvenTask = () => {
  const number = _.random(1, 100, false);
  let answer;
  if (number % 2 === 0) answer = 'yes';
  else answer = 'no';
  return [number, answer];
};

export default () => {
  game(getBrainEvenTask, rules);
};
