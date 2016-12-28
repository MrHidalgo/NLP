var	express	    =	require('express'),
    app         =	express();

app.set('port',	(process.env.PORT	||	5555));


// MAIN PAGE
app.use('/',	        express.static('./dist/', {
        'index' : 'secret_code.html'
}));
// START FORM
app.use('/starts',	        express.static('./dist/', {
        'index' : 'start_form.html'
}));
// HELLO
app.use('/hello',	        express.static('./dist/', {
        'index' : 'hello.html'
}));
// PROFILE
app.use('/profile',	        express.static('./dist/', {
        'index' : 'profile.html'
}));
// DIARY
app.use('/diary',	        express.static('./dist/', {
        'index' : 'diary.html'
}));
// TRAINER
app.use('/trainer',	        express.static('./dist/', {
        'index' : 'start_trainer.html'
}));
// AWARD DISTRIBUTION
app.use('/distribution',	        express.static('./dist/', {
        'index' : 'award_distribution.html'
}));
// COMMUNITY TRAINER
app.use('/community',	        express.static('./dist/', {
        'index' : 'community.html'
}));
// MENU TRAINING
app.use('/menus',	        express.static('./dist/', {
        'index' : 'menus.html'
}));
// MENU LESSONS
app.use('/lessons',	        express.static('./dist/', {
        'index' : 'lessons.html'
}));


app.listen(app.get('port'),	function()	{
    console.log('Server	started:	http://localhost:'	+	app.get('port')	+	'/');
});