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

//Task 3: Array Manipulation
let cartItems =["Matcha Latte", "Strawberry Pocky","pistacho Butter spread "]; // Creatting a shopping cart list
 cartItems.push("Green Tea KitKat");// Adding a new product to the cart 
cartItems.pop(); //Removing the last product in the cart
cartItems.unshift("Matcha perfume ");//Adding a new iteam to the beggining of the cart
cartItems.shift();//Removing the first item 
console.log("Final Cart Items:",cartItems) // Final array Shopping complete !

//Task 4- Price Adjustments 
const prices= [100,200,300] // using const because the prices will not be chaging.
const discountPrices= prices.map(price=>price-(price*0.10)); // Applying a 10 % discount 
console.log("Discounted Prices: ",discountPrices);// Amount after discount is applied 
