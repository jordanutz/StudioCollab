INSERT INTO studio_user
(name, email, password, creator)
VALUES
($1, $2, $3, $4)
returning id, name, email, creator;