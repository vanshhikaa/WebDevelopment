 var a=10; //Global Scope
 //a="Pankaj"
  

 let b=20; //Block Scope
 const c=100; // constant variable block scope

 //Data Types:
  
 var num = 10; //number type
 var name="Vanshika" //name type
 var isActive=true //boolean type
   
 console.log(typeof(name));
 console.log(typeof(num));
 console.log(typeof(isActive));
 console.log(name);
 console.log(num);

//Operators:

 console.log(a+b);
 console.log(a-b);
 console.log(a*b);
 console.log(a/b);
 console.log(a%b);
 // Unary operators:
 console.log(++a); //pre increment operator
 console.log(a++); //post increment operator
 console.log(--a); //pre decrement operator
 console.log(a--); //post decrement operator
 console.log(!a);

 //Relational Operators:
 console.log(a>b);
 console.log(a<b);
 console.log(a>=b);
 console.log(a<=b);
 console.log(a==b); //It compare value only
 console.log(a===b); //It compare value as well as datatype.

 //Conditional operator:
 console.log(a>b?"Hello":"Bye"); 

 //Conditional Statements:
 if(false)
 {
    console.log("if part");
 }
 else
 {
    console.log("else part");
 } 

 //Array in JavaScript:

 var myArr=[1,2,3,"abc","Sachin",true,false];
 myArr.push("xyz"); //It always push elements in the last.
 console.log(myArr);
 myArr.unshift("JS"); // insert element in starting.
 myArr.shift("xyx"); // delete elements from starting
 myArr.pop("xyz"); //delete element from last.
//  for(let i=0;i<myArr.length;i++)
//  {
//     console.log(myArr[i]);
//  }


 // to fetch array elements using forEach:
 myArr.forEach(element => {
    console.log(element);
 });

 // JavaScript Objects:
  
 var JSObject={
    id:123,
    name:"abc",
    age:30,
    salary:50000.00
 }
//Print JSObject:
//console.log(JSObject);
//console.log(JSObject.name); //to print individual data from object.

// Array object creation:
var data=[
    {name:"sachin",age:30},
    {name:"sadiq",age:28},
    {name:"saurav",age:35},
    {name:"sanket",age:25},
];
//Template String:
 data.forEach(element => {
    console.log(`Name: ${element.name} Age: ${element.age}`);
    
});

//Taking input from user:
var FirstName=prompt("Enter first name");
var LastName=prompt("Enter last name");
console.log(FirstName+ " " +LastName);

//JavaScript Function:

function sum(x,y)
{
   return x+y;
}
//sum(10,15); //calling function.
var result=sum(10,15); //storing result of the function.
console.log(result); //printing the result.

//Ecma6 based arrow function:
var sub=(x,y)=> x-y;
console.log(sub(35,15));