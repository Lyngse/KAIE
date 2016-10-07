










































-- -----------------------------------------------------------
-- Entity Designer DDL Script for MySQL Server 4.1 and higher
-- -----------------------------------------------------------
-- Date Created: 09/25/2016 17:29:23

-- Generated from EDMX file: C:\Users\Søren\Desktop\KAIE\KAIE\KAIE\KAIEDB.edmx
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

    DROP TABLE IF EXISTS `NyhederSet`;

    DROP TABLE IF EXISTS `AdministratorSet`;

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

ALTER TABLE `NyhederSet` ADD PRIMARY KEY (`Id`);





CREATE TABLE `AdministratorSet`(
	`Id` int NOT NULL AUTO_INCREMENT UNIQUE, 
	`Brugernavn` longtext NOT NULL, 
	`Kodeord` longtext NOT NULL);

ALTER TABLE `AdministratorSet` ADD PRIMARY KEY (`Id`);





CREATE TABLE `BilledeSet`(
	`Id` int NOT NULL AUTO_INCREMENT UNIQUE, 
	`BilledeFil` longblob NOT NULL, 
	`AlbumId` int NOT NULL);

ALTER TABLE `BilledeSet` ADD PRIMARY KEY (`Id`);





CREATE TABLE `AlbumSet`(
	`Id` int NOT NULL AUTO_INCREMENT UNIQUE, 
	`Navn` longtext NOT NULL, 
	`Beskrivelse` longtext NOT NULL, 
	`Dato` datetime NOT NULL);

ALTER TABLE `AlbumSet` ADD PRIMARY KEY (`Id`);







-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------


-- Creating foreign key on `AlbumId` in table 'BilledeSet'

ALTER TABLE `BilledeSet`
ADD CONSTRAINT `FK_AlbumBillede`
    FOREIGN KEY (`AlbumId`)
    REFERENCES `AlbumSet`
        (`Id`)
    ON DELETE NO ACTION ON UPDATE NO ACTION;


-- Creating non-clustered index for FOREIGN KEY 'FK_AlbumBillede'

CREATE INDEX `IX_FK_AlbumBillede`
    ON `BilledeSet`
    (`AlbumId`);



-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------
