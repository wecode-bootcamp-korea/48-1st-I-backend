-- migrate:up
ALTER TABLE users MODIFY COLUMN nickname varchar(50) not null DEFAULT "Name";
ALTER TABLE users MODIFY COLUMN profile_image varchar(300) not null DEFAULT "https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-default-male-avatar-png-image_2811083.jpg";

-- migrate:down

