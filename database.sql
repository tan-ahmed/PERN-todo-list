CREATE DATABASE perntodo;

-- serial increase the ID so its unqiue
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

SELECT * FROM todo;



-- // \l => list all database in postgres
-- // \c => move inside a database
-- // \dt => show table in database
-- // CREATE DATABASE perntodo => creates a DB with that name
-- // CREATE TABLE todo(...); => creates a table called todo
-- // psql -U postgres   => this is super admin

-- INSERT INTO todo(description) VALUES ('hello');