const express = require('express');
const apiRouter = express.Router();
// module.imports = {
//   createMeeting,
//   getAllFromDatabase,
//   getFromDatabaseById,
//   addToDatabase,
//   updateInstanceInDatabase,
//   deleteFromDatabasebyId,
//   deleteAllFromDatabase
// };
import {  
  createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase} from './db';

apiRouter.get('/minions', (req, res, next) => {
	if(getAllFromDatabase(minions)){
	res.send(getAllFromDatabase(minions));
  }
});

apiRouter.get('/minions/:id', (req, res, next) => {
	//const minionId = Number(req.params.id);
	// if(minions[req.params.id]){
	// 	res.status(200).send(minions[req.params.id]);
	// } else{
	// 	res.status(404).send('Minion with that ID not found.');
	// }
	if(getFromDatabaseById(minions, req.params.id) !== -1){
		res.status(200).send(getFromDatabaseById(minions, req.params.id));
	} else{
		res.status(404).send('Minion with that ID is not found.');
	}
});

apiRouter.post('/minions', (req, res, next) => {
	const newMinion = {
		//addToDatabase adds the id.
		//id: minionIdCounter++,
		name: req.params.name,
		title: req.params.title,
		salary: req.params.salary
	};
	//minions.push(newMinion);
	res.status(201).send(addToDatabase(minions, newMinion));
});
apiRouter.put('/minions/:id', (req, res, next) => {
	if(minions[req.params.id]){
		const updatedMinion = {
			id: req.params.id,
			name: req.params.name,
			title: req.params.title,
			salary: req.params.salary
		}
		res.status(200).send(updateInstanceInDatabase(minions, updatedMinion));
	} else{
		res.status(404).send('Minion to update not found');
	}
});
apiRouter.delete('/minions/:id', (req, res, next) => {
	//const minionId = Number(req.params.id);
	// if(minions[req.params.id]){
	// 	minions[req.params.id] = null;
	// 	res.status(204).send();
	// } 
	if(deleteFromDatabasebyId(minions, req.params.id)){
		res.status(204).send();
	}
	else{
		res.status(404).send('Couldn\'t find minion to delete.');
	}

});
//IDEAS
apiRouter.get('/ideas', (req, res, next) => {
	if(getAllFromDatabase(ideas)){
	res.send(getAllFromDatabase(ideas));
  }
});
apiRouter.get('/ideas/:id', (req, res, next) => {
	if(getFromDatabaseById(ideas, req.params.id) !== -1){
		res.status(200).send(getFromDatabaseById(ideas, req.params.id));
	} else{
		res.status(404).send('Ideas with that ID is not found.');
	}
});
apiRouter.post('/ideas', (req, res, next) => {
	const newIdea = {
		//addToDatabase adds the id.
		//id: minionIdCounter++,
		name: req.params.name,
		description: req.params.description,
		numWeeks: req.params.numWeeks,
		weeklyRevenue: req.params.weeklyRevenue
	};
	//minions.push(newMinion);
	res.status(201).send(addToDatabase(ideas, newIdea));
});
apiRouter.put('/ideas/:id', (req, res, next) => {
	if(ideas[req.params.id]){
		const updatedIdea = {
			id: req.params.id,
			name: req.params.name,
			description: req.params.description,
			numWeeks: req.params.numWeeks,
			weeklyRevenue: req.params.weeklyRevenue
		}
		res.status(200).send(updateInstanceInDatabase(ideas, updatedIdea));
	} else{
		res.status(404).send('Idea to update not found');
	}
});
apiRouter.delete('/ideas/:id', (req, res, next) => {
	if(deleteFromDatabasebyId(ideas, req.params.id)){
		res.status(204).send();
	}
	else{
		res.status(404).send('Couldn\'t find idea to delete.');
	}
});
//MEETINGS
apiRouter.get('/meetings', (req, res, next) => {
	if(getAllFromDatabase(meetings)){
	res.send(getAllFromDatabase(meetings));
  }
});
apiRouter.post('/meetings', (req, res, next) => {
	const newMeeting = {
		time: req.params.time,
		date: req.params.Date(),
		day: req.params.day,
		note: req.params.note
	};
	//minions.push(newMinion);
	res.status(201).send(addToDatabase(meetings, newMeeting));
});
apiRouter.delete('/meetings', (req, res, next) => {
	deleteAllFromDatabase(meetings);
	res.status(204).send();
})

module.exports = apiRouter;
