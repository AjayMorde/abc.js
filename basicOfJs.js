// 1 number
console.log(typeof 1);
// string
console.log(typeof "hello");
var a=1;
var a=2;
a=4;
console.log(a);
let b=2;
// let b=3;let is not for reinitialized;;;;
console.log(b);

let obj ={ 

    name : 'Ajay',
    experience : 0,
    0:"company"
}
console.log(obj); 

console.log(obj.name);
console.log(obj['name']);
let arr=[1,2,3,4];
console.log(typeof arr);
let obj2={

    0:{
        name: "Ajay"
    },
    experience : 2
}
console.log(obj2[0].name)
console.log(Object.keys(obj2))
console.log(Object.values(obj2))
console.log(Object.keys(obj2[0]))
console.log(Object.values(obj2[0]))

console.log("-----------------------------------------------------------------------------------------")
// if else if js


let number=5;
if(number>0)
{
    console.log('number   is a positive number.' )
}
else {
    console.log('${number} is a negative number.')  
}

console.log("Switch case in js.......................................................................")
let weather ="rainy";
switch(weather){
    case('rainy'):{
        console.log('its a rainy day')
        break
    }
    case('sunny'):{
        console.log('its a sunny day')
    }

}

console.log('for loop in js-----------------------------------------------------------------------------')


let array=[[1,2,3],[4,5,6],[7,8,9]]
let str=" "
for(let i=0;i<array.length;i++){
    for(let j=0;j<arr.length;j++){
        // console.log(array[i][j])
        str+=array[i][j]
    }
}
console.log(str)



console.log("fuction in js-------------------------------------------------------------------------------")


function sum(a,b)
{
    console.log(a+b)
}
sum(2,5)



function sum1(a,b,c){
    console.log(a+b)
}
sum1(2,2)



function sum2(a,b=2){
    console.log(a+b)
}
sum2(2)




function square(a){
return a*a;
}
let ans=square(5)
console.log(ans)


console.log("difference between var and let in js----------------------------------------------------------")
{
let abc='abc'

    console.log(abc,'inside the block')
}
//console.log(abc,'outside the box')// error finding here

{
    var pqr='check'
    console.log(pqr,'inside the block')
}
console.log(pqr,'outside the box')


// let o=2
// let o=6
// console.log(o) ERROR

var p=2
var p=6
console.log(p)


console.log("first order function in js--------------------------------------------------------------------")

const abc=function()
{
    console.log('abc')
}
console.log(abc)
console.log(square)
function highorderFunction(abc2){
    console.log(abc)
    abc2()
}

highorderFunction(abc)


// arrow fucncton 

const singleArgument=arg=>arg

const arrow =()=> console.log("i a arrow fuction")

singleArgument('abc')

// function noramal(){
//     console.log(this)
// }
// noramal()
// const object1 = { this is binding content
//     name: "Ajay",
//     arrowFn: () =>{

//         console.log(this.name)
//     }
// }
// object1.arrowFn()

const add=(a,b)=>a+b

function double(a,b){

    return 2*add(a,b)

}
console.log(double(2,4))

function call(){
    a=function(){
        console.log('a')
    }
    b=function(){
        console.log('b')
    }
    c=function(){
        console.log('c')
    }
}
call()
a()
b()
c()
var a = 0;
console.log("test question----------------------------------------------------------------------------------------")
while (a < 10) 
{
     console.log(a);
     a++;
}
function range(arg)
{
	let a=5;
	for(let i=0;i<arg;i++)
	{
		console.log(a);
	} 
}
range(3);

var a1=[1,2,3] 
var a2=[6,7,8]
var result=a1.concat(a2)
console.log(result)



var a= 0;
var z= 0;
while (a < 3)
{
  	a++;
  	z += a;
	console.log(z);
}

console.log("Strig in js-------------------------------------------------------------------------------------------------------------")

let string="ajay"
console.log(string)

string ="ajay1";
console.log(string)

// Question -----------------------------------------------------------------------------------------
// find the sum of all the argumments given by using fuction

function sum(){
    let ans=0
    console.log(arguments)
    for(let i=0;i<arguments.length;i++){
        ans=ans+arguments[i]
    }
    return ans
}
console.log(sum(1,2,3,4,5,6,7,8,9,10));  
//-----------------------------------------------------------------------------------------------------------

//methods
let st="String"
console.log(st.length)
console.log(st.toUpperCase())
console.log(st.toLowerCase())
console.log(st.substring(1,3))

let newst="hello how  are yor"
console.log(newst.split(" "))
console.log(newst.split(' '))
console.log(newst.split('h'))
 let st2="india , pakistan , shrilanka, afganisthan";
console.log(st2.split(', '))

let st3='   hey team   '
console.log(st3.trim())
console.log(st3.includes('hey'))
console.log(st3.includes('yu'))
console.log(st3.replace('hey','hellow'))
