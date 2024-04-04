class ShoppingCart {
    private items: Item[] = [];

    /**
     * Add an item to the shopping cart
     * @param itemName the name of the item
     * @param quantity the quantity of the item
     * @return the created item
     */
    addItem(itemName: string, quantity: number): Item {
        // Todo
        

    }

    /**
     * Get all items in the shopping cart
     * @return an array of items
     */
    getItems(): Item[] {
        return this.items;
    }
}

class Item {
    constructor(private name: string, private quantity: number, private cart: ShoppingCart) { }

    /**
     * Get the name of the item
     * @return the name of the item
     */
    getName(): string {
        return this.name;
    }

    /**
     * Get the quantity of the item
     * @return the quantity of the item
     */
    getQuantity(): number {
        return this.quantity;
    }
}

// MAIN
let cart = new ShoppingCart();
let item1 = cart.addItem("Book", 2);
let item2 = cart.addItem("Phone", 1);
console.log(cart.getItems());

