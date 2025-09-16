const products=[
    {name:"glue", catagory:["crafts"], Price:["$4.99"],Inventory:"90"},
    {name:"tires", catagory:["cars"], Price:["60.00"], Inventory:"25"},                       
    {name:"laptop", catagory:["electronics"], Price:["$849.99"], Inventory:"40"},
    {name:"wood", catagory:["materials"], Price:["$16.99"], Inventory:"70"},
    {name:"soup", catagory:["food"], Price:["$3.99"], Inventory:"100"}
]
console.log(products);

for(const discounts of products){


{switch (products.catagory){
    case 'crafts':
        discount="20% off"
    break;
    case 'cars':
        discount="15% off"
    break;
    case 'electronics':
    case 'materials':   
        discount="10% off"
    break;
    default:
        discount="no discount"
}
console.log('$[discounts] of items')}

console.log(products);}

const customerType=[
    "regular", "student", "serior"
]
console.log(products)
//if...else statement 