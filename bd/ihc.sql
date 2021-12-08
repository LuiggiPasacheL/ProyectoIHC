
CREATE DATABASE four_salud;

use four_salud;

CREATE TABLE users (
    id int auto_increment primary key,
    username varchar(40) not null,
    password varchar(40) not null
);

CREATE TABLE diseases (
    id int auto_increment primary key,
    name varchar(30) NOT NULL,
);

CREATE TABLE patients_diseases (
    id INT AUTO_INCREMENT PRIMARY KEY,
    disease_id INT,
    FOREIGN KEY (disease_id) REFERENCES diseases(id),
    patient_id INT,
    FOREIGN KEY (patient_id) REFERENCES patients(id),
    date_attention DATE
);

CREATE TABLE patients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    age INT NOT NULL,
    family_id INT NOT NULL,
    FOREIGN KEY (family_id) REFERENCES families(id),
    family_rol VARCHAR(20),
    bed_id INT NOT NULL,
    FOREIGN KEY (bed_id) REFERENCES beds(id),
);

CREATE TABLE patients_doctors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    doctor_id INT
    FOREIGN KEY (doctor_id) REFERENCES doctor(id),
    FOREIGN KEY (patient_id) REFERENCES patients(id)
);

CREATE TABLE doctors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
);

CREATE TABLE specialities (
    id INT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    doctor_id INT,
    FOREIGN KEY (doctor_id) REFERENCES doctor(id)
);

CREATE TABLE families (
    id INT PRIMARY KEY,
    cod INT NOT NULL
);

CREATE TABLE beds (
    id INT PRIMARY KEY,
    cod VARCHAR(10)
);
