const processSearch(input:string|number):string => {
 if(typeof input === string) {
 console.log("Searching for product name: " + input)
 }
 else if(typeof input === number) {
 console.log("Looking up product ID: " + input)
 }
}

function order (mknn:string; price:number; category:string):string[] [
{mknn:"coffee", price:5, category:"food"},
{mknn:"burger", price:15, category:"drink"},
{mknn:"tea", price:3, category:"drink"},
{mknn:"pizza", price:20,category:"food"}
]

//only want to see food name
const fooditem:string=order.filter((f)=>f.category===food)
console.log(fooditem)

//only display food and drinks name
const allname:string=order.map((n)=>n===mknn)
console.log(allname)

//sum all orders
const total:number=order.reduce((sum,currentp)=>sum+currentp, 0)
console.log(total)


1. Define the Function: Create a function named ⁠processSearch⁠ that accepts one parameter named ⁠input⁠.
2. Apply Union Types: Set the type of ⁠input⁠ to be ⁠string | number⁠.
3. Type Narrowing: Inside your function, use an ⁠if⁠ statement with ⁠typeof⁠ to check the type of ⁠input⁠:
 If it is a ⁠string⁠, ⁠console.log⁠ this exact message: ⁠"Searching for product name: " + input⁠.
 If it is a ⁠number⁠, ⁠console.log⁠ this exact message: ⁠"Looking up product ID: " + input⁠.
4. Test the Logic: After you define the fun
