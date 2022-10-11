// //  toan tu ++ -- 
// // prefix & postfix

// var a = 5;
// // viec 1: +1 cho a, a = 5 + 1 => a + 6
// // viec 2: tra ve a ngay su khi duoc +1
// var output = ++a;
// console.log('output:', output);
// // viec 1: `a copy `, `a copy ` = 5
// // viec 2: tru 1 cua a, a = a - 1=> a = 5
// // viec 3: tra ve `a copy`
// var ooutput = a++;
// console.log('output', ooutput);

// var number = a++ + --a;
// // 5 + (6-1)5 
// console.log(number);
// alert("xin chao!!");



// /* kieu du lieu trong js

// 1. Dữ Liệu Nguyên Thủy - Primitive Data
//     - Number
//     - String 
//     - Boolean
//     - Underfined
//     - Null
//     - Symbol

// 2. Dữ Liệu phức tạp - complex Data
//     - Funtion 
//     - Object
// */

// // Number type
// var a = 1;
// var b = 2;
// var c = 1.5;
// let x = "hello"
// // console.log(typeof x);

// //  String type

// var Fullname = "Tung' Nguyen";

// // boolean type
// var isSuccess = true;

// // Undefind type
// var age; 

// // Null type
// var isNull = null; //nothing

// // Symbol 
// var id = Symbol('id'); // unique
// var id2 = Symbol('id'); //unique
// // nang cao

// // Function

// var myFunction = function(){
//     alert("Hello !!!");
// }
// // myFunction();

// // Object types
// var myObject = {
//     name: 'Tung Nguyen',
//     age: 22,
//     adress: 'Ha Noi',
//     myFunction:function(){

//     }
// };
// // console.log("myObject", myObject)

// var myArray = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];
// console.log(myArray)


//***********Toan Tu So Sanh - P2****************

/**
* !== 
* ===
*/

// var a = 1;
// var b = '1';
// console.log(a == b);
// //  == chi so sanh value
// console.log(a === b);
// // === so sanh ca value va kieu du lieu ("string" && "number")
// console.log(a != b);
// // =! giong == chi so sanh value
// console.log(a !== b)
// // !== giong === so sanh ca value va kieu du lieu


/*
    0
    ''
    null
    undefined
    NaN
    false

*/

// var a = 1;
// var b = 2;

// // var result = 'A' && 'B' && 'C' && 'D';
// // console.log('result', result);
// // var result = null && 'B' && 'C' && 'D';
// // console.log('result', result);
// var result = 'A' && 'B' && NaN && 'D';
// console.log('result', result);

// if(result){
//     console.log('DIEU KIEN DUNG');
// } else{
//     console.log('DIEU KIEN SAI');
// }

// // var result = 'A' || 'B' || 'C' || 'D';
// // console.log('result', result);
// // var result = 'A' || 'flase' || 'C' || 'D';
// // console.log('result', result);
// var result = 'underfined' || 'B' || 'C' || 'D';
// console.log('result', result);

// if(result){
//     console.log('DIEU KIEN DUNG');
// } else{
//     console.log('DIEU KIEN SAI');
// }

/* **************CHUOI TRONG JAVASCRIPT*/

// var fullname = new String('Tung Nguyen');
// console.log(typeof fullname);

// var firstname = "Tung";
// var lastname = "Nguyen";

// console.log(`toi la: ${firstname} ${lastname}`);


// ************ LAM VIEC VOI CHUOI ********

// var mystring = '     Hoc JS Tai YOUTOBE! JS   ';

// 1.length 
// console.log(mystring.length);

//2. Find index
// console.log(mystring.indexOf("T",5));// vi tri dau string
// console.log(mystring.lastIndexOf('T'))// vi tri cuoi
// console.log(mystring.search('TAI'))

// 3. Cut String
// console.log(mystring.slice(4,10));
// console.log(mystring.slice(-8,-1));

// 4.replace GHI DE
// console.log(mystring.replace('JS', 'Javascript'));

// 5.convert touppercase
// console.log(mystring.toLocaleUpperCase());

// 6.convert tolowercase
// console.log(mystring.toLocaleLowerCase());

// 7.Trim
// console.log(mystring.trim().length);

// 8.split
// var languages = 'Javascript, PHP';
// console.log(languages.split(','))

// 9. Get a character by index
// const myString2 = 'Tung Nguyen';
// console.log(myString2.charAt(5));



/* Kieu So (Number) trong javascript*****************/

// var age = 22;
// var PI = 3.5444444;

// var result = 20 / 1;
// console.log(isNaN(result));
// isNaN trả về kiểu dữ liệu không phải Number

