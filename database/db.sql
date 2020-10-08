CREATE DATABASE database_links;

USE database_links;

--Tabla de usuarios
CREATE TABLE users(
    id int not null,
    username varchar (16) not null,
    password varchar (60) not null,
    fullname varchar (100) not null
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE users;

--Tabla de enlaces

CREATE TABLE links(
    id INT (11) NOT NULL,
    title VARCHAR (150) NOT NULL,
    url VARCHAR (255) NOT NULL,
    description TEXT,
    user_id INT(11),
    created_ad TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE links
    ADD PRIMARY KEY (id);

ALTER TABLE links
    MODIFY id INT (11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

describe links;