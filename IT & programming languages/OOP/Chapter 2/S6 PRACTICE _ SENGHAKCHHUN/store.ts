class Store {
    name: string;
    products: Product[] = [];
    customers: Customer[] = [];
    constructor(name: string) {
        this.name = name;
    }
    setProduct(namePro: Product) {
        this.products.push(namePro)
    }
    addCustomer(cust: Customer) {
        this.customers.push(cust);
    }
    getFeedbackCOntaining(name: string) {
        this.products.forEach(element => {
            this.products.forEach(element => {
                if (element.name == name) {
                    console.log(element.feedback)
                }
            });
        });
    }
    getProductLessThan(price: number) {
        this.products.forEach(element => {
            if (element.price < price) {
                console.log(element)
            }
        });
    }
    getCustomerComments(name: string) {
        this.products.forEach(element => {
            if (element.name == name) {
                element.feedback.forEach(value =>{
                    console.log(value.comment)
                })
            }
        });
    }
}

class Product {
    name: string;
    price: number;
    feedback: Feedback[] = [];
    constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }
    setFeedback(feedback: Feedback) {
        this.feedback.push(feedback);
    }
}

class Customer {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Feedback {
    comment: string;
    evaluation: number;
    customer: Customer[] = [];
    constructor(comment: string, evaluation: number) {
        this.comment = comment;
        this.evaluation = evaluation;
    }
    setCustomer(cust: Customer) {
        this.customer.push(cust);
    }
}

let productOne = new Product("Banana", 100);
let productTwo = new Product("Apple", 200);
let store = new Store("Fruist shop");
let feed = new Feedback("It sweet and good", 5);
let User = new Customer("Lisa", "bobo");

store.addCustomer(User);
store.setProduct(productOne);
store.setProduct(productTwo);
feed.setCustomer(User);
productOne.setFeedback(feed);
productTwo.setFeedback(feed);

console.log(store.getProductLessThan(120))