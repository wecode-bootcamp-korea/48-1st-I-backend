-- migrate:up
ALTER TABLE thread_comments
ADD FOREIGN KEY (thread_id)
REFERENCES threads (id)
ON DELETE CASCADE;

-- migrate:down

