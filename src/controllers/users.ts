import User from '../models/users'
import { Request, Response } from 'express'
import usersRepository from '../database/users_helpers'

class UserController {

    public async create(req: Request, res: Response): Promise<void> {
        const user: User = req.body
        user.joinedAt = new Date
        user.active = true
        usersRepository.create(user, (id) => {
            if (id) {
                res.status(201).location(`/api/users/${id}`).send()
            } else {
                res.status(400).send()
            }
        })
    }

    public async read(req: Request, res: Response): Promise<void> {
        const id: number = +req.params.id

        usersRepository.read(id, (user) => {
            if (user) {
                res.json(user)
            } else {
                res.status(404).send()
            }
        })
    }

    public async readAll(req: Request, res: Response): Promise<void> {
        usersRepository.readAll((users) => {
            if (users) {
                res.json(users).send()
            } else {
                res.status(404).send()
            }
        })
    }

    public async update(req: Request, res: Response): Promise<void> {
        const id: number = +req.params.id
        const user: User = req.body

        usersRepository.update(id, user, (notFound) => {
            if (notFound) {
                res.status(404).send()
            } else {
                res.status(201).location(`/api/users/${id}`).send()
            }
        })
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const id: number = +req.params.id

        usersRepository.delete(id, (notFound) => {
            if (notFound) {
                res.status(404).send()
            } else {
                res.status(204).send()
            }
        })
    }

}

export default new UserController