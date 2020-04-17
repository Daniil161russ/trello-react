const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { userValidator } = require('./services/validators')
const userController = require('./controllers/users')


app.use(express.json());

app.post('/singup', userValidator, userController.createUser)

app.listen(4000, () => {
	console.log('Server started')
})