const projectsRouter = require('express').Router();
const knex = require('knex');


const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development);

//GET:

projectsRouter.get('/', (req, res) => {
	db('projects')
		.then((project) => {
			res.status(200).json(project);
		})
		.catch((error) => {
			res.status(500).json(error);
		});
});

// GET by Id:

projectsRouter.get('/:id', (req, res) => {
	db('projects')
		.where({ id: req.params.id })
		.then((project) => {
			res.status(200).json(project);
		})
		.catch((error) => {
			res.status(500).json(error);
		});
});





// POST:

projectsRouter.post('/', (req, res) => {
	db('projects')
		.insert(req.body)
		.then((projectId) => {
			const [ id ] = projectId;
			db('projects').where({ id }).first().then((project) => {
				res.status(201).json(project);
			});
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});




module.exports = projectsRouter; 