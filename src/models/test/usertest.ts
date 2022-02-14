import { Users, user } from '../users'

const u = new user()

describe("User", () => {
    it('should have an index method', () => {
        expect(u.index).toBeDefined();
    });

    it('should have a show method', () => {
        expect(u.show).toBeDefined();
    });

    it('should have a create method', () => {
        expect(u.create).toBeDefined();
    });

    // it('should have a update method', () => {
    //     expect(u.).toBeDefined();
    // });

    it('should have a delete method', () => {
        expect(u.delete).toBeDefined();
    });

    it('create method should add a user', async () => {
        const result = await u.create({
    fname: 'Alyana',
    lname: 'John',
            passwords: 'pass123',
    id: undefined
});
        expect(result).toEqual({
            id: 1,
            fname: 'Alyana',
            lname: 'John',
            passwords: 'pass123'
        });
    });

    it('index method should return a list of users', async () => {
        const result = await u.index();
        expect(result).toEqual([{
            id: 1,
            fname: 'Alyana',
            lname: 'John',
            passwords: 'pass123'
        }]);
    });

    it('show method should return the chosen user', async () => {
        const result = await u.show(1);
        expect(result).toEqual({
            id: 1,
            fname: 'Alyana',
            lname: 'John',
            passwords: 'pass123'
        });
    });

    it('delete method should remove the user', async () => {
        u.delete(1);
        const result = await u.index()

        expect(result).toEqual([]);
    });
});