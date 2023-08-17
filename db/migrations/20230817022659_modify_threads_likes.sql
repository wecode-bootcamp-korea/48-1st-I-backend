-- migrate:up
ALTER TABLE thread_likes
ADD FOREIGN KEY (thread_id)
REFERENCES threads (id)
ON DELETE CASCADE;

-- migrate:down

