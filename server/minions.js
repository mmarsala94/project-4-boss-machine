const express = require('express');
const { getElementById, getIndexById, updateElement,
  seedElements, createElement } = require('./utils');
let minions = [];
seedElements(minions, 'minions');
minionsRouter = express.Router();

minionsRouter.get('/', (req, res, next) => {
	res.send(minions);
});

minionsRouter.get('/:id', (req, res, next) => {
	const minion = getElementById(req.params.id, minions);
	if(minion){
		res.send(minion);
	} else {
		res.status(404).send();
	}
});
minionsRouter.post('/', (req, res, next) => {

});
minionsRouter.put('/:id', (req, res, next) => {

});
minionsRouter.delete('/:id', (req, res, next) => {

});