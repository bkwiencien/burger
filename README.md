#mysql setup

schema.sql:

create database burgers_db;
use burgers_db;

create table burgers(
id integer auto_increment not null,
burger_name varchar(50) not null,
devoured boolean default false not null,
date1 timestamp  default current_timestamp on update current_timestamp,
primary key(id));

It is "seeded" with the following:

-- the seeds.sql commands 

insert into burgers (burger_name) values ('classic cheeseburger');
insert into burgers (burger_name) values ('double cheeseburger');
insert into burgers (burger_name) values ('triple cheeseburger');
