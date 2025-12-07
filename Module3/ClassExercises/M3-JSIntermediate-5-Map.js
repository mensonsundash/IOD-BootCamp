let customer = {custName: "Smith", location: "Sydney"};

let order = {orderDescriptionL: "Iphone 17", orderDate: "2025-11-15"};

let customerOrderMap = new Map();

customerOrderMap.set(customer, order);

console.log(customerOrderMap.get(order));


