import { Products, product } from '../products'

const productstest = new product()

describe("Book Model", () => {
    it('should have an index method', () => {
        expect(productstest.index).toBeDefined();
    });

    it('should have a show method', () => {
        expect(productstest.index).toBeDefined();
    });

    it('should have a create method', () => {
        expect(productstest.index).toBeDefined();
    });

    it('should have a update method', () => {
        expect(productstest.index).toBeDefined();
    });

    it('should have a delete method', () => {
        expect(productstest.index).toBeDefined();
    });

    it('create method should add a product', async () => {
        const result = await productstest.create({
            id: 1,
            name: 'Qinoa',
            price: 250,
            category: 'health'
        });
        expect(result).toEqual({
            id: 1,
            name: 'Qinoa',
            price: 250,
            category: 'health'
        });
    });

    it('index method should return a list of products', async () => {
        const result = await productstest.index();
        expect(result).toEqual([{
            id: 1,
            name: 'Qinoa',
            price: 250,
            category: 'health'
        }]);
    });

    it('show method should return the correct book', async () => {
        const result = await productstest.show(1);
        expect(result).toEqual({
            id: "1",
            title: 'Bridge to Terabithia',
            total_pages: 250,
            author: 'Katherine Paterson',
            type: 'Childrens'
        });
    });

    it('delete method should remove the product', async () => {
        productstest.delete(1);
        const result = await productstest.index()

        expect(result).toEqual([]);
    });
});