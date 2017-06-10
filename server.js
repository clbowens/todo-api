var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meet mom for lunch',
	completed: false
}, {
	id: 2,
	desription: 'Go to market',
	completed: false
}, {
	id: 3,
	description: 'Do stuff and things',
	completed: true
}];

app.get('/', function (req, res){
	res.send('Todo API Root');
});

// GET /todos
app.get('/todos', function(req, res){
	res.json(todos);
});

// GET /todos/:id
app.get('/todos/:id', function(req, res){
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;

	// iterate over todos array.  Find the match.
	todos.forEach(function (todo) {
		if(todo.id === todoId){
			 matchedTodo = todo;
		}
	});

	if (matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}
});


app.listen(PORT, function(){
	console.log('Express listening on port ' + PORT + '!');
});