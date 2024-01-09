// Question 1: creating a basic calculator application...

import chalk from 'chalk';

function calculate(num1: number, num2: number, operation: string, callback: (result: number) => void) {
  let result: number;

  if (operation === 'add') {
    setTimeout(() => {
      result = num1 + num2;
      callback(result);
    }, 1000); 
    return;
  } else if (operation === 'subtract') {
    setTimeout(() => {
      result = num1 - num2;
      callback(result);
    }, 3000); 
    return;
  } else if (operation === 'multiply') {
    setTimeout(() => {
      result = num1 * num2;
      callback(result);
    }, 5000); 
    return;
  } else if (operation === 'divide') {
    setTimeout(() => {
      result = num1 / num2;
      callback(result);
    }, 7000); 
    return;
  } else {
    throw new Error('Invalid operation');
  }
  
    callback(result); 
}

calculate(5, 5, 'add', (result) => {
  console.log('The result: 5 + 5 =', chalk.magenta(result));
});
calculate(10, 5, 'subtract', (result) => {
    console.log('The result: 10 - 5 =', chalk.blue(result));
  });
  calculate(5, 2, 'multiply', (result) => {
    console.log('The result: 5 * 2 =', chalk.green(result));
  });
  calculate(10, 2, 'divide', (result) => {
    console.log('The result: 10 / 2 =', chalk.red(result));
  });
  