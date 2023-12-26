import readlineSync from 'readline-sync';
import greetUser from './cli.js';

export default (task, rules) => {
  const userName = greetUser();
  console.log(rules);
  let count = 0;
  while (count < 3) {
    const [question, answer] = [...task()];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
