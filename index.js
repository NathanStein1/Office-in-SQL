const inquirer = require("inquirer");
const fs = require('fs');
const table = require('console.table')

const db = require('./config/connection')


// write code here, use class constructers? Build the table BEFORE the meeting tomorrow
function beginProgram() {
inquirer.prompt([

{
    type: 'list',
    message: 'What would you like to do?',
    name: 'menuStart',
    choices: ['View Departments', 'Add New employee', 'Remove Employee', 'Finish']
    // view department, view employee, view role, update x3 (in employee update the role)
}])
.then((response) => {
    console.log(response.menuStart)
    if (response.menuStart==='View Departments'){
        db.query('SELECT * FROM department', (err, data) => {
            console.table(data)
            beginProgram()
        })
    }
    if (response.menuStart === 'Add New employee'){
        inquirer.prompt([

            {
                type: 'input',
                message: 'First Name?',
                name: 'firstName',
                
            },

            {
                type: 'input',
                message: 'Last Name?',
                name: 'lastName',
                
            },

            {
                type: 'input',
                message: 'Department?',
                name: 'department',
                
            },

            {
                type: 'input',
                message: 'Manager?',
                name: 'manager',
                
            },
        ]).then((response)=>{
            db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)', [response.firstName, response.lastName, response.department, response.manager],(err,data) =>{
                console.log('New')
                console.log(err)
                beginProgram()
            })
        })
    }
})
}

beginProgram()