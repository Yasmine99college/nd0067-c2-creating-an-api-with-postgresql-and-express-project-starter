import { Order, order } from '../orders'

const ordertest = new order()

describe("Book Model", () => {
    it('should have an index method', () => {
        expect(ordertest.index).toBeDefined();
    });

    it('should have a show method', () => {
        expect(ordertest.index).toBeDefined();
    });

    it('should have a create method', () => {
        expect(ordertest.index).toBeDefined();
    });

    it('should have a update method', () => {
        expect(ordertest.index).toBeDefined();
    });

    it('should have a delete method', () => {
        expect(ordertest.index).toBeDefined();
    });

    it('create method should add a new order', async () => {
        const result = await ordertest.create({
    productID: 1,
    userID: 2,
    Qty: 10,
    status: 'active',
    id: undefined
});
        expect(result).toEqual({
            id: 1,
            productID: 1,
            userID: 2,
            Qty: 10,
            status: 'active'
        });
    });

    it('index method should return a orders', async () => {
        const result = await ordertest.index();
        expect(result).toEqual([{
            id: 1,
            productID: 1,
            userID: 2,
            Qty: 10,
            status: 'active'
        }]);
    });

    it('show method should return the chosen order', async () => {
        const result = await ordertest.show(1);
        expect(result).toEqual({
            id: 1,
            productID: 1,
            userID: 2,
            Qty: 10,
            status: 'active'
        });
    });

    it('delete method should remove the order', async () => {
        ordertest.delete(1);
        const result = await ordertest.index()

        expect(result).toEqual([]);
    });
});