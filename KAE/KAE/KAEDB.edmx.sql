










































-- -----------------------------------------------------------
-- Entity Designer DDL Script for MySQL Server 4.1 and higher
-- -----------------------------------------------------------
-- Date Created: 03/28/2016 01:10:30

-- Generated from EDMX file: C:\Users\Søren\Desktop\KAIE\KAE\KAE\KAEDB.edmx
-- Target version: 3.0.0.0

-- --------------------------------------------------



-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- NOTE: if the constraint does not exist, an ignorable error will be reported.
-- --------------------------------------------------



-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------
SET foreign_key_checks = 0;

    DROP TABLE IF EXISTS `AdministratorSet1`;

    DROP TABLE IF EXISTS `NyhedSet1`;

SET foreign_key_checks = 1;

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------


CREATE TABLE `AdministratorSet1`(
	`Id` int NOT NULL AUTO_INCREMENT UNIQUE, 
	`Username` longtext NOT NULL, 
	`Password` longtext NOT NULL);

ALTER TABLE `AdministratorSet1` ADD PRIMARY KEY (Id);





CREATE TABLE `NyhedSet1`(
	`Id` int NOT NULL AUTO_INCREMENT UNIQUE, 
	`Titel` varchar (50) NOT NULL, 
	`Dato` datetime NOT NULL, 
	`Tekst` longtext NOT NULL, 
	`Forfatter` longtext NOT NULL);

ALTER TABLE `NyhedSet1` ADD PRIMARY KEY (Id);







-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------
