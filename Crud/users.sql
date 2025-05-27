-- usuário: root
-- senha: c@tolic@ (ou catolica)

-- criar o banco de dados
create database userdb3;

use userdb;

create table users (
	id int auto_increment primary key,
    nome varchar(100) not null, 
    email varchar(100) not null
);

select * from users;
