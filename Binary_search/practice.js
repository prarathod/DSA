// function greet(name){
//     return `Hi!! ${name} `;
// }

// function greet_name(greeting,message,name){
//        console.log(`${greeting(name)} ${message}`);
// }

// greet_name(greet,'Welcome To GeeksForGeeks','JavaScript');





// HOF
// function add (a,b){
//     return a+b;
// };

// function age(add,a,b,age){
//     return function show(name){
//         return  `hello ${name} your adding valeue is ${add(a,b)} and age is ${age}`;
//     }
// }
// console.log(age(add,5,6,23,)('prajwal'));

let c = 'masai'
function a (){
    let name = 'js';
   return  function b(){
        let lname = "gd";
        console.log(name+" "+lname+" "+c);
    };
  
};

a()()