// // chuyen sang kieu string
// // To string
// var mystring = PI.toString();
// console.log(typeof mystring)
// // lam tron kieu so nguyen
// // TO Fixed

// console.log(PI.toFixed(4));


// Mang Trong Javascript - Array

// cach 1
// var languages = [
//     'Javascript',
//     'PHP',
//     'Python',
//     'Ruby',
//     null,
//     undefined,
//     NaN,
//     function(){

//     },

// ];
// console.log(languages)

// // kiem tra mang co phai array hay khong
// console.log(Array.isArray(languages));

// Cach 2
// var languages = new Array(
//     'Javascript',
//      'PHP',
//     'Python',
//     'Ruby',
//     null,
//     undefined,
//     NaN,
//     function(){

//     },
// )
// console.log(languages)


// lay do dai mang
// var languages = [
//     'Javascript',
//     'PHP',
//     'Python',
//     'Ruby',
// ];
// console.log(languages.length);
// // lay phan tu trong mang
// console.log(languages[2]);

// ******************* làm việc với Array

// 1.to string

// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

// console.log(languages.toString());
// console.log(languages.join(' -- '));
// console.log(languages.pop());
// console.log(languages.pop());
// console.log(languages.pop());
//  **************** pop xoa element cuoi mang va tra ve phan tu da xoa

// ******************* 
// push them phan tu vao cuoi mang va tra ve do dai moi cua mang 
// console.log(languages.push('Java', 'item'));
// console.log(languages);

// ****************** Shift nguoc lai voi pop tra ve phan tu dau da xoa
// console.log(languages);
// console.log(languages.shift());
// console.log(languages.shift());
// console.log(languages.shift());
// console.log(languages.shift());

// ****************** Unshift 
// them mot phan tu vao dau mang va tra ve do dai moi cua mang

// console.log(languages.unshift('Java',"Python"));

// ******************* splicing xoa va chen phan tu 
//  Xoa
// console.log(languages.splice(1,1));
// console.log(languages);
// // Chen phan tu
// languages.splice(1, 0, 'Python')
// console.log(languages)
// ********************* Concat Noi phan tu cua 2 mang
// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

// var languages2 = [
//     'Java',
//     'Python',
//     'Vuejs'
// ];

// console.log(languages2.concat(languages));

// ********************* Slicing cat mot vai element cua mang/ cat toan bo
// console.log(languages.slice(1,2))
// console.log(languages);

//  ****************  HAM(function)

// khoi tao ham

// function showDialog() {
//     alert('Hi xin chao cac ban!');
// }
// showDialog();

// ********************* Tham So trong ham

// function writeLog(arr1, arr2) {
//     console.log(arr1);
//     console.log(arr2)
// }
// writeLog("xin chao", 123)

// function writeLog(arr1, arr2) {
//     console.log("hello", "Tung Nguyen");

// }
// writeLog();


//  ********************** doi tuong arguments

// function writeLog() {
//     console.log(arguments)
// }
// writeLog('log1', 'log2')

// ********************** su dung vong for of


// function writeLog() {
//     myString = '';
//     for (var param of arguments){
//         myString += `${param} `;
//     }
//     console.log(myString)
// }
// writeLog('log1', 'log2', 123, ['Java'], ['PHP'])


// function sum(a, b){
//     return [a + b];
// }
// var result = sum(4 , 6);
// console.log(result);

// ******** cac loai function

// 1.Declaration function
// showMessage();

// function showMessage(){
//  console.log ("Declaration function!")
// }

// // 2.Expression function

// var showMessage2 = function testName(){
//  console.log ("Expression function!")
// }



// setTimeout(function testName(){

// });

// var myObject = {
//     myfunction: function testName(){

//     }
// }


// *********** Object

// var myinfor = {
//     name: 'Tung Nguyen',
//     age: 22,
//     address: 'Ha noi, VN',
//     phone:'0123124',
//     ['email/gmail'] : 'zzpiprozz@gmail.com',
    
//     inforphone:function() {
//         return this.phone;
//     },
//     inforemail:function(){
//         return this["email/gmail"];
//     }
// };

// // function --> phuong thuc
// // others --> thuoc tinh s/ property

// var mykey = 'address';
// console.log(myinfor.inforemail());
// console.log(myinfor.inforphone());


// ************** Object constructor & protopype Object

// var User = function(firstname, lastname, age){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;
//     this.getname = function(){
//         return ` ${this.firstname} ${this.lastname}`
//     }
// }

// User.prototype.className = 'Th23';
// User.prototype.getClassName = function(){
//     return this.className;
// }

