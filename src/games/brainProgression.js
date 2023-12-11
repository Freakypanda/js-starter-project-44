/* eslint-disable import/no-extraneous-dependencies */
import _ from 'lodash';

export const rules = 'What number is missing in the progression?';
export const brainProgression = () => {
  let number = _.random(1, 100, false);
  const diff = _.random(1, 10, false);
  const index = _.random(0, 9, false);
  const progression = [number];
  for (let i = 1; i < 10; i += 1) {
    number += diff;
    progression.push(number);
  }
  const answer = progression[index].toString();
  progression[index] = '..';
  const question = progression.join(' ');
  return [question, answer];
};
