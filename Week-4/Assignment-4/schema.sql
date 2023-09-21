CREATE DATABASE assignment;
USE assignment;

CREATE TABLE user (
  id integer PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(320) NOT NULL UNIQUE,
  password VARCHAR(60) NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE article (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  author_id INTEGER,
  FOREIGN KEY (author_id) REFERENCES user(id),
  created TIMESTAMP NOT NULL DEFAULT NOW()
);