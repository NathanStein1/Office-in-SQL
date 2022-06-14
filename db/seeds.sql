INSERT INTO department (id, name_)
VALUES (1, "Finance"),
       (2, "Legal"),
       (3, "Development"),
       (4, "Advertising");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Lawyer", 100000, 1), 
(2, "Lawyer", 100000, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "James", "Madison", 1, null);