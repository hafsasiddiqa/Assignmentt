// Question 3: Async/Await: Build a TypeScript function named waitAndGreet...
import chalk from 'chalk';
function wait(ht) {
    return new Promise((resolve) => setTimeout(resolve, ht));
}
async function waitAndGreet(name) {
    await wait(3000);
    const greeting = `Hello! How have you been? ${name}...`;
    console.log(chalk.blue(greeting));
}
async function HT() {
    await waitAndGreet('Hafsa');
}
HT();
