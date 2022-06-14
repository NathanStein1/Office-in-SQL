INSERT INTO department (name)
VALUES ("Finance"),
       ("Legal"),
       ("Development"),
       ("Advertising");

INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 100000, 1), 
("Lawyer", 100000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("James", "Madison", 1, null);