// Task 1: Object Properties 
const customerInfo={
    name:"John Doe",
    age:35,
    email:"john.doe@email.com" //fixed email typo 
}; //Declaring a customer object 

console.log(`Customer Name:${customerInfo.name}`); // Logging each property indidually.
console.log(`Customer Age:${customerInfo.age}`);
console.log(`Customer Email: ${customerInfo.email}`);

// Task 2: Object Methods 
const order = {
    orderId:12345,
    totalAmount:150,
    status:"Processing", // Declaring an object order with properties
// Method that will show the order details 
    displayOrder(){
        console.log(`Order Id: ${this.orderId}`);
            console.log(`Total Amount: $${this.totalAmount}`);
            console.log(`Order Status: ${this.status}`);     
        }
}; //Logged each individual so it's easier to read
order.displayOrder();//calling the method and logging the details

