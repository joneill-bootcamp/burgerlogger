DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE `burgers`
(
  `id` int NOT NULL AUTO_INCREMENT,
  `burger_name` varchar
(45) NOT NULL,
  `devoured` tinyint
(1) DEFAULT NULL,
  PRIMARY KEY
(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;