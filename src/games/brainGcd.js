/* eslint-disable import/no-extraneous-dependencies */
import _ from 'lodash';

export const rules = 'Find the greatest common divisor of given numbers.';
export const brainGcd = () => {
  let num1 = _.random(1, 20, false);
  let num2 = _.random(1, 20, false);
  const question = `${num1} ${num2}`;
  let remainder = num1;
  let answer;
  while (remainder > 0) {
    if (num1 < num2) [num1, num2] = [num2, num1];
    remainder = num1 % num2;
    answer = num2;
    num1 = remainder;
  }
  return [question, answer.toString()];
};
