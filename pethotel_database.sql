CREATE TABLE pethotel_owners (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(20),
	last_name VARCHAR(20)
);

CREATE TABLE pethotel_pets (
	id SERIAL PRIMARY KEY,
	breed VARCHAR(30),
	color VARCHAR(30),
	owner_id integer REFERENCES pethotel_owners
);

CREATE TABLE pethotel_visits (
	id SERIAL PRIMARY KEY,
	pet_id integer REFERENCES pethotel_pets,
	check_in date,
	check_out date
);

INSERT INTO "pethotel_owners" ("first_name", "last_name")
VALUES ('Keith','Tomlinson'), ('Nic','Wilson'),('Chris','Keller'),('Logan', 'Kelly');

INSERT INTO "pethotel_pets" ("breed","color","owner_id") VALUES ('Corgi','Tan',3), ('Shih-Tzu','Gray',2),('Flatcoat Retreiver','Black',1),('Cat','Orange',4);

INSERT INTO "pethotel_visits" ("pet_id","check_in","check_out") VALUES (1,'2017-7-4','2017-7-7'), (2,'2017-7-4','2017-7-7'), (3,'2017-7-4','2017-7-7'), (4,'2017-7-4','2017-7-7');