import express, { Request, Response } from 'express'
import { Users, user } from '../models/users'
import jwt from 'jsonwebtoken';


const userr = new user()

const index = async (_req: Request, res: Response) => {
    const users = await userr.index()
    res.json(users)
}

const show = async (req: Request, res: Response) => {
    const users = await userr.show(req.body.id)
    res.json(users)
}

const create = async (req: Request, res: Response) => {
    try {
        const users: Users = {
            fname: req.body.fname,
            lname: req.body.lname,
            passwords: req.body.passwords,
        }

        const newuser = await userr.create(users)
        var token = jwt.sign({ users: newuser }, process.env.TOKEN_SECRET);

        res.json(newuser)
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}

const destroy = async (req: Request, res: Response) => {
    const deleted = await userr.delete(req.body.id)
    res.json(deleted)
}

const usersRoutes = (app: express.Application) => {
    app.get('/users', index)
    app.get('/users/:id', show)
    app.post('/users', create)
    app.delete('/users', destroy)
}
const authenticate = async (req: Request, res: Response) => {
    const users: Users = {
        id: req.body.id,
        fname: req.body.fname,
        lname: req.body.lname,

        passwords: req.body.passwords

    }
    try {
        const u = await userr.authenticate(users.id, users.passwords)
        var token = jwt.sign({ users: u }, process.env.TOKEN_SECRET);
        res.json(token)
    } catch (error) {
        res.status(401)
        res.json({ error })
    }
}
export default usersRoutes