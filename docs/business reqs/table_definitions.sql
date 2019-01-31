CREATE TABLE user (
	user_id VARCHAR(255) PRIMARY KEY
	,password VARCHAR(100)
	,email VARCHAR(100)
	,firstName VARCHAR(100)
	,lastName VARCHAR(100)
);

CREATE TABLE transaction(
	transaction_id VARCHAR(255) PRIMARY KEY
	,user_id VARCHAR(255) FOREIGN KEY REFERENCES user(user_id)
	,amount NUMERIC (30, 2)
	,category_id INT NOT NULL FOREIGN KEY REFERENCES category(category_id)
	,category_name VARCHAR(100) -- could be user inputed if categoryId is key for other
	,subcategory INT NULL FOREIGN KEY REFERENCES subcategory(subcategory_id)
	,transactionDate DATE
	,postedDate	DATE
	,description LONGTEXT
	,isNecessity TINYINT
	,

);

CREATE TABLE category(
	category_id	INT auto_increment PRIMARY KEY
	,name VARCHAR(100)

);

CREATE TABLE subcategory(
	subcategory_id INT auto_increment PRIMARY KEY
	,name VARCHAR(100)
	,parent INT FOREIGN KEY REFERENCES category(category_id)

);

CREATE TABLE limit(
	--either time (don't spend more than x amount in month/week etc) or category (don't spend more than x amount on restaurants/clothes)
	limit_id INT auto_increment PRIMARY KEY
	,description LONGTEXT
	,limitType VARCHAR(255) NOT NULL 
	,
);

CREATE TABLE limitType(

)