// var informember = new User ('Tung', 'Nguyen', '22');
// var informethor = new User ('Do', 'Tung', '43');
// informember.email = 'tungnguyen@gmail.com';
// informethor.phone = '019231273';


// console.log(informember);
// console.log(informethor);
// console.log(informember.getClassName())
// console.log(informember.className)
// console.log(informethor.getname());

// ************** doi tuong date

//  var date = new Date();
 
//  var year = date.getFullYear();
//  var month = date.getMonth()+1;
//  var day = date.getDate();

//  console.log(`${day}/${month}/${year}`);


//  *********** Vong Lap - Loop**********

// 1. for - Lap Voi dieu kien dung
// 2.for/in - lap qua key cua doi tuong
// 3.for/or - lap qua value cua doi tuong
// 4. while - lap khi dieu kien dung
// 5.do/while - lap it nhat 1 lan, sau do lap khi dk dung


// ********* for/in loop ***********

//  Object
// var myInfor = {
//     name : 'Tung Nguyen',
//     age : 23,
//     address: 'Ha Noi, VN'
// };
// // for(var key in myInfor){
// //     console.log(`${key} ${myInfor[key]}`)
// // } 
// // Array

// var myArray = [
//     'Tung Nguyen',
//     23,
//     'Ha Noi, VN'
// ]
// for(var key in myArray){
//     console.log(`${key} :`, myArray[key] );
// }

//  String

// var mystring = `Tung Nguyen`;
// for(var key in mystring){
//     console.log(`thu tu ${key} :` ,mystring[key]) 
        
// }
// var myinfor = {
//     name: ' Tung Nguyen',
//     age: 22
// };

// for(var value of Object.values(myinfor)){
//     console.log(value)
// }


// ******* while loop **********

// var arr = [
//     'Javascript',
//     'Vuejs',
//     'vuetify'
// ]
// var i = 0
// while( i <= arr.length ){
//     console.log(arr[i]);
//     i++;
// }


// ********* do/while loop **********
//  sai van lap them 1 vong 
// var i = 0;
// var isSuccess = false; 
// do {
//     i++;
//     console.log('Nap the lan ', i)
//     if(true){
//         isSuccess = true;
//     }
    
// } while (!isSuccess && i <= 3);


// ************ Break/ Continue in loop

// for (var i = 0; i<= 10 ; i++){
//     if(i%2 == 0){
//         continue;
//     }  
//     console.log(i);

// }


//  *************** vong lap long nhau ****

// var myArray = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ]

// for(var  i = 0; i < myArray.length; i++){
//     for(var j = 0; j <myArray[i].length; j++){
//         console.log(myArray[i][j]);
//     }
// }


//  ***************** Math object ***************

// - Math.PI
// - Math.round
// console.log(Math.round(1.5));
// lam tron so

// - Math.abs
// console.log(Math.abs(-5))
// tra ve gia tri tuyet doi am thanh duong

// - Math.ceil
// console.log(Math.ceil(1.4));
// lam tron` tren 1,4 = 2;

// - Math.floor
// console.log(Math.floor(2.6));
// //  lam tron duoi 2.6 = 2

// // - Math.random
// random = Math.floor(Math.random()*100);

// if(random < 30 ){
//     console.log('dap do thanh cong');
// }
// console.log(random)

// - Math.min
// console.log(Math.min(1,2,3,4,0,9,10,7,11));
// // - Math.max
// console.log(Math.max(1,2,3,4,0,9,10,7,11));


// ****************  Array methods *************

// ******************* forEach();

// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 250
//     },
//     {
//         id: 2,
//         name: 'HTML, CSS',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'Javascript', 
//         coin: 100
//     },
//     {
//         id: 5,
//         name: 'Javascript',
//         coin: 250
//     },
//     {
//         id: 6,
//         name: 'PHP',
//         coin: 50
//     },
// ]

// courses.forEach(function(course, index){
//     console.log( index, course);
// });

//  *************** every()
//  Tat Ca phan tu trong mang phai thoa man 1 dieu kien
// var isFree = courses.every(function(course, index){
//     console.log(index)
//     return course.coin === 250;
// });
// console.log(isFree);

//  **************** some()
//  Chi can 1 phan tu thoa man 1 dieu kien se tra ve true
//  va chi nhan phan tu dung gan nhat
// var isFree = courses.some(function(course, index){
//     console.log(index)
//     return course.coin < 100;
// });
// console.log(isFree);

// ************** find()
// tim kiem phan tu thoa man voi dk
//  va tra ve chi mot phan tu thoa man
// var isFree = courses.find(function(course, index){
//     return course.name === 'Javascript'
// });
// console.log(isFree);

