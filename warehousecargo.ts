interface Package {
readonly trackingno: string;
const weight?: number;
const destination: string;
}

interface MaintenanceTask {
readonly machineID: string;
const priority: string;
const etimatedHours;
}

type cargo = Package|MaintnanceTask;

const handleCargo(item:unknown ) => {
 if ("trackingno" in item){
  if (item.weight!== undefined){
  console.log("Processing package " + trackingno + "with weight: " + item.weight + "."))
  }
  else {
  "Processing package " + trackingno + "with weight: unknown")
  }
 else if("machineID" && "priority" in item) {
 console.log("Fixing machine " + item.machineID +"with priority: " + item.priority+ ".")