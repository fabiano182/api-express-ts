import express from 'express'
import UserController from '../controllers/users'

const UsersRouter = express.Router()

UsersRouter.post('/users', UserController.create)

UsersRouter.get('/users/:id', UserController.read)

UsersRouter.get('/users', UserController.readAll)

UsersRouter.put('/users/:id', UserController.update)

UsersRouter.delete('/users/:id', UserController.delete)

export default UsersRouter