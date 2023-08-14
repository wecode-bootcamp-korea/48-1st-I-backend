-- migrate:up
CREATE TABLE thread_likes(
    id int not null AUTO_INCREMENT,
    user_id int not null,
    thread_id int not null,
    created_at timestamp not null default current_timestamp,
    primary key(id),
    constraint thread_likes_user_id_fk foreign key (user_id) references users(id),
    constraint thread_likes_thread_id_fk foreign key (thread_id) references threads(id)
);

-- migrate:down

drop table thread_likes;