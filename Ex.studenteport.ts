const sname:string = Ali;
const sID:number = 19;
const sage:number = 12345;
const spass:boolean = true;

function studentReport(n:string, id:number, a:number, p:boolean):
 string{ return "Student Report " + "| Name: " + n +  " | ID: " + id + "| Age: " + a + " | Passed: " + p};

if(sage<18)
{console.error("Your age is below 18!")};
if(spass == false)
{console.warn("You did not pass1")};

const result = studentReport("Amir",12345, 20, true)
console.log = result;


//CORRECTION
  console.log = result; -- wrong
  Ans: console.log(result);

  //careless mistake
  //initialize values of sID and sage are another way round

  //initialize is unnecessary
  //start without the initialize part, the else remain
   or
  //initialize
   const result = studentReport(sname, sID, sage, spass)
   console.log(result);

  //{....;} -- wrong
  {....};

  //postion of {} is unpleasant in the if condition
  {
   if()
   }