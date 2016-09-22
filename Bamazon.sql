
CREATE DATABASE `bamazon`;

USE Bamazon;


CREATE TABLE `products` (
  `ItemID` int(50) NOT NULL AUTO_INCREMENT,
  `ProductName` varchar(100) DEFAULT NULL,
  `DepartmentName` varchar(100) DEFAULT NULL,
  `Price` decimal(10,2) DEFAULT NULL,
  `StockQuantity` int(250) DEFAULT NULL,
  PRIMARY KEY (`ItemID`),
  UNIQUE KEY `ItemID_UNIQUE` (`ItemID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

INSERT INTO products (ItemId,ProductName,DepartmentName,Price,StockQuantity)
VALUES (1, "Bob Marley","Music",15.99, 10);

INSERT INTO products (ItemId,ProductName,DepartmentName,Price,StockQuantity)
VALUES (2, "JavaScripts Lessons","Books",25, 15);

INSERT INTO products (ItemId,ProductName,DepartmentName,Price,StockQuantity)
VALUES (3, "Nikes shoe","SportsWear",55, 10);

INSERT INTO products (ItemId,ProductName,DepartmentName,Price,StockQuantity)
VALUES (4, "My Bondage and My Freedom","Books",15, 10);

INSERT INTO products (ItemId,ProductName,DepartmentName,Price,StockQuantity)
VALUES (5, "Errings","Jewlery",45, 5);

INSERT INTO products (ItemId,ProductName,DepartmentName,Price,StockQuantity)
VALUES (6, "The 48 Laws of Power","Books",15, 10);

INSERT INTO products (ItemId,ProductName,DepartmentName,Price,StockQuantity)
VALUES (7, "Wine Glasses","Kitchen",15, 5);

INSERT INTO products (ItemId,ProductName,DepartmentName,Price,StockQuantity)
VALUES (8, "Iphones","Electronics",150, 5);

INSERT INTO products (ItemId,ProductName,DepartmentName,Price,StockQuantity)
VALUES (9, "TV","Electronics",250, 5);


INSERT INTO products (ItemId,ProductName,DepartmentName,Price,StockQuantity)
VALUES (10, "How to play Guitar","Books",20, 10);



