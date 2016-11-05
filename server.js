var	express	    =	require('express'),
    app         =	express();

app.set('port',	(process.env.PORT	||	3333));


// MAIN PAGE
app.use('/',	        express.static('./dist/',
    {
        'index' : 'secret_code.html'
    }
));


app.listen(app.get('port'),	function()	{
    console.log('Server	started:	http://localhost:'	+	app.get('port')	+	'/');
});