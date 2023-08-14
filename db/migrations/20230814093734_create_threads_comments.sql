-- migrate:up
CREATE TABLE thread_comments (
    id INT NOT NULL AUTO_INCREMENT,
    thread_id INT NOT NULL,
    user_id INT NOT NULL,
    content VARCHAR(500) null,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT null ON UPDATE current_timestamp,
    PRIMARY KEY (id),
    constraint thread_comments_thread_id_fk foreign key (thread_id) references threads(id),
    constraint thread_comments_user_id_fk foreign key (user_id) references users(id)

);

-- migrate:down

drop table thread_comments;