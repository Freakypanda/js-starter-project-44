/* eslint-disable import/no-extraneous-dependencies */
import _ from 'lodash';

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const brainPrime = () => {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
  const question = _.random(2, 50, false);
  let answer;
  if (primes.includes(question)) answer = 'yes';
  else answer = 'no';
  return [question, answer];
};
