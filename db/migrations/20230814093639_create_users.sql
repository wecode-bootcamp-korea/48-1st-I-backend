-- migrate:up
CREATE TABLE users(
    id int NOT NULL AUTO_INCREMENT,
    nickname varchar(50) default "Name",
    email varchar(200) NOT NULL unique,
    password varchar(200) NOT NULL,
    phone_number varchar(100) null,
    birth_day timestamp null,
    profile_image varchar(300) default "https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-default-male-avatar-png-image_2811083.jpg",
    created_at timestamp not null default current_timestamp,
    updated_at timestamp null default null on update current_timestamp,
    primary key(id)
);

-- migrate:down
drop table users;
