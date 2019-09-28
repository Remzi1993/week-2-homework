/*

Assignment 1: ShoppingCart
1. You must create a module named ShoppingCart. The module must export a class! In other words your module.exports is not an object,
a string, or anything else, but only a class.

2. Given a brand new instance of the class in a variable cart, calling cart.getItems() should return an empty array.

3. The class should have a method cart.addItem(itemName, quantity, price), which adds a new item to an internal array.

4. After adding items, a call to cart.getItems() should return an array that includes the added items.

5. Items in the array should be in this format:
{
  name: "Name of the item",
  quantity: 1,
  pricePerUnit: 99.99
}

6. Calling cart.clear() should remove all items from the items array. Meaning, the next call to getItems() should return an empty array.

7. Calling cart.total() should return the total value of the shopping cart. Meaning, the sum of the cost of each cart item.
The cost of each item is its pricePerUnit multiplied by the quantity. Use reduce!

*/


// console.log('Hello!');


const cart = class ShoppingCart {
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
    /*
    Calling cart.total() should return the total value of the shopping cart. Meaning, the sum of the cost of each cart item.
    
    The cost of each item is its pricePerUnit multiplied by the quantity. Use reduce!
    */
    total() {
        // console.log('This method does work!');

        const currentCart = this.cart

        // console.log('Our cart', currentCart);

        let arrayOfQuantities = currentCart.map(a => a.quantity);
        let arrayOfpricePerUnit = currentCart.map(a => a.pricePerUnit);

        // console.log('Quantities', arrayOfQuantities);
        // console.log('pricePerUnit', arrayOfpricePerUnit);


        let sumOfCostCartItem = arrayOfQuantities.map(function (quantity, index) {
            return quantity * arrayOfpricePerUnit[index];
        });

        // console.log('Total sum of cost each cart item', sumOfCostCartItem);


        const initialValue = 0
        const values = sumOfCostCartItem

        const result = values.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        }, initialValue)

        // console.log(result);


        return result // return the total value of the shopping cart
    }


}


module.exports = cart