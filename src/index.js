import readlineSync from 'readline-sync';

export default (gameName, userName) => {
  const rules = gameName()[0];
  console.log(rules);
  let count = 0;
  while (count < 3) {
    const [, question, answer] = [...gameName()];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
      count += 1;
    } else console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${userName}!`);
  }
  console.log(`Gongratulations, ${userName}!`);
};
