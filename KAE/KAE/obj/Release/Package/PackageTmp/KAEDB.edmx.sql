










































-- -----------------------------------------------------------
-- Entity Designer DDL Script for MySQL Server 4.1 and higher
-- -----------------------------------------------------------
-- Date Created: 03/27/2016 15:49:20

-- Generated from EDMX file: C:\Users\Søren\documents\visual studio 2015\Projects\KAE\KAE\KAEDB.edmx
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

SET foreign_key_checks = 1;

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------


CREATE TABLE `AdministratorSet1`(
	`Id` int NOT NULL AUTO_INCREMENT UNIQUE, 
	`Username` longtext NOT NULL, 
	`Password` longtext NOT NULL);

ALTER TABLE `AdministratorSet1` ADD PRIMARY KEY (Id);





CREATE TABLE `ForeningsTagSet1`(
	`Id` int NOT NULL AUTO_INCREMENT UNIQUE, 
	`Navn` longtext NOT NULL);

ALTER TABLE `ForeningsTagSet1` ADD PRIMARY KEY (Id);





CREATE TABLE `NyhedSet1`(
	`Id` int NOT NULL AUTO_INCREMENT UNIQUE, 
	`Titel` varchar (50) NOT NULL, 
	`Dato` datetime NOT NULL, 
	`Tekst` longtext NOT NULL);

ALTER TABLE `NyhedSet1` ADD PRIMARY KEY (Id);





CREATE TABLE `NyhedForeningsTag1`(
	`ForeningsTagSet_Id` int NOT NULL, 
	`NyhedSet_Id` int NOT NULL);

ALTER TABLE `NyhedForeningsTag1` ADD PRIMARY KEY (ForeningsTagSet_Id, NyhedSet_Id);







-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------


-- Creating foreign key on `ForeningsTagSet_Id` in table 'NyhedForeningsTag1'

ALTER TABLE `NyhedForeningsTag1`
ADD CONSTRAINT `FK_NyhedForeningsTag1_ForeningsTagSet`
    FOREIGN KEY (`ForeningsTagSet_Id`)
    REFERENCES `ForeningsTagSet1`
        (`Id`)
    ON DELETE NO ACTION ON UPDATE NO ACTION;



-- Creating foreign key on `NyhedSet_Id` in table 'NyhedForeningsTag1'

ALTER TABLE `NyhedForeningsTag1`
ADD CONSTRAINT `FK_NyhedForeningsTag1_NyhedSet`
    FOREIGN KEY (`NyhedSet_Id`)
    REFERENCES `NyhedSet1`
        (`Id`)
    ON DELETE NO ACTION ON UPDATE NO ACTION;


-- Creating non-clustered index for FOREIGN KEY 'FK_NyhedForeningsTag1_NyhedSet'

CREATE INDEX `IX_FK_NyhedForeningsTag1_NyhedSet`
    ON `NyhedForeningsTag1`
    (`NyhedSet_Id`);



-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------
