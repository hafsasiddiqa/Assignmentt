// Question 3: Async/Await: Build a TypeScript function named waitAndGreet...

import chalk from 'chalk';

function wait(ht: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ht));
}

async function waitAndGreet(name: string): Promise<void> {
  await wait(3000); 
  const greeting = `Hello! How have you been? ${name}...`;
  console.log(chalk.blue(greeting));
}

async function HT(): Promise<void> {
  await waitAndGreet('Hafsa');
}

HT();
