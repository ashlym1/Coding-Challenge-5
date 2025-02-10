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
const prices= [100,200,300] // using const because the prices will not be changing
const discountPrices= prices.map(price=>price-(price*0.10)); // Applying a 10 % discount 
console.log("Discounted Prices: ", discountPrices);// Amount after discount is applied 

// Task 5: Filter Method 
let inventory= [10,15,50,90,30];// List of 5 product quantities
let availableProducts= inventory.filter(stock=>stock>0);//  filtering  out 0 stock
console.log(availableProducts); 

//Task 6- Reduce Method 
let sales=[500,300,200,400] //Declaring an array of sales
let totalRevenue = sales.reduce((total, sale) => total + sale,0);// 
console.log(totalRevenue); //loogging the total revenue to the console

//Task 7- Find() Mthods 
let customers = ["Alice","Bob","Charlie", "David"];  // Array of customers 
const foundCustomer = customers.find(name => name === "Charlie");  // Finding Charlie 
console.log("Found Customer:", foundCustomer); // logging the result :)

//Task 8 - Function Declaration
function calculateTax(amount,taxRate) { 
    return amount * taxRate}; 
let taxamount=calculatedTax(80,0.5)
console.log('Calculated tax is:${tax}');  

//Task 9 : Function Expression
 const applyDiscount= function(price,discount) { return price-price *discount};
 console.log("Discounted Price : " + applyDiscount(80, 0.15)); // discounted price, if they order $80 they get 15% off

//Task 10: Arrow Functions
 const calculatedPoints= (purchaseAmount) => {
  let points = Math.floor(purchaseAmount /10); //  Rerturning 1 point per $10 spent 
  console.log("Points Earned!:",points ) ;
calculatedPoints(80); } ; 
    