-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema INHA
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema INHA
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `INHA` ;
USE `INHA` ;

-- -----------------------------------------------------
-- Table `INHA`.`Building`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `INHA`.`Building` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `Name_UNIQUE` (`Name` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 1;


-- -----------------------------------------------------
-- Table `INHA`.`Department`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `INHA`.`Department` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(45) NULL DEFAULT NULL,
  `Phone number` VARCHAR(45) NULL DEFAULT NULL,
  `Building_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `Name_UNIQUE` (`Name` ASC) VISIBLE,
  UNIQUE INDEX `Phone number_UNIQUE` (`Phone number` ASC) VISIBLE,
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) VISIBLE,
  INDEX `fk_Department_Building1_idx` (`Building_id` ASC) VISIBLE,
  CONSTRAINT `fk_Department_Building1`
    FOREIGN KEY (`Building_id`)
    REFERENCES `INHA`.`Building` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 1;


-- -----------------------------------------------------
-- Table `INHA`.`Room`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `INHA`.`Room` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `Capacity` VARCHAR(45) NULL DEFAULT NULL,
  `Building_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`, `Building_id`),
  INDEX `fk_Room_Building_idx` (`Building_id` ASC) VISIBLE,
  CONSTRAINT `fk_Room_Building`
    FOREIGN KEY (`Building_id`)
    REFERENCES `INHA`.`Building` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `INHA`.`Student`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `INHA`.`Student` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Phone number` VARCHAR(45) NOT NULL,
  `Major` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`, `Major`),
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) VISIBLE,
  UNIQUE INDEX `Phone number_UNIQUE` (`Phone number` ASC) VISIBLE,
  UNIQUE INDEX `Name_UNIQUE` (`Name` ASC) VISIBLE,
  INDEX `Major` (`Major` ASC) VISIBLE,
  CONSTRAINT `student_ibfk_1`
    FOREIGN KEY (`Major`)
    REFERENCES `INHA`.`Department` (`Name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
