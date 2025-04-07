document.write("hello world")
console.warn("warning")
console.error("error")
//variables
const pi=3.14
console.log(pi)
let a=250//let have blockscope .cannot redeclare .let can reasign 
console.log(a)

var b=1000
console.log(b)
var b=200
console.log(b)

let isValid = true
let fullname= "alex"
let salary = 40000//number datatype


let num1=2
num1+=3
console.log(num1)


let num2=10
num2-=3
console.log(num2)

let num3=2
num3*=3
console.log(num3)

let num4=10
num4/=5
console.log(num4)

console.log(num1)

console.log(num1++)

console.log(++num1)


console.log(num1)
let a1=num1++//first assign then increment for post . for pre reverse
console.log(a1)
++a1
console.log(a1)



let flag1=true
let flag2=false
console.log(flag1!=flag2||2==3)



if(5>3){
console.log("five is greter than three")
}
else if(5==3)
    {
console.log("five equals to three")
}
else{
console.log("five is not greter than three")
}


let sum=0
for(let i=0;i<=10;i++){
    sum+=i
}
console.log(sum)

let student={//objects
    name:'rose',
    age:20
}
console.log(student)

console.log(student.name)//for individual 

//functions
/*function greet(){
    alert("welcome")
}greet()
*/
function add (a,b){
    return a+b
}
let result= add(1,2)
 console.log(result)

 //using arrow function . es6 concepts . not have function name 

 let diff=(num1,num2)=>{
    return num1-num2

 }
 let output= diff(10,2)
 console.log(output)


 //arrays
 const seasons =['wiinter','summer','rainy']
console.log(seasons[2])

for(let i=0;i<3;i++)
{
    console.log(seasons[i])
}
seasons.forEach((item)=>console.log(item))

let numbers= [10,20,30,40]
let double = numbers.map(item=>item*2)
console.log(double)








