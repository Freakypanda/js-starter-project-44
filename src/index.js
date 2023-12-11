import readlineSync from 'readline-sync';
import greetUser from './cli.js';

export default (gameName, rules) => {
  const userName = greetUser();
  console.log(rules);
  let count = 0;
  while (count < 3) {
    const [question, answer] = [...gameName()];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return;
    }
    count += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
