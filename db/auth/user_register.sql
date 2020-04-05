INSERT INTO user_studio
(name, email, password, account)
VALUES
($1, $2, $3, $4)
returning id, name, email, account;