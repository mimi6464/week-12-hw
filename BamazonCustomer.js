var mysql = require('mysql');
var prompt = require('prompt');
connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Mysql777',
	database: 'bamazon'
});
connection.connect();

connection.query('SELECT * from products', function (err, rows, fields) {
	if (!err){
		console.log('All items: ', rows);	
		console.log('PLEASE ENTER THE ID OF THE PRODUCT YOU WOULD LIKE TO BUY AND QUANTITY?');
	}
	else
		console.log('Error while performing Query.');
});


prompt.start();
prompt.get(['itemId', 'quantity'], function (err, result) {
	if (err) { return onErr(err); }

	console.log(' You have entered  itemId: ' + result.itemId);
	prompt.stop();

	var stockQuantity = 0;
	connection.query('SELECT * from products where itemid=?', [result.itemId], function (err, rows, fields) {
		if (!err) {
			stockQuantity = rows[0].StockQuantity;
			console.log('StockQuantity: ', rows[0].StockQuantity);
		}
		else {
			console.log('Error while performing Query.');
		}


	
		if ( parseInt(stockQuantity) > result.quantity) {
		
				connection.query('update products set StockQuantity =? where ItemID =?', [result.quantity, result.itemId], function (err, rows, fields) {
					if (!err)
						console.log('The solution is: ', rows);
					else
						console.log('Error while performing Query.');


				});
			} else {
				console.log('INSUFFICIENT QUANTITY!');
			}
			connection.end();
	});
	

});



function onErr(err) {
	console.log(err);
	return 1;
}