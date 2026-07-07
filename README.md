# Typescript_learn
typescript beginner-learning process

27/6:
- define variable: const/let
- conduct an action: console.log/warn/error..
- format: [const/let variablename: define = value],[console.log("printed msg"/function/defined variable)]
- define function: function functionname(parameter(optional)){......}

29/6:
- function parameters is the input entered, can be variables defined(no need to mention type in parameters anymore) or variable define type on spot
- console.xx() not console.xx = 
- ; is not mandatory in typescript
- position of {} matters the formatting for typescript

30/6:
(continuation from 29/6)
- 3 type of functions
- normal:
 function grade(name:string,marks:number):string{...(return output)...}
 - normal with value given in parameters:
  function grade(name:string=Ali,marks:number=90):string{...(return output)}
- arrow function:
 const grade = (name:string. marks:number):string => {..(return output)...}
- void function
 function grade const grade = (name:string, marks:number):string / => {...(only output but no return output)...}
- returned output: raw output that can be manipulated after printed
 no returned output: output that is finalized, all operation settled in the function

4/7:
- define NOT with !
- define OR in type use |
- define OR in logic (if condition) use ||
- define AND in logic use &&
- combine use & (intersection operator)
- typeof help us and computer to verify the type of variables
 Eg: if(typeof input === "string")  console.log()....
     const cat = "meow";   console.log(typeof cat)

5/7:
- interface: a premise or background for a coding, not really a content of coding. Just building structure to define different group of objects
 interface words  {alphabet:string; noAlphabet:number}
- type: use to set and define rules, include type, interfaces,union (combination) and specific value/data. Once disobey in coding will be warned
 type word = string/words/(words|numbers)/"kangaroo"
- add parameter name for variables inside function bcs under function, we use "item" as parameter to represent the interfaces so variables under the function should add "item."
 function (item:string) {
(if item.word == "peace") {console.log(....)}

7/7:
- interface no need to write const when created those variables
- [in] operator: variable checked must put "" as [in] define only string format
- [readonly] operator: standardize the value of certain variable, if value of variable change, error occur
 - readonly grav: number=9.82;  grav=10 => error occur