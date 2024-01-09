// Question 2: Promises: building a simple quiz app...
import chalk from 'chalk';
function fetchQuestion() {
    return new Promise((resolve) => {
        let questions = [
            'Pink Ladies and Granny Smiths are types of what fruit? Ans = Apples',
            'What country drinks the most coffee? Ans = Finland',
            'What is the largest planet in our solar system? Ans = Jupiter',
            'What is the tallest type of tree? Ans = Redwoods',
        ];
        let Index = Math.floor(Math.random() * questions.length);
        let Question = questions[Index];
        resolve(chalk.magenta(Question));
    });
}
fetchQuestion().then((question) => {
    console.log(question);
});
