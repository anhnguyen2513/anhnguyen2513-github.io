// ************ 1. LET, Const 
//  var / let, const: Scope, Hosting
// Connst / Var, Let: Assigment

// Code block: if else, loop, {}, ...

// code thuần: Var
// Babel (Thư Viện): Const, Let
// - Khi định nghĩa biến và không gán lại biến đó: Const 
// - Khi cần gán lại giá trị cho biến : Let


// if(true) {
//     var Value = 'Hello';
// }
// console.log(Value)

// {
//     const Value = 'Hi!';
//     {
//         {
//             console.log(Value)
//         }
//     }
// }


// let a = {
//     name: 'Javascript',
// };

// a.name = "VueJS";
// console.log(a.name)

// 2. ***************** Template Literals
// 3. ***************** Multi-line String 


// const courseName = 'Javascript';
// const courseName2 = 'PHP';
// const description = `Course name: \${} ${courseName} ${courseName2} `

// console.log(description)


// 4. ***************** Arrow function

// const Course = function(name, price) {
//     this.name = name;
//     this.proce = price;
// }


// 5. ***************** Destructuring
// class Course {
//     constructor(name, price){
//         this.name = name;
//         this.proce = price;
//     }

//     getName(){
//         return this.name;
//     }

//     getPrice(){
//         return this.price
//     }
//     run(){
//         const isSuccess = false;

//         // if(...){
//         //     isSuccess = true;
//         // }
//     }
// }

// const jsCourse = new Course('Javascript', 1000);
// const phpCourse = new Course('PHP', 1000);
// console.log(phpCourse)
// console.log(jsCourse)
// 6. ***************** Default parameter values
//  => khi hàm có những tham số mà không bắt buộc phải nhập
// ES5;

// function logger(log){
//     if(typeof log === 'undefined'){
//         log = 'Gia tri mac dinh!';
//     }
//     console.log(log);
// }

// logger(undefined)

// ES6
// function logger(log, type = 'log'){
    
//     console[type](log);
// }

// logger('Message...', 'warn')

// 7 . ***************** Enhanced Object literals

// 1. Định nghĩa key: value cho object

// var name = "javascript"
// var price = 1000;

// var Course = {
//     name,
//     price,
//     // Định nghĩa method cho object 
//     // ES5
//     // getName: function(){
//     //     return name
//     // }

//     // ES6
//     getName(){
//         return name;
//     }
// };

// console.log(Course.getName())


// 3. Định nghĩa key cho object dưới dạng biến
// var fieldName = 'name';
// var fieldPrice = 'price';

// const course = {
//     [fieldName]: 'Javascript',
//     [fieldPrice]: 1000
// }
// console.log(course)

// 8. ***************** Destructuring
// 9. ***************** Rest parameters

// ES5
// var array = ['Javascript', 'PHP', 'Ruby']

// var a = array[0];
// var b = array[1];
// var c = array[2];


// console.log(a, b, c)

// ES6
// var array = ['Javascript', 'PHP', 'Ruby']

// var [a, ... Rest] = array

// console.log(a);
// console.log(Rest)


// Object

// var course = {
//     name: 'Javascript',
//     price: 1000,
//     id: 1,
//     moreLearning: {
//         name: 'PHP',
//         id: 3
//     },
//     date: '1/12/2000',
//     description: 'value description'
// }

// var {name, moreLearning: { name: moreName }, description = 'default description' ,...rest} = course;
// console.log(name, description);
// // console.log(moreLearning.name)
// console.log(moreName)
// console.log(rest) 

// // Rest parameters

// var number = (... obj) =>{
//     return obj
// }
// console.log(number('a',2,3,4,5,6,7))

// function logger([obj, ...rest]){
//    console.log(name) 
//    console.log(id) 
//    console.log(description)
//    console.log(obj)
//    console.log(rest)

// }

// logger({
//     name: 'JavaScript',
//     id: 1,
//     description: 'Description content'
// })

// function logger(...obj){
//     console.log(...obj)

// }
// logger([ 2, 4, 7, 11, 45, 8, 9])




// Spread ES6


// var array1 = ['Javascript', 'Ruby', 'PHP']
// var array2 = ['ReactJS', 'VueJS']
// var array3 = [...array1, ...array2]
// console.log([array3])

// var obj1 = {
//     name: 'Javascript'
// };

// var obj2 = {
//     price: 1000,
//     name: 'PHP'
// };

// var obj3 = {
//     ...obj1,
//     ...obj2
// };
// console.log(obj3);

// var defaultConfig = {
//     api: 'https://domain-trang-khoa-hoc',
//     apiVersion: 'v1',
// }
// var exerciseConfig = {
//     ...defaultConfig,
//     api: 'https://domain-bai-tap'
// }

// console.log(exerciseConfig)


//  ************* Vi Du su khac nhau giua Spread va rest

// Nói tóm lại nó là rest khi bạn dùng "..." với biến khác không phải tên mảng object đã được định nghĩa, còn là spread khi dùng "..." với chính tên của mảng, object .v..v..
// rest : trả về mảng hoặc object tuỳ thuộc áp dụng với cái gì.
// spread: ngắn gọn là xoá ngoặc


// REST
// function logger(...obj){
//     console.log(...obj)

// }
// logger([ 2, 4, 7, 11, 45, 8, 9])

// // Spread
// var loggerd = ([ 2, 4, 7, 11, 45, 8, 9])

// function logger(...OBJ){
//     console.log(...OBJ)
// }
// logger(...loggerd)


// ==> Spread xoa ngoac


// ************* Tagged template literals(Các ký tự mẫu được gắn thẻ)

// var result
// function highlight([first, ...strings], ...values){
//     return values.reduce(function(initalvales, item){
//         return result = initalvales + `${item}` + strings.shift();
//     }, [first])
// }


// var pay = 'Buy';
// var platform = 'store';
// var barnd = 'TungNguyen';

// const htmls = highlight`${pay} clothes at ${platform} of ${barnd} nhe`;
// console.log(htmls);


// *************** Modules

// Modules: Import / Export 

// import logger from './logger.js'
// import {
//     TYPE_ERROR,
//     TYPE_WARN,
//     TYPE_LOG
// } from './constants.js'

// import * as constants from './constants.js'

// console.log(constants)



// ********************** Optional chaining (?.)

// const obj = {
//     name: 'Alice',
//     cat:{
//         name: 'Dinah',
//         cat2:{
//             name: 'Dinah 2',
//             // cat3: {
//             //     name: 'Dinah 3'
//             // }
//         }
//     }
// };
// if(obj?.cat?.cat2?.cat3)
// console.log(obj.cat.cat2.cat3.name)