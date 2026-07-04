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