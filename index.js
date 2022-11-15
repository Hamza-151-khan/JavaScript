//1. ways to print in JAvaScript
//console.log("Hello World");
//alert("me");
//document.write("this is document write")

//2. JavaScript console API
// console.log("Hello World", 5 + 5, "Another log");
// //alert("me");
// document.write("this is document write")
// console.warn("this is warning")
// console.error("this is an error")

//3. Javascript variables
// containers to store data values

var num1=55
var num2=100
console.log(num1+num2)

//Data types in javascript
//Numbers 
var num1=45
var num2=200
//console.log(num2+num1)
//strings
var str1="This is a string"
var str2="this is also a string"

//object
var marks={
    hamza:95,
    sami:55,
    murtaza:100
}
console.log(marks)

//Booleans
var a=true 
var b=false
console.log(a,b)

var und
console.log(und)

var n=null
console.log(n)

var arr=[1,2,3,"Hamza",5]
console.log(arr)

//operators in javascript
//arithmetic operators

// var a=50;
// var b=10;
// console.log("The value of a+b is ",a+b)
// console.log("The value of a+b is ",a-b)
// console.log("The value of a+b is ",a*b)
// console.log("The value of a+b is ",a/b)

// //assignments operator
// var c=b;
// c+=2;
// console.log(c)

// var x=35;
// var y=10;
// console.log(x==y)
// console.log(x>=y)
// console.log(x<=y)
// console.log(x<y)
// console.log(x>y)

//Functions

function avg(){
    return (a+b)/2;

}

c1=(5,10);
c2=(20,25)
console.log(c1,c2)

//Conditional in JavaScript
var age=34;
if(age>10)
{
    console.log("You are not a kid")
}
else{
    console.log("You are a kid")
}

var arr=[1,2,3,4,5]
/*console.log(arr)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
*/

arr.forEach(function(Element)
{
    console.log(Element)
})

let j=0;
hwile(j<arr.length)
{
    console/log(arr[j]);
    j++; 
}