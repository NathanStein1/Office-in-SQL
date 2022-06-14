const inquirer = require("inquirer");
const fs = require('fs');


// write code here, use class constructers? Build the table BEFORE the meeting tomorrow
function beginProgram() {
inquirer.prompt([

{
    type: 'list',
    message: 'What u wun?',
    name: 'wuh?',
    choices: ['Add new buddy', 'Make new pal', 'Have more friend', 'NO']
}])
.then((response) => {
    console.log(response)
})
}

beginProgram()