const { User } = require('../models')
const { validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs')

function createUser(req, res, next) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() })
		}
		// res.send(req.body);
		User.findOne({where: {email: req.body.email }}).then(user => {
			if (user) {
				return Promise.reject({statusCode: 422, message: "This email is already used"});
			} else {
				const { login, email, password } = req.body;
				const salt = bcryptjs.genSaltSync(10);
				const passwordHash = bcryptjs.hashSync(password, salt)
				return User.create({login, email, password: passwordHash});
			}
		})
		.then(user => {
			res.json(user);
		})
		.catch( error => {
			res.status(error.statusCode || 400).json({error: error.message});
		})
}

module.exports = {
	createUser
}