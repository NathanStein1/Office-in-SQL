
class Employee {

    constructor(firstName, lastName, role, id, salary, isManager, reportTo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.id = id;
        this.salary = salary;
        this.isManager = isManager;
        this.reportTo = reportTo;
    }

    getfirstName() {
        return this.firstName;
    }

    getlastName() {
        return this.lastName;
    }

    getRole(){
        return this.role;
    }

    getId () {
        return this.id;
    }

    getSalary () {
        return this.salary;
    }

    getisManager () {
        return this.isManager;
    }
    
    getreportTo(){
        return this.reportTo;
    }

}

module.exports = Employee;