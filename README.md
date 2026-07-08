# Typescript_learn
typescript beginner-learning process

【1. Primitive Types (The "Single Values")
These are the basic building blocks.
 ⁠string⁠: Text (e.g., ⁠"Hello"⁠).
 ⁠number⁠: Any number (integers or decimals).
 ⁠boolean⁠: ⁠true⁠ or ⁠false⁠.
 ⁠bigint⁠: Very large integers.
 ⁠symbol⁠: Unique identifiers.
 ⁠null⁠: Intentional empty value.
 ⁠undefined⁠: The "default" state of nothingness.
2. Object Types (The "Containers")
These are all the things that hold more than one value, or have properties.
 Objects & Interfaces: (Like your ⁠Package⁠ and ⁠MaintenanceTask⁠).
 Arrays: ⁠string[]⁠ or ⁠number[]⁠ (they are a special type of object).
 Functions: ⁠(a: number) => number⁠.
3. The "TypeScript Special" Types
These are types that only exist in TypeScript to help you manage your code during development:
 ⁠any⁠: The "turn off safety" type (we discussed why this is dangerous).
 ⁠unknown⁠: The "safe" version of ⁠any⁠ (the one that forces you to use ⁠typeof⁠ and ⁠in⁠).
 ⁠void⁠: Used for functions that do not ⁠return⁠ anything.
 ⁠never⁠: Used for functions that never finish (e.g., a function that always throws an error or runs forever).
 ⁠literal types⁠: You can restrict a type to a specific value, like ⁠let direction: "left" | "right";⁠

Enums: A way to give friendly names to a set of numbers (e.g., ⁠Status.Pending⁠).
Tuples: Arrays with a fixed number of items where each position has a specific type (e.g., ⁠[string, number]⁠).】



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
- [?] operator: used to show optional data, can be no value for that variable
- [unknown] vs [any] operator:
 -[unknown]: not clarified type when setting but have to clarify afterwards in the code before the output is processed
 -[any]: not clarified type for variables, can be any type, flexible to change data in any time. Compiler won't enforced type rules, no properties and suggestions given

8/7:
- In function, with vs without parameters:
 - with parameters: can insert new variables every time to operate the function and give different result based on parameters entered
 - without parameters: same output runs out everytime, function can independantly operate without input inserted
- [as] operator: notify and declare to compiler document
 - if("trackingno" in item ) {..}
   const isPackage = item as Package；
   console.log(isPackage.item)