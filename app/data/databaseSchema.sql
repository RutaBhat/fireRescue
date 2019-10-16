create database finalproject;
use finalproject;

create table member (
memberID int Primary Key not null auto_increment,
    firstName varchar(64) Not Null,
    lastName varchar(64) Not null,
    dob date default NULL,
    gender char(1) default ' ' not null,
    radioNumber varchar(64) not null,
    stationNumber Integer not null,
    email varchar(64) not null,
    position varchar(64) not null,
    phoneNumber varchar(64) not null,
    address varchar(64) not null,
    startDate date not NULL,
    isActive boolean not Null
);

select * from member;

insert into member (firstName,lastName,dob,gender,radioNumber,stationNumber,email,position,phoneNumber,address,startDate,isActive)
Values ('Amit','Jha', '1988-02-08','M','FF-12',1, 'amit@gmail.com','Chief','812-360-4663','Bloomigton','2010-10-01',True);

create table certification (
certificationID Int primary key auto_increment,
    certificationName varchar(64),
    certificationAgency varchar(64),
    expiryPeriod Integer default null
);

insert into  certification (certificationName,certificationAgency,expiryPeriod)
values ('CPR', 'American Heart Association',2),
('EMT','Atlantic Institue',4);

select * from certification;


create table memberCertify (
enrollmentID int primary key auto_increment ,
    memberID int,
    certificationID int,
    certificationIsActive boolean not null,
    caertificationStartDate date default null,
    certificationEndDate date default null,
    constraint memberCertify_fk1 foreign key(memberID) references member(memberID),
    constraint memberCertify_fk2 foreign key(certificationID) references certification(certificationID)
);

insert into memberCertify(memberID,certificationID,certificationIsActive,caertificationStartDate,certificationEndDate)
values (1,1,True,'2018-01-01','2020-10-10');

select * from memberCertify;
