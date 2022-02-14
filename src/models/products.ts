import Client from '../database'

export type Products={
    id: Number;
    name: string; 
    price: Number;
    category: string; 

}
export class product{
    //return a PROMISE of the array not the array itself
    async index(): Promise<Products[]>{
   try {
            //establish a connection with db
            const conn = await Client.connect()
       const sql = 'SELECT * FROM Product'
            //run the query on db
            const result=await conn.query(sql)
            //close the conn
            conn.release()
            return result.rows
   } catch (err) {throw new Error(`cannot get products ${err}`)
       
   }
     }


     async show(id: number): Promise<Products[]> {
          try {
               const sql = 'SELECT * FROM Product WHERE id=($1)'
               // @ts-ignore
               const conn = await Client.connect()

               const result = await conn.query(sql, [id])

               conn.release()

               return result.rows[0]
          } catch (err) {
               throw new Error(`Could not find product with id ${id}. Error: ${err}`)
          }
     }











     
     async create(p: Products): Promise<Products[]> {
          try {
               const sql = 'INSERT INTO Product (name, price, category) VALUES($1, $2, $3) RETURNING *'
               if (p.category=='')
               {
                    p.category=''
                    }
               // @ts-ignore
               const conn = await Client.connect()

               const result = await conn
                    .query(sql, [p.id,p.name, p.price, p.category])

               const cprod = result.rows[0]

               conn.release()

               return cprod
          } catch (err) {
               throw new Error(`Could not add new product. Error: ${err}`)
          }
     }

     async delete(id: number): Promise<Products[]> {
          try {
               const sql = 'DELETE FROM Product WHERE id=($1)'
               // @ts-ignore
               const conn = await Client.connect()

               const result = await conn.query(sql, [id])

               const product = result.rows[0]

               conn.release()

               return product
          } catch (err) {
               throw new Error(`Could not delete product ${id}. Error: ${err}`)
          }
     }
}
       
   

