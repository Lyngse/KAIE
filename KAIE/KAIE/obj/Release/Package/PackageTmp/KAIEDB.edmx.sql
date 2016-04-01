










































-- -----------------------------------------------------------
-- Entity Designer DDL Script for MySQL Server 4.1 and higher
-- -----------------------------------------------------------
-- Date Created: 03/30/2016 14:17:38

-- Generated from EDMX file: C:\Users\Søren\Desktop\KAIE\KAIE\KAIE\KAIEDB.edmx
-- Target version: 3.0.0.0

-- --------------------------------------------------


DROP DATABASE IF EXISTS `sorenlyng_dk_db`;
CREATE DATABASE `sorenlyng_dk_db`;
USE `sorenlyng_dk_db`;


-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- NOTE: if the constraint does not exist, an ignorable error will be reported.
-- --------------------------------------------------



-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------
SET foreign_key_checks = 0;

SET foreign_key_checks = 1;

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------


CREATE TABLE `NyhederSet`(
	`Id` int NOT NULL AUTO_INCREMENT UNIQUE, 
	`Titel` longtext NOT NULL, 
	`Dato` datetime NOT NULL, 
	`Forfatter` longtext NOT NULL, 
	`Tekst` longtext NOT NULL);

ALTER TABLE `NyhederSet` ADD PRIMARY KEY (Id);





CREATE TABLE `AdministratorSet`(
	`Id` int NOT NULL AUTO_INCREMENT UNIQUE, 
	`Brugernavn` longtext NOT NULL, 
	`Kodeord` longtext NOT NULL);

ALTER TABLE `AdministratorSet` ADD PRIMARY KEY (Id);







-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------
