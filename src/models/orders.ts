import Client from '../database'

export type Order={
    id: number | undefined;
    productID: number;
    userID: number;
    Qty: number;
    status: string;

}
export class order {
    //return a PROMISE of the array not the array itself
    async index(): Promise<Order[]> {
        try {
            //establish a connection with db
            const conn = await Client.connect()
            const sql = 'SELECT* FROM Orders'
            //run the query on db
            const result = await conn.query(sql)
            //close the conn
            conn.release()
            return result.rows
        } catch (err) {
            throw new Error(`cannot get orders ${err}`)

        } 
    }
    async show(id: number): Promise<Order[]> {
        try {
            const sql = 'SELECT * FROM Orders WHERE id=($1)'
            // @ts-ignore
            const conn = await Client.connect()

            const result = await conn.query(sql, [id])

            conn.release()

            return result.rows[0]
        } catch (err) {
            throw new Error(`Could not find order ${id}. Error: ${err}`)
        }
    }




    

    async create(o: Order): Promise<Order> {
        try {
            const sql = 'INSERT INTO Orders (productID, userID, Qty, status) VALUES($1, $2, $3, $4) RETURNING *'
            // @ts-ignore
            const conn = await Client.connect()

            const result = await conn
                .query(sql, [o.id, o.productID, o.userID, o.Qty,o.status])

            const ord = result.rows[0]

            conn.release()

            return ord 
        } catch (err) {
            throw new Error(`Could not add new Order . Error: ${err}`)
        }
    }

    async delete(id: number): Promise<Order> {
        try {
            const sql = 'DELETE FROM Orders WHERE id=($1)'
            // @ts-ignore
            const conn = await Client.connect()

            const result = await conn.query(sql, [id])

            const ord = result.rows[0]

            conn.release()

            return ord
        } catch (err) {
            throw new Error(`Could not delete Orders ${id}. Error: ${err}`)
        }
    }
}



