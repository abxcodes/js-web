// let myName= 'abhinav', //let in variabele
//  fatherName='suresh';

// fatherName= 'sureshan'

// console.log(fatherName)

//cost
//---------

// const age =10;       //we use const if the value should not be changed 
// age=11;
//  console.log(age);  //result 10


//let
//------
// let age=10;
// let age;

// console.log(age);// we cannot re-declare a variable declared with let ot const

// function detail() {
//   var age=30;
// }                    //var.let.const scope is inside function block only
// detail();
// console.log(age);



// let age=10;
// age =20;      //we cannot redevlare variable declared with let or const,but here we are not redeclaring it 
                //instead we are assingning value to it

//  console.log(age);//result will be 20


// age=20;
// console.log(age);// implicit global variable

//explicit means we are declaring variable using let,const or var befoe we assign value to it


// 1. Always declare variables

// 2. Always use const if the value should not be changed

// 3. Always use const if the type should not be changed (Arrays and Objects)

// 4. Only use let if you can't use const

// 5. Only use var if you MUST support old browsers.

// 6. let wont allow redeclartaion of variables but allow reeclaration of value 

// let age = '20';
// age = 30;
// ou can assign a new value to a variable, effectively updating its value. It does not involve redeclaring the variable. The variable age is not being redeclared; it is simply being assigned a new value.

// function age(){
//     var name=10;
// }
// age();
// console.log(name);


// var name;

// function age(){
//    var name='abhinav';
//    return name;
// }
// age();
// console.log(name);







