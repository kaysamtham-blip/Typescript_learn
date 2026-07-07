interface Package {
readonly trackingno: string;
weight?: number;
destination: string;
}

interface MaintenanceTask {
readonly machineID: string;
priority: string;
 estimatedHours: number;
}

type cargo = Package|MaintnanceTask;

const handleCargo(item:unknown ) => {
 if ("trackingno" in item){
  if (item.weight!== undefined){
  console.log("Processing package " + item.trackingno + "with weight: " + item.weight + "."))
  }
  else {
   console.log("Processing package " + item.trackingno + "with weight: unknown")
  }
 }
 else if("machineID" && "priority" in item) {
 console.log("Fixing machine " + item.machineID +"with priority: " + item.priority+ ".")
 }