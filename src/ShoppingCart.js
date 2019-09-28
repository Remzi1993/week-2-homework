// console.log('Hello!');

module.exports = class ShoppingCart {
    constructor() {
        this.cart = []
    }
    getItems() {
        return this.cart
    }
    addItem(itemName, quantity, price) {
        this.cart.push({
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
        })
    }
    clear() {
        this.cart = []
    }
    total() {
        // console.log('This method does work!');

        const currentCart = this.cart

        // console.log('Our cart', currentCart);

        const arrayOfQuantities = currentCart.map(a => a.quantity);
        const arrayOfpricePerUnit = currentCart.map(a => a.pricePerUnit);

        // console.log('Quantities', arrayOfQuantities);
        // console.log('pricePerUnit', arrayOfpricePerUnit);

        const sumOfCostCartItem = arrayOfQuantities.map(function (quantity, index) {
            return quantity * arrayOfpricePerUnit[index];
        });

        // console.log('Total sum of cost each cart item', sumOfCostCartItem);

        const values = sumOfCostCartItem
        const result = values.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0)

        // console.log(result);

        return result // return the total value of the shopping cart
    }
}