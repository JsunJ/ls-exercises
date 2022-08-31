ALTER TABLE birds
ADD CHECK (age > 0);

INSERT INTO birds (age, name, species) VALUES (-2, 'Alan', 'Blue Jay');