DROP TABLE IF EXISTS restaurants;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS bookmarks;


CREATE TABLE restaurants (
	id SERIAL PRIMARY KEY,
	name varchar(50) NOT NULL,
	category varchar(40) NOT NULL,
	phone varchar(15) NOT NULL,
	price varchar(5) NOT NULL,
	latitude varchar(30) NOT NULL,
	longitude varchar(30) NOT NULL,
	city varchar(30) NOT NULL,
	address varchar(50) NOT NULL,
	state varchar(2) NOT NULL,
	zip int NOT NULL
);

-- REVISIT: gmailId
CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	gmailAddress varchar(50) NOT NULL,
	gmailId varchar(50) NOT NULL,
	firstName varchar(50) NOT NULL,
	lastName varchar(50) NOT NULL
);

CREATE TABLE reviews (
	id SERIAL PRIMARY KEY,
	user_id int NOT NULL,
	restaurant_id int NOT NULL,
	createdDate timestamp NOT NULL,
	star int NOT NULL,
	comment varchar(250) NOT NULL
);

CREATE TABLE bookmarks (
	id SERIAL PRIMARY KEY,
	user_id int NOT NULL,
	restaurant_id int NOT NULL
);

-- users (REVIST: gmailId)
INSERT into users (gmailAddress, gmailId, firstName, lastName) VALUES ('zismanofir@gmail.com', '123', 'Ofir', 'Zisman');
INSERT into users (gmailAddress, gmailId, firstName, lastName) VALUES ('yunliu0212@gmail.com', '1234', 'Emma', 'Liu');
INSERT into users (gmailAddress, gmailId, firstName, lastName) VALUES ('jimmyctran2013@gmail.com', '12345', 'Jimmy', 'Tran');
INSERT into users (gmailAddress, gmailId, firstName, lastName) VALUES ('samuelthomasmartin@gmail.com', '123456', 'Sam', 'Martin');

-- reviews
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (1, 2, localtimestamp, 4, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (1, 3, localtimestamp, 3, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (1, 4, localtimestamp, 2, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (1, 5, localtimestamp, 1, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (1, 6, localtimestamp, 5, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (1, 7, localtimestamp, 4, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (1, 8, localtimestamp, 3, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (1, 9, localtimestamp, 2, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (1, 10, localtimestamp, 1, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (2, 50, localtimestamp, 5, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (2, 52, localtimestamp, 3, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (2, 53, localtimestamp, 2, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (2, 54, localtimestamp, 1, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (2, 55, localtimestamp, 5, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (2, 56, localtimestamp, 4, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (2, 58, localtimestamp, 2, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (2, 59, localtimestamp, 1, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (3, 100, localtimestamp, 5, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (3, 101, localtimestamp, 4, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (3, 102, localtimestamp, 3, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (3, 104, localtimestamp, 1, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (3, 105, localtimestamp, 5, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (3, 106, localtimestamp, 4, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (3, 107, localtimestamp, 3, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (3, 108, localtimestamp, 2, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (3, 109, localtimestamp, 1, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (4, 150, localtimestamp, 5, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (4, 151, localtimestamp, 4, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (4, 152, localtimestamp, 3, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (4, 154, localtimestamp, 1, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (4, 155, localtimestamp, 5, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (4, 156, localtimestamp, 4, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (4, 157, localtimestamp, 3, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (4, 158, localtimestamp, 2, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (4, 159, localtimestamp, 1, 'TEST');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (1, 1, localtimestamp, 5, 'Great restaurant, good food');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (2, 51, localtimestamp, 4, 'Best service ever!!!!');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (4, 153, localtimestamp, 2, 'Love the food, so good');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (2, 57, localtimestamp, 3, 'Best location in SF');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (3, 103, localtimestamp, 2, 'My family and I had wonderful time. My family and I had wonderful time');
INSERT into reviews (user_id, restaurant_id, createdDate, star, comment) VALUES (1, 4, localtimestamp, 2, 'my favorite place');





-- bookmarks
INSERT into bookmarks (user_id, restaurant_id) VALUES (1, 10);
INSERT into bookmarks (user_id, restaurant_id) VALUES (1, 11);
INSERT into bookmarks (user_id, restaurant_id) VALUES (1, 12);
INSERT into bookmarks (user_id, restaurant_id) VALUES (1, 13);
INSERT into bookmarks (user_id, restaurant_id) VALUES (1, 14);
INSERT into bookmarks (user_id, restaurant_id) VALUES (1, 15);
INSERT into bookmarks (user_id, restaurant_id) VALUES (1, 16);
INSERT into bookmarks (user_id, restaurant_id) VALUES (1, 17);
INSERT into bookmarks (user_id, restaurant_id) VALUES (1, 18);
INSERT into bookmarks (user_id, restaurant_id) VALUES (1, 19);
INSERT into bookmarks (user_id, restaurant_id) VALUES (2, 600);
INSERT into bookmarks (user_id, restaurant_id) VALUES (2, 601);
INSERT into bookmarks (user_id, restaurant_id) VALUES (2, 602);
INSERT into bookmarks (user_id, restaurant_id) VALUES (2, 603);
INSERT into bookmarks (user_id, restaurant_id) VALUES (2, 604);
INSERT into bookmarks (user_id, restaurant_id) VALUES (2, 605);
INSERT into bookmarks (user_id, restaurant_id) VALUES (2, 606);
INSERT into bookmarks (user_id, restaurant_id) VALUES (2, 607);
INSERT into bookmarks (user_id, restaurant_id) VALUES (2, 608);
INSERT into bookmarks (user_id, restaurant_id) VALUES (2, 609);
INSERT into bookmarks (user_id, restaurant_id) VALUES (3, 700);
INSERT into bookmarks (user_id, restaurant_id) VALUES (3, 701);
INSERT into bookmarks (user_id, restaurant_id) VALUES (3, 702);
INSERT into bookmarks (user_id, restaurant_id) VALUES (3, 703);
INSERT into bookmarks (user_id, restaurant_id) VALUES (3, 704);
INSERT into bookmarks (user_id, restaurant_id) VALUES (3, 705);
INSERT into bookmarks (user_id, restaurant_id) VALUES (3, 706);
INSERT into bookmarks (user_id, restaurant_id) VALUES (3, 707);
INSERT into bookmarks (user_id, restaurant_id) VALUES (3, 708);
INSERT into bookmarks (user_id, restaurant_id) VALUES (3, 709);
INSERT into bookmarks (user_id, restaurant_id) VALUES (4, 800);
INSERT into bookmarks (user_id, restaurant_id) VALUES (4, 801);
INSERT into bookmarks (user_id, restaurant_id) VALUES (4, 802);
INSERT into bookmarks (user_id, restaurant_id) VALUES (4, 803);
INSERT into bookmarks (user_id, restaurant_id) VALUES (4, 804);
INSERT into bookmarks (user_id, restaurant_id) VALUES (4, 805);
INSERT into bookmarks (user_id, restaurant_id) VALUES (4, 806);
INSERT into bookmarks (user_id, restaurant_id) VALUES (4, 807);
INSERT into bookmarks (user_id, restaurant_id) VALUES (4, 808);
INSERT into bookmarks (user_id, restaurant_id) VALUES (4, 809);

