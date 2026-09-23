type cat = "needs" | "transport" | "entertainment" | "food" | "wishlists"

interface expense {
name: string;
amount: number;
isdeferred:boolean
date: string format: "2025-09" //(year-month)
category: cat;
remark?: string;
}

const input: expense = prompt("Enter your expenses today!")

const obj: expense[] = [
{name: "ramen", amount: 5, isdeferred: false, date: "2026-07", category: "food"}
{name: "album", amount: 207, isdeferred: true, date: "2026-02", category: "wishlists", remark: "self-reward for driving license"}
{name: "grab", amount: 12, isdeferred: false, date: "2026-05", category: "transport", remark: "to hokkien association"}
{name: "tissue", amount: 10, isdeferred: false, date: "2026-06", category: "needs"}
{name: "jasmine milk tea", amount: 12, isdeferred: false, date: "2026-05", category: "entertainment"}
]

const listall: string = console.log(obj)

function list0 (obj:expense[], month:string): void {
 let sum = 0
 const bymonth = prompt("Enter date:")
 for(i=0; i<obj.length; i++) {
  if(expense[i].date===bymonth) {
   const sum = sum + expense[i].amount
  }
 }
 console.log("Your expenses in " + bymonth + "is RM " + sum)
}


const list1 = (a:expense[]):void => {
 return obj
 let sum1:number = 0
 for(i=0; i<obj.length; i++) {
  const choose:string[i] = a.filter((f)=>f.category=>"needs")
  console.log(choose[i])
  sum1 = sum1 + a.amount[i]
 }
 console.log(sum1)
}

const list2 = (b:expense[]): void => {
 return obj
 let sum2:number = 0
 for(i=0; i<obj.length; i++) {
  const choose:string[] = b.filter((f)=>f.category=>"transport")
  console.log(choose[i])
  sum2 = sum2 + a.amount[i]
 }
 console.log(sum2)
}

const list3 = (c:expense[]): void => {
 return obj
 let sum3:number = 0
 for(i=0; i<obj.length; i++) {
  const choose:string[i] = c.filter((f)=>f.category=>"entertainment")
  console.log(choose[i])
  sum3 = sum3 + a.amount[i]
 }
 console.log(sum3)
}

const list4 = (d:expense[]): void => {
 return obj
 let sum4:number = 0
 for(i=1; i<=obj.length; i++) {
  const choose:string[i] = d.filter((f)=>f.category=>"food")
  console.log(choose[i])
  sum4 = sum4 + a.amount[i]
 }
 console.log(sum4)
}

const list5 = (e:expense): void => {
 return obj
 let sum5:number = 0
 for(i=1; i<=obj.length; i++) {
  const choose:string[i] = e.filter((f)=>f.category=>"wishlist")
  console.log(choose[i])
  sum5 = sum5 + e.amount[i]
 }
 console.log(sum5)
}

let exp:string = expense.name[0]
let expn:number = expense.amount[0]
for(i=1; i<=obj.length; i++) {
 if(expense.amount[i]>expn) {
  expn = expense.amount[i]
  exp = expense.name[i]
 }
 else {
  exp = exp
  expn = expn
 }
}
console.log("Most expensive item: " + exp + "with price: RM " + expn)
✅ Add expense (amount, category, remark)
✅ List all expenses
✅ Calculate total by category
✅ Filter by category
✅ Find most expensive item
✅ Flag expenses with remarks for "next month"