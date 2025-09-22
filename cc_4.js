let products=[
    {name:"glue", catagory:"crafts", Price: 4.99, inventory:90},
    {name:"tires", catagory:"cars", Price:60.00, inventory:25},                       
    {name:"laptop", catagory:"electronics", Price:849.99, inventory:40},
    {name:"wood", catagory:"materials", Price:16.99, inventory:70},
    {name:"soup", catagory:"food", Price:3.99, inventory:60}
]
console.log(products);

//Completed array with strings for 5 items.

for(let product of products){

{switch (product.catagory){
    case 'crafts':
        product.Price*=.8
    break;
    case 'cars':
        product.Price*=.85
    break;
    case 'electronics':
    case 'materials':   
        product.Price*=.9
    break;
    default:
        discount="no discount"
}
}

//completed for...of loop inside switch statement.

console.log(products);}

const customerType=[
    "regular", "student", "senior"
]
console.log(products) 

 let discountPercentage = 0;

if("student"){
    discountPercentage = .05
}else if ("senior"){
    discountPercentage = .07
}else if ("regular"){
    discountPercentage = 0
}
    
console.log(products)

//if...else if statement completed for the type of customer.


let discountRate=.1
for (let i = 1; i <= 3; i++) {
  let total = 0;
  for (let product of products) {
    total += product.Price;
    product.inventory--;
  }
  let finalTotal = total * (1 - discountRate);
  console.log(`customer #${i}: $${finalTotal.toFixed(2)}`);
}

//For loop completed.

for (let key in products) {
    console.log(`my product is ${products[key].name}. It costs ${products[key].Price}`)
}


//for in statement, providing product name and cost based on the array value.

for (const [key, value] of Object.entries(products)) {
  console.log(`${key}: ${value}`);
}
console.log(products);

Object.entries(products);

console.log(products)
//Object entries completed.