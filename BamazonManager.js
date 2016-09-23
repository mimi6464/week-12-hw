var mysql = require('mysql');
var prompt = require('prompt');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Mysql777 ',
	database: 'bamazon'
});

console.log('Enter (1) To VIEW PRODUCTS FOR SALE.');
console.log('Enter (2) To VIEW LOW INVENTORY.');

prompt.start();
prompt.get(['viewId'], function (err, result) {
	if (err) { return onErr(err); }
	prompt.stop();
	
	if (result.viewId == 1)
	{
		connection.connect();
		connection.query('SELECT * from products', function (err, rows, fields) {
			if (!err) {
				console.log('VIEW PRODUCTS FOR SALE: ');
				for (var i = 0; i < rows.length; i++) {
					console.log(rows[i].ItemID, rows[i].ProductName, rows[i].Price, rows[i].StockQuantity);
				};
			}
			else
				console.log('Error while performing Query.');
		});
		connection.end();
	}
	else (result.viewId == 2)
	{
		connection.connect();
		connection.query('SELECT * from products Where  StockQuantity <5', function (err, rows, fields) {
			if (!err) {
				console.log('VIEW LOW INVENTORY: ');
				for (var i = 0; i < rows.length; i++) {
					console.log(rows[i].ItemID, rows[i].ProductName, rows[i].Price, rows[i].StockQuantity);
				};
			}
			else
				console.log('Error while performing Query.');
		});
		connection.end();
	}
	
});



function onErr(err) {
	console.log(err);
	return 1;
}




