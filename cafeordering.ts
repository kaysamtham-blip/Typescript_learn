const processSearch(input:string|number):string => {
 if(typeof input === string) {
 console.log("Searching for product name: " + input)
 }
 else if(typeof input === number) {
 console.log("Looking up product ID: " + input)
 }
}

const order (mknn:string; price:number; category:string):string[] [
{mknn:"coffee", price:5, category:"food"},
{mknn:"burger", price:15, category:"drink"},
{mknn:"tea", price:3, category:"drink"},
{mknn:"pizza", price:20,category:"food"}
]

//only want to see food name
const fooditem:string=order.filter((f)=>f.category==="food")
console.log(fooditem)

//only display food and drinks name
const allname:string=order.map((n)=>n===mknn) 
console.log(allname)

//sum all orders
const total:number=order.reduce((sum,currentp)=>sum+currentp.price, 0)
console.log(total)



//CORRECTION
(line22)
const allname:string=order.map((n)=>n===n.mknn)
(line18)(line22)(line26) -add [] array sign
const fooditem:string=order.filter((f)=>f.category==="food")