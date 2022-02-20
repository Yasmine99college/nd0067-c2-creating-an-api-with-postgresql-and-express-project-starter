import Client from '../database'
import bcrypt from 'bcrypt'


export type Users={
    id: number | undefined;
    fname: string;
    lname: string;
    passwords: string;

}
export class user {
    //return a PROMISE of the array not the array itself
    async index(): Promise<Users[]> {
        try {
            //establish a connection with db
            const conn = await Client.connect()
            const sql = 'SELECT * FROM User'
            //run the query on db
            const result = await conn.query(sql)
            //close the conn
            conn.release()
            return result.rows
        } catch (err) {
            throw new Error(`cannot get products ${err}`)

        } 
    }
    async show(id: number): Promise<Users[]> {
        try {
            const sql = 'SELECT * FROM User WHERE id=($1)'
            // @ts-ignore
            const conn = await Client.connect()

            const result = await conn.query(sql, [id])

            conn.release()

            return result.rows[0]
        } catch (err) {
            throw new Error(`Could not find User ${id}. Error: ${err}`)
        }
    }







    
    async create(u: Users): Promise<Users> {
        try {
            const sql = 'INSERT INTO User ( fname, lname, passwords) VALUES($1, $2, $3) RETURNING *'
            // @ts-ignore
            const conn = await Client.connect()
            const hash = bcrypt.hashSync(
                u.passwords + pepper,
                parseInt(saltRounds)
            );

            const result = await conn
                .query(sql, [u.id, hash,  u.fname, u.lname])

            const users = result.rows[0]

            conn.release()

            return users
        } catch (err) {
            throw new Error(`Could not add new User . Error: ${err}`)
        }
    }

    async delete(id: number): Promise<Users> {
        try {
            const sql = 'DELETE FROM User WHERE id=($1)'
            // @ts-ignore
            const conn = await Client.connect()

            const result = await conn.query(sql, [id])

            const users = result.rows[0]

            conn.release()

            return users
        } catch (err) {
            throw new Error(`Could not delete User ${id}. Error: ${err}`)
        }
    }
    async authenticate(id: number, passwords: string): Promise<Users | null> {
        const conn = await Client.connect()
        const sql = 'SELECT passwords FROM User WHERE id=($1)'

        const result = await conn.query(sql, [id])

        // console.log(passwords + pepper)

        if (result.rows.length) {

            const user = result.rows[0]

            console.log(user)

            if (bcrypt.compareSync(passwords + pepper, user.passwords)) {
                return user
            }
        }

        return null
    }
}



