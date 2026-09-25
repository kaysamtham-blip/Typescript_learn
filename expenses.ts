type cat = "needs" | "transport" | "entertainment" | "food" | "wishlists"

interface expense {
name: string;
amount: number;
isdeferred:boolean
date: string  //format: "2025-09" (year-month)
category: cat;
remark?: string;
}

const obj: expense[] = [
{name: "ramen", amount: 5, isdeferred: false, date: "2026-07", category: "food"},
{name: "album", amount: 207, isdeferred: true, date: "2026-02", category: "wishlists", remark: "self-reward for driving license"},
{name: "grab", amount: 12, isdeferred: false, date: "2026-05", category: "transport", remark: "to hokkien association"},
{name: "tissue", amount: 10, isdeferred: false, date: "2026-06", category: "needs"},
{name: "jasmine milk tea", amount: 12, isdeferred: false, date: "2026-05", category: "entertainment"}
]

console.log(obj)

function list0 (obj:expense[]): void {
 let sum = 0
 const bymonth = prompt("Enter date:")
 for(i=0; i<obj.length; i++) {
  if(obj[i].date===bymonth) {
   const sum += obj=[i].amount
  }
 }
 console.log("Your expenses in " + bymonth + "is RM " + sum)
}

const list = (obj:expense[], cate:cat): void => {
 let sum: number = 0
 const filtered:expense[] = obj.filter((f)=>f.category===cate)
 for(let i=0; i<filtered.length; i++) {
  console.log(filtered[i].name + "| RM" + filtered[i].amount)
  sum += filtered([i].amount
 }
 console.log("Total: RM" + sum)
}

let exp:string = obj[0].name
let expn:number = obj[0].amount
for(i=1; i<obj.length; i++) {
   if(obj[i].amount>expn) {
  expn = obj[i].amount
  exp = obj[i].name
 }
}
console.log("Most expensive item: " + exp + "with price: RM " + expn)

list0(obj)
list(obj,"needs")
list(obj,"transport")

✅ Add expense (amount, category, remark)
✅ List all expenses
✅ Calculate total by category
✅ Filter by category
✅ Find most expensive item
✅ Flag expenses with remarks for "next month"