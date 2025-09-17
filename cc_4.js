const products=[
    {name:"glue", catagory:"crafts", Price: 4.99,Inventory:"90"},
    {name:"tires", catagory:"cars", Price:60.00, Inventory:"25"},                       
    {name:"laptop", catagory:"electronics", Price:849.99, Inventory:"40"},
    {name:"wood", catagory:"materials", Price:16.99, Inventory:"70"},
    {name:"soup", catagory:"food", Price:3.99, Inventory:"100"}
]
console.log(products);

for(const product of products){

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
console.log('$[discounts] of items')}

console.log(products);}

const customerType=[
    "regular", "student", "senior"
]
console.log(products)
if("student"){
    //find how to get the 5% discount
}else if ("senior"){
    "7% off total"
}else{
    "no discount"
}
    
console.log(products)

let discountRate=.1
for (let i = 1; i <= 3; i++) {
  let total = 0;
  for (let product of products) {
    total += product.price;
    product.inventory--;
  }
  let finalTotal = total * (1 - discountRate);
  console.log(`customer #${i}: $${finalTotal.toFixed(2)}`);
}

//for loop statement