//  ************* filter()
// tim kiem phan tu thoa man voi dk
//  va tra ve tat ca phan tu thoa man voi dk
// var isFree = courses.filter(function(course, index){
//     return course.name === 'Javascript'
// }); 
// console.log(isFree);

// ****************** map()***********

// function  courseHandler(course, index){
//     return {
//         id: course.id,
//         name:`tu hoc: ${course.name}`,
//         coin:`Free Coin: ${course.coin}`,
//         index: index,
//         originArray: course
//     };
// };
// var newCourses = courses.map(courseHandler);
// console.log(newCourses);



// ********************* recursive(De quy)

// Giai thua
// function giaiThua(number){
//     if (number > 0){
//         return number * giaiThua(number -1 )
//     }
//     return 1;
// }
// console.log(giaiThua(6))

// var array = ['a', 'b' , 'c', 'd', 'a', 'a', 'c'];
// var arr = ['a', 'b', 'c', 'd'];

// console.log([...(new Set(array))])

// ******************** reduce()

// var i = 0;
// function coinHandler(accumulator, currentValue, currentIndex, originArray){
//     i++;
//     console.table({
//         'luot chay: ': i,
//         'accumulator: ' : accumulator,
//         'currentValue: ' : currentValue,
//         'currentIndex: ' :currentIndex,
//     })
//     return accumulator + currentValue.coin
// }
// var totalCoin = courses.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue.coin;
// }, 0);
// console.log(totalCoin);
// var totalCoin = courses.reduce((a, b) => a + b.coin, 0)
// console.log(totalCoin)


//  bai tap thuc hanh reduce();

//  Flat - "Lam phang" mang tu depth array - "mang sau"
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
// var depthFlat = depthArray.reduce(function flat(depthOutput, item){
//     return depthOutput.concat(item)
// }, [])
// console.log(depthFlat)

// Lay ra cac khoa hoc dua va 1 mang moi

var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML,CSS"
            },
            {
                id: 2,
                title: "Javascript"
            }
        ]
    },
    {
        topic: "Back-end",
        courses:[
            {
                id: 1,
                title:"PHP"
            },
            {
                id: 2,
                title:"NodeJS"
            }
        ]
    }
]

// var newCourses = topics.reduce(function(Values, item){
//       return Values.concat(item.courses)
// }, [])
// console.log(newCourses);


// var htmls = newCourses.map(function(course){
//     return `
//     <div>
//         <h2>${course.title}</h2>
//         <p>${course.id}</p>
//     </div>
//     `;
// });
// console.log(htmls.join(''))

// *********** logic reduce() **********
// Array.prototype.reduce2 = function (callback, result){
//     let i = 0;
//     // khong dung bien tich tru value
//     if(arguments.length < 2){
//         i = 1;
//         result = this[0]
//     }
//     for(; i < this.length; i++){
//         result = callback(result, this[i], i, this);
//     }
//     return result
// }
// Array.prototype.reduce3 = function(callback, result){
//     let i = 0
//     if(arguments.length < 2){
//          i = 1;
//         result = this[0];
//     }
//     for(; i < this.length; i++){
//         result = callback(result, this[i])
//     }
//     return result
// }

// const number = [1, 2 , 3, 4, 5];

// const result = number.reduce3((total, item) => {
//     return total + item;
// })

// console.log(result);

// ****************** muon them gia tri vao key trong mang obj 

// object[arrItem[0]] = arrItem[1];



// Dòng trên dùng để gán key = value ; của 1 object
// Đầu tiên gọi hàm arrToObj thì vòng lặp chạy
// Sau khi vòng lặp chạy thì trả về từng phần tử của mảng là arrItem
// Biến lưu trữ đầu tiên là object rỗng = {}
// Để kết quả trả về là một object thì ta phải thêm phần tử vào object rỗng
// Thêm vào bằng cách object.key = value;
// Hoặc object[tên biến hoặc chuỗi] = value;
// Lúc này arrItem[0] = 'name'  lấy ra phần tử có index = 0 của mảng arrItem
// arrItem[1] = 'Sơn Đặng'      lấy ra phần tử có index = 1 của arrItem
//      object[tên biến] = value
// <==> object[arrItem[0]] = arrItem[1];
// <==> { name: 'Sơn Đặng' }
// Nếu còn chưa hiểu nên xem lại bài Object và Array

// **************** includes method
// kiem tra xem trong chuoi~/ mang co phan tu hay khong
// var title = 'Responsive web design';
// console.log(title.includes('web', 11)) // 11 la tu ki tu thu 11

