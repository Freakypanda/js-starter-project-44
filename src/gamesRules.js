import _ from 'lodash';

export const brainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const number = _.random(1, 100, false);
  let answer;
  if (number % 2 === 0) answer = 'yes';
  else answer = 'no';
  return [rules, number, answer];
};
