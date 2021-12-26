
CREATE DATABASE four_salud;

use four_salud;

CREATE TABLE users (
    id int auto_increment primary key,
    username varchar(40) not null,
    password varchar(40) not null
);

CREATE TABLE families (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cod VARCHAR(30) NOT NULL
);

CREATE TABLE beds (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cod VARCHAR(30)
);CREATE TABLE diseases (
    id int auto_increment primary key,
    name varchar(30) NOT NULL
);

CREATE TABLE patients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    gender VARCHAR(30) NOT NULL,
    city VARCHAR(30) NOT NULL,
    district VARCHAR(30) NOT NULL,
    direction VARCHAR(30) NOT NULL,
    telephone VARCHAR(30) NOT NULL,
    email VARCHAR(40) NOT NULL,
    DNI VARCHAR(10) NOT NULL,
    date_birth DATE NOT NULL,
    family_id INT NOT NULL,
    FOREIGN KEY (family_id) REFERENCES families(id),
    bed_id INT,
    FOREIGN KEY (bed_id) REFERENCES beds(id),
    disease_id INT,
    FOREIGN KEY (disease_id) REFERENCES diseases(id)
);

CREATE TABLE doctors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
);

CREATE TABLE patients_doctors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    doctor_id INT,
    FOREIGN KEY (doctor_id) REFERENCES doctors(id),
    FOREIGN KEY (patient_id) REFERENCES patients(id)
);

CREATE TABLE specialities (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    doctor_id INT,
    FOREIGN KEY (doctor_id) REFERENCES doctors(id)
);
