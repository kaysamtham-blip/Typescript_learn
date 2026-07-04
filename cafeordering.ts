function processSearch(input:string):string(

1. Define the Function: Create a function named ⁠processSearch⁠ that accepts one parameter named ⁠input⁠.
2. Apply Union Types: Set the type of ⁠input⁠ to be ⁠string | number⁠.
3. Type Narrowing: Inside your function, use an ⁠if⁠ statement with ⁠typeof⁠ to check the type of ⁠input⁠:
 If it is a ⁠string⁠, ⁠console.log⁠ this exact message: ⁠"Searching for product name: " + input⁠.
 If it is a ⁠number⁠, ⁠console.log⁠ this exact message: ⁠"Looking up product ID: " + input⁠.
4. Test the Logic: After you define the fun
