










































-- -----------------------------------------------------------
-- Entity Designer DDL Script for MySQL Server 4.1 and higher
-- -----------------------------------------------------------
-- Date Created: 03/26/2016 23:32:27

-- Generated from EDMX file: C:\Users\Søren\documents\visual studio 2015\Projects\KAE\KAE\KAEDB.edmx
-- Target version: 3.0.0.0

-- --------------------------------------------------



-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- NOTE: if the constraint does not exist, an ignorable error will be reported.
-- --------------------------------------------------


--    ALTER TABLE `NyhedForeningsTag` DROP CONSTRAINT `FK_NyhedForeningsTag_Nyhed`;

--    ALTER TABLE `NyhedForeningsTag` DROP CONSTRAINT `FK_NyhedForeningsTag_ForeningsTag`;


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------
SET foreign_key_checks = 0;

    DROP TABLE IF EXISTS `NyhedSet`;

    DROP TABLE IF EXISTS `ForeningsTagSet`;

    DROP TABLE IF EXISTS `AdministratorSet`;

    DROP TABLE IF EXISTS `NyhedForeningsTag`;

SET foreign_key_checks = 1;

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------


CREATE TABLE `NyhedSet`(
	`Id` int NOT NULL AUTO_INCREMENT UNIQUE, 
	`Titel` varchar (50) NOT NULL, 
	`Dato` datetime NOT NULL, 
	`Tekst` longtext NOT NULL);

ALTER TABLE `NyhedSet` ADD PRIMARY KEY (Id);





CREATE TABLE `ForeningsTagSet`(
	`Id` int NOT NULL AUTO_INCREMENT UNIQUE, 
	`Navn` longtext NOT NULL);

ALTER TABLE `ForeningsTagSet` ADD PRIMARY KEY (Id);





CREATE TABLE `AdministratorSet`(
	`Id` int NOT NULL AUTO_INCREMENT UNIQUE, 
	`Username` longtext NOT NULL, 
	`Password` longtext NOT NULL);

ALTER TABLE `AdministratorSet` ADD PRIMARY KEY (Id);





CREATE TABLE `NyhedForeningsTag`(
	`Nyhed_Id` int NOT NULL, 
	`ForeningsTag_Id` int NOT NULL);

ALTER TABLE `NyhedForeningsTag` ADD PRIMARY KEY (Nyhed_Id, ForeningsTag_Id);







-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------


-- Creating foreign key on `Nyhed_Id` in table 'NyhedForeningsTag'

ALTER TABLE `NyhedForeningsTag`
ADD CONSTRAINT `FK_NyhedForeningsTag_Nyhed`
    FOREIGN KEY (`Nyhed_Id`)
    REFERENCES `NyhedSet`
        (`Id`)
    ON DELETE NO ACTION ON UPDATE NO ACTION;



-- Creating foreign key on `ForeningsTag_Id` in table 'NyhedForeningsTag'

ALTER TABLE `NyhedForeningsTag`
ADD CONSTRAINT `FK_NyhedForeningsTag_ForeningsTag`
    FOREIGN KEY (`ForeningsTag_Id`)
    REFERENCES `ForeningsTagSet`
        (`Id`)
    ON DELETE NO ACTION ON UPDATE NO ACTION;


-- Creating non-clustered index for FOREIGN KEY 'FK_NyhedForeningsTag_ForeningsTag'

CREATE INDEX `IX_FK_NyhedForeningsTag_ForeningsTag`
    ON `NyhedForeningsTag`
    (`ForeningsTag_Id`);



-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------
