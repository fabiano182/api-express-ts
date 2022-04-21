import User from '../models/users'
import { Request, Response } from 'express'

class UserController {

    public async create (req: Request, res: Response): Promise<Response> {
        const users: User = {
            id: +req.params.id,
            name: "alice",
            email: "alice@email",
            joinedAt: new Date,
            active: true,
        }

        return res.json(users)
    }

    public async read (req: Request, res: Response): Promise<Response> {
        const users: User = {
            id: +req.params.id,
            name: "alice",
            email: "alice@email",
            joinedAt: new Date,
            active: true,
        }

        return res.json(users)
    }

    public async readAll (req: Request, res: Response): Promise<Response> {
        const users: User[] = [{
            id: 0,
            name: "alice",
            email: "alice@email",
            joinedAt: new Date,
            active: true,
        },
        {
            id: 0,
            name: "bob",
            email: "bob@email",
            joinedAt: new Date,
            active: true,
        }]

        return res.json(users)
    }

    public async update (req: Request, res: Response): Promise<Response> {
        const users: User = {
            id: +req.params.id,
            name: "alice2",
            email: "alice@email",
            joinedAt: new Date,
            active: true,
        }

        return res.json(users)
    }

    public async delete (req: Request, res: Response): Promise<Response> {
        const users: User = {
            id: +req.params.id,
            name: "alice",
            email: "alice@email",
            joinedAt: new Date,
            active: false,
        }

        return res.json(users)
    }

}

export default new UserController