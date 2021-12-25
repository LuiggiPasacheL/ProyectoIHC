
CREATE DATABASE four_salud;

use four_salud;

CREATE TABLE users (
    id int auto_increment primary key,
    username varchar(40) not null,
    password varchar(40) not null
);

CREATE TABLE families (
    id INT PRIMARY KEY,
    cod INT NOT NULL
);

CREATE TABLE beds (
    id INT PRIMARY KEY,
    cod VARCHAR(10)
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
    FOREIGN KEY (bed_id) REFERENCES beds(id)
);

CREATE TABLE doctors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
);

CREATE TABLE diseases (
    id int auto_increment primary key,
    name varchar(30) NOT NULL
);

CREATE TABLE patients_diseases (
    id INT AUTO_INCREMENT PRIMARY KEY,
    disease_id INT,
    FOREIGN KEY (disease_id) REFERENCES diseases(id),
    patient_id INT,
    FOREIGN KEY (patient_id) REFERENCES patients(id),
    date_attention DATE
);

CREATE TABLE patients_doctors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    doctor_id INT,
    FOREIGN KEY (doctor_id) REFERENCES doctors(id),
    FOREIGN KEY (patient_id) REFERENCES patients(id)
);

CREATE TABLE specialities (
    id INT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    doctor_id INT,
    FOREIGN KEY (doctor_id) REFERENCES doctors(id)
);

-- inserciones
insert into doctors (first_name, last_name) values ('Merla', 'Havvock');
insert into doctors (first_name, last_name) values ('Lindsay', 'Tregunnah');
insert into doctors (first_name, last_name) values ('Andrus', 'Nannini');
insert into doctors (first_name, last_name) values ('Issi', 'Lippiello');
insert into doctors (first_name, last_name) values ('Nerty', 'Ree');
insert into doctors (first_name, last_name) values ('Nicol', 'Escudier');
insert into doctors (first_name, last_name) values ('Hal', 'Iacovino');
insert into doctors (first_name, last_name) values ('Charmine', 'Keilty');
insert into doctors (first_name, last_name) values ('Petrina', 'Boughtflower');
insert into doctors (first_name, last_name) values ('Coral', 'Massenhove');
insert into doctors (first_name, last_name) values ('Raphaela', 'Cottell');
insert into doctors (first_name, last_name) values ('Ondrea', 'Acum');
insert into doctors (first_name, last_name) values ('Leila', 'Adrain');
insert into doctors (first_name, last_name) values ('Judye', 'Capehorn');
insert into doctors (first_name, last_name) values ('Klement', 'Sleeny');
insert into doctors (first_name, last_name) values ('Klarika', 'Maudsley');
insert into doctors (first_name, last_name) values ('Trever', 'Antonescu');
insert into doctors (first_name, last_name) values ('Faydra', 'McLewd');
insert into doctors (first_name, last_name) values ('Onida', 'Giraudoux');
insert into doctors (first_name, last_name) values ('Corry', 'Gosselin');
insert into doctors (first_name, last_name) values ('Hyman', 'Coppin');
insert into doctors (first_name, last_name) values ('Robby', 'Tombleson');
insert into doctors (first_name, last_name) values ('Elaine', 'Dossetter');

insert into diseases (name) values ('Bronquitis aguda'), ('Sinusitis'), ('Infección urinaria');

insert into users (username, password) values ('admin', '123456');
