-- migrate:up
CREATE TABLE threads (
    id int not null AUTO_INCREMENT,
    user_id int not null,
    content varchar(500) null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp null default null on update current_timestamp,
    primary key (id),
    constraint threads_user_id_fk foreign key (user_id) references users(id)
);

-- migrate:down

drop table threads;