const actionsRouter = require('express').Router();
const knex = require('knex');


const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development);



//GET:

actionsRouter.get('/', (req, res) => {
	db('actions')
		.then((action) => {
			res.status(200).json(action);
		})
		.catch((error) => {
			res.status(500).json(error);
		});
});



// // POST:

actionsRouter.post('/', (req, res) => {
	db('actions')
		.insert(req.body)
		.then((actionId) => {
			const [ id ] = actionId;
			db('actions').where({ id }).first().then((action) => {
				res.status(201).json(action);
			});
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});




module.exports = actionsRouter;