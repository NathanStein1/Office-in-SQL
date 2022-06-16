const inquirer = require("inquirer");
const fs = require('fs');
require('console.table');
const db = require('./config/connection')


// Prompt Begins
function beginProgram() {
inquirer.prompt([

{
    type: 'list',
    message: 'What would you like to do?',
    name: 'menuStart',
    choices: ['View Departments',  'View Roles', 'View Employees', 'Add New employee', 'Add New Department', 'Add New Role', 'Update Employee', 'Finish']
    
}])
.then((response) => {
    console.log(response.menuStart)
    // View Department
    if (response.menuStart==='View Departments'){
        db.query('SELECT * FROM department', (err, data) => {
            console.table(data)
            beginProgram()
        })
    }
    // View Role
    if (response.menuStart === 'View Roles'){

        db.query('SELECT * FROM role', (err, data) => {
            console.table(data)
            beginProgram()
        })

    }

    // View Employee

    if (response.menuStart === 'View Employees'){

        db.query('SELECT * FROM employee', (err, data) => {
            console.table(data)
            beginProgram()
        })

    }

// Add new employee
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
                message: 'Role ID?',
                name: 'department',
                
            },

            {
                type: 'input',
                message: 'Manager ID?',
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

    // Add new Department
    if (response.menuStart === 'Add New Department'){
        inquirer.prompt([

            {
                type: 'input',
                message: 'Department Name?',
                name: 'deptName',
                
            },


        ]).then((response)=>{
            db.query('INSERT INTO department (name) VALUES (?)', [response.deptName],(err,data) =>{
                console.log('New')
                console.log(err)
                beginProgram()
            })
        })
    }

    // Add new Role
    if (response.menuStart === 'Add New Role'){
        inquirer.prompt([

            {
                type: 'input',
                message: 'Role Name?',
                name: 'roleName',
                
            },
            {
                type: 'input',
                message: 'Salary?',
                name: 'roleSally',
                
            },
            {
                type: 'input',
                message: 'Department ID?',
                name: 'roleDept',
                
            },


        ]).then((response)=>{
            db.query('INSERT INTO role (title, salary, department_id) VALUES (?,?,?)', [response.roleName, response.roleSally, response.roleDept],(err,data) =>{
                console.log('New')
                console.log(err)
                beginProgram()
            })
        })
    }
    // Update Employee
    if (response.menuStart === 'Update Employee'){
        inquirer.prompt([
            {
                type: 'input',
                message: 'Which employee (id)?',
                name: 'targetEmp',
                
            },
            {
                type: 'input',
                message: 'New Role?',
                name: 'newRole',
                
            },

        ]).then((response)=>{
            db.query('UPDATE employee SET role_id = ?  WHERE id= ?', [response.newRole , response.targetEmp],(err,data) =>{
                console.log('New')
                console.log(err)
                beginProgram()
            })
        })
    }
    if (response.menuStart === 'Finish'){
        console.log('Use ctrl C to exit');
    }
    
})
}

beginProgram()