// var courses = ['Javascript', 'PHP', 'VueJS'];
// console.log(courses.includes('PHP', 1)) // bat dau tu vi tri thu 1 PHP (<0 bat dau bang 0)

// **************** CallBack 

// function myfunction(param){
//     if(typeof param === 'function'){
//         param("Hoc Lap Trinh")
//     }
// }
// function myCallback(value){
//     console.log('Value: ',value); 
// }
// myfunction(myCallback)

// var courses = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

// Array.prototype.map2 = function(callBack){
//     var array0 = [];
//     var arrayLength = this.length;
//     for(var i = 0; i < arrayLength; i++){
//         var result = callBack(this[i]);
//         array0.push(result);
//     }
//     return array0;
// }

// var htmls = courses.map2(function(course){
//     return `${course}`
// });
// console.log(htmls.join(''))


// var item = courses.map((value) => {
//     return `<h2>${value}</h2>`
// });

// console.log(item.join('')); 

// var arr =[
//     1,
//     2,
//     3
// ];

// Array.prototype.myMap = function(cb) {
//     var array0 = [];
//     var arraylength = this.length;
//     for(var i = 0; i < arraylength; i++){
//         var results = cb(this[i], i);
//         array0.push(results) ;
//     }
//     return array0
// }

// var calculate = arr.myMap(function(course, item){
//     return `${course}` * 2;
// });
// console.log(calculate)


// Expected results
// const numbers = [1, 2, 3];

// console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) // Output: [0, 2, 6]

// EX:********************* forEach
// Array.prototype.forEach2 = function(callback){
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             callback(this[index], index, this);
//         }
//     }
// }

// var calculate = courses.forEach2(function(course, index, array){
//     console.log(course, index, array)
// });
// console.log(calculate.join())

// var calculate = courses.reduce(function(course, item){
//     return `${course}`;
// })
// console.log(calculate);


// 1. Object prototype
// 2. For in
// 3. hasOwnProperty
// 3.
// => hasOwnProperty la 1 phuong thuc trong Object, 
// có tác dụng kiểm tra 1 thuộc tính có tồn tại trong Obj hay không,
// nếu tồn tại trả về true, không thì false
//  if (someVar.hasOwnProperty('somProperty')){
    // do Something();
// } else {
    // do somethingElse()
// }

// 2. 
// on lai for in

// var myInfor = {
//     name: 'Javascript',
//     age: '22',
//     sex : 'man'
// }
// for ( var key in myInfor){
//     console.log(`${key}: ${myInfor[key]}`)
// }

// var languages = 'javascript';

// for(var index in languages){
//     console.log(`${index} ${languages}`)
// }


//  filter

// var course = [
//     {
//         name: 'Javascript',
//         coin: 680
//     },
//     {
//         name: ' PHP',
//         coin: 300
//     },
//     {
//         name: 'Python',
//         coin: 400
//     }
// ];
// Array.prototype.filter2 = function(callback){
//     var output = [];
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             var result = callback(this[index], index, this)
//             if(result){
//                 output.push(this[index])
//             }
//         }
//     }   
//     return output

// }

// // var dem = new Array(1000);

// var filerCourse = course.filter2(function(coureses, item, array){
//     return coureses.coin > 350
//     // console.log(coureses, item, array)
// })
// console.log(filerCourse)

// bai tap
// const numbers = [1, 2, 3, 4]

// Array.prototype.myFilter = function(cb) {
//     output = [];
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             var result = cb(this[index], index, this);
//             if(result){
//                 output.push(this[index])
//             }
//         }
//     }
//     return output
// }

// console.log(numbers.myFilter(function (number, index, array) {
//     return Array.length % 2 === 0;
// }));

// *************** Some()

// var mySome = [
//     {
//         name: 'Javascript',
//         coin: 650,
//         isFinish: true,
//     },
//     {
//         name: 'Javascript',
//         coin: 300,
//         isFinish: true,
//     },
//     {
//         name: 'Javascript',
//         coin: 500,
//         isFinish: false,
//     }
// ]
// Array.prototype.some2 = function(cb) {
//     var output = false;
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             var result = cb(this[index], index, this)
//             if(result){
//                 output = true;
//                 break;
//             } 
            
//         }
//     }
//     return output
// }

// console.log(mySome.some2(function (finish, item) {
//     return finish.coin > 700;
// })); Output: false

// ******************* Every()
// Array.prototype.every2= function(cb) {
//     var output = true;
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//            var result = cb(this[index], index, this)
//                 if(!result){
//                     output = false;
//                     break
//                 }
//         }
//     }
//         return output
// }
// console.log(mySome.every2(function (finish, item) {
//     return finish.coin > 200;
// }));