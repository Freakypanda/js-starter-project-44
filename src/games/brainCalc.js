/* eslint-disable import/no-extraneous-dependencies */
import _ from 'lodash';
import game from '../index.js';

export const rules = 'What is the result of the expression?';
export const getBrainCalcTask = () => {
  const operators = ['+', '-', '*'];
  const index = _.random(0, 2, false);
  const num1 = _.random(1, 20, false);
  const num2 = _.random(1, 20, false);
  const expression = `${num1} ${operators[index]} ${num2}`;
  let answer;
  if (operators[index] === '+') answer = num1 + num2;
  else if (operators[index] === '-') answer = num1 - num2;
  else if (operators[index] === '*') answer = num1 * num2;
  return [expression, answer.toString()];
};

export default () => {
  game(getBrainCalcTask, rules);
};
