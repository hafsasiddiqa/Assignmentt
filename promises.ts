// Question 2: Promises: building a simple quiz app...

import chalk from 'chalk';

function fetchQuestion(): Promise<string> {
  return new Promise((resolve) => {
    let questions: string[] = [
      'Pink Ladies and Granny Smiths are types of what fruit? Ans = Apples',
      'What country drinks the most coffee? Ans = Finland',
      'What is the largest planet in our solar system? Ans = Jupiter',
      'What is the tallest type of tree? Ans = Redwoods',
    ];
    let Index: number = Math.floor(Math.random() * questions.length);
    let Question: string = questions[Index];
    resolve(chalk.magenta(Question));
  });
}

fetchQuestion().then((question: string) => {
  console.log(question);
});


