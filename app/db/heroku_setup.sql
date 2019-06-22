-- used to setup jaws db mysql table definition
USE gmy635iu84su130b ;

DROP TABLE IF EXISTS burger;
CREATE TABLE burger
(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT false,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- SELECT * FROM burger;