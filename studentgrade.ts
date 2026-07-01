//apply function
function sum(a:number, b:number): number{
return a + b;
}
    
const max = (c:number,d:number)：number => 
if(c>d) {
return c;}
else {
return d;}

const even  = (e:number): boolean => {if(e%2 == 0) {return true;} else {return false;.}}
function calcgrade(score:number): string{
if(score<60){
return "C";
}
else if(score<=79){
return "B";
}
else {
return "A";
}
const studentGreeting = (name:string,title?:string):string => {return "Hello" + title + " " + name ;}

//call out all function
console.log(sum(1,2));
console.log(max(3,4));
console.log(even(5());
console.log(calcgrade(79));
console.log(studentGreeting("Dr","Chewy"));

if(calcgrade(79) == "C"){
console.warn("You have to improve!");
}



//CORRECTION
(line30)
 console.log("Chewy","Dr") ==> must follow parameter order=

(line5)
//must put {} after => for arrow function before you return.
 const max = (c:number,d:number)：number => {
 ...
 ...
 }