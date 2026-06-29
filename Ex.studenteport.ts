const sname:string = Ali;
const sID:number = 19;
const sage:number = 12345;
const spass:boolean = true;

function studentReport(n:string, id:number, a:number, p:boolean):
 string{ return "Student Report " + "| Name: " + n +  " | ID: " + id + "| Age: " + a + " | Passed: " + p};

const result = studentReport("Amir",12345, 20, true)
console.log = result;