interface Package {
trackingno=string;
weight=number;
}

interface Maintenancetask {
machineID=string;
isCritical=boolean;
}

type CBitem= Package|Maintenancetask

const processCItem (item:Package|Maintenancetask) => {
if(item.weight!== undefined) {
console.log("BILLING: Charging for package " + trackingno + "with weight " + weight + "kg.")
}
else {
console.log("DISPATCH: Sending item to machine " + machineID + ". Critical: " + isCritical + ".")
}
}

const box = {trackingno:"RHE345", weight:9}
const job = {machineID="KFK77593202", isCritical=true}

processCItem(box)
processCItem(job)



//CORRECTION
 (line15)
- console.log("BILLING: Charging for package " + item.trackingno + "with weight " + item.weight + "kg.")
 (line18)
- console.log("DISPATCH: Sending item to machine " + item.machineID + ". Critical: " + item.isCritical + ".")
 //bcs under function, we use "item" as parameter to represent the interfaces so variables under the function should add "item."
 //interface is just a blueprint but not a data, computer do not include them in operation so you have to link it yourself with a variable in a function to define them