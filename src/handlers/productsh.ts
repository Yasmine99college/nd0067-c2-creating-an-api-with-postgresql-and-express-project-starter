import express, { Request, Response } from 'express'
import { Products, product } from '../models/products'
 
const prod = new product()

const index = async (_req: Request, res: Response) => {
    const productStore = await prod.index()
    res.json(productStore)
}

const show = async (req: Request, res: Response) => {
    const productStore = await prod.show(req.body.id)
    res.json(productStore)
}

const create = async (req: Request, res: Response) => {
    try {
        const productStore: Products = {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
        }

        const newprod = await prod.create(productStore)
        res.json(newprod)
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}

const destroy = async (req: Request, res: Response) => {
    const deleted = await prod.delete(req.body.id)
    res.json(deleted)
}

const productsRoutes = (app: express.Application) => {
    app.get('/productStore', index)
    app.get('/productStore/:id', show)
    app.post('/productStore', create)
    app.delete('/productStore', destroy)
}

export default productsRoutes