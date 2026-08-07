type cat = "needs" | "transport" | "entertainment" | "food" | "wishlists"

interface expense {
name: string;
amount: number;
isdeferred:boolean
date: string format: "2025-09" (year-month)
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

const list = (a:expense):return => {
 return obj
 const choose:expense = a.filter((f)=>f.category=>"needs")
 return choose
}