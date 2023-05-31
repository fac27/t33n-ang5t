BEGIN;

INSERT INTO users (id, username, hash, created_at) VALUES
(1, 'xxDarkSoulxx', '$2a$12$A74tKw96m82AEZpJrIEQxecZGscKayJD/hD5/I6DuqKEJoQlAlNYO', '2016-12-25 00:00:00'),
(2, 'ImSoRandomxD', '$2a$12$o2NP8ykiki.T11qRQOCnBeX68PhwXHprM/hxHkbAfqotWo2XT.vdW', '2017-12-25 00:00:00'),
(3, 'HotTopicAddict', '$2a$12$8HIQ9kqN0brBUfDigfSfB.9BlSsICw4LQ/tiw4U/zMW5QWtuTqMG6', '2018-12-25 00:00:00'),
(4, 'EmoAngel143', '$2a$12$vpUb03L0WVHMfrHducL2SumogekzuPfh9Ych0Il8Zkt5Baqch7QZq', '2019-12-25 00:00:00')
ON CONFLICT DO NOTHING;

INSERT INTO entries (id, content, user_id) VALUES
(1, 'OMG, my mom totally doesn''t get me! Why won''t she let me dye my hair neon green? Ugh! #TeenAngst', 3),
(2, 'I can''t stop listening to Skrillex! Dubstep is the sickest thing ever! #EDMAddict', 4),
(3, 'Just watched Twilight for the 100th time, and I still can''t get enough of Edward Cullen! #TeamEdwardForever', 2),
(4, 'Started a new blog to express my deepest thoughts and emotions. Check it out, fellow misfits! #EmoBlogger', 1)
ON CONFLICT DO NOTHING;

COMMIT;
