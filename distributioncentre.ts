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