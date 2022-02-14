import express, { Request, Response } from 'express'
import { Order, order } from '../models/orders'

const ord = new order()

const index = async (_req: Request, res: Response) => {
    const ordersList = await ord.index()
    res.json(ordersList)
}

const show = async (req: Request, res: Response) => {
    const ordersList = await ord.show(req.body.id)
    res.json(ordersList)
}

const create = async (req: Request, res: Response) => {
    try {
        const ordersList: Order = {
            productID: req.body.productID,
            userID: req.body.userID,
            Qty: req.body.Qty,
            status: req.body.status

        }

        const neworder = await ord.create(ordersList)
        res.json(neworder)
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}

const destroy = async (req: Request, res: Response) => {
    const deleted = await ord.delete(req.body.id)
    res.json(deleted)
}

const ordersRoutes = (app: express.Application) => {
    app.get('/ordersList', index)
    app.get('/ordersList/:id', show)
    app.post('/ordersList', create)
    app.delete('/ordersList', destroy)
}

export default ordersRoutes