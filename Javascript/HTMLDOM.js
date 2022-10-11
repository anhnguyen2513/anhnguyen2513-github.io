// HTML DOM 

//  có 3 thành phần

/*
1.Element
2. Attribute
3.Text
*/
// document.write('Hello Guys!');

// 1. Element: ID, Class, tag,
// Css selector, HTML collection  


// Find An element by element id
// var headingNode = document.getElementById('heading');
// console.log({
//     Element: headingNode
// })

// // Find elements by class name
// var ClassHeading = document.getElementsByClassName('headings');
// console.log(ClassHeading);

// //  Tìm các phần tử theo tên thẻ
// var TagHeading = document.getElementsByTagName('h2')
// console.log(TagHeading)


// // Css selector
// var headingNodes = document.querySelector('.box .heading-2')
// console.log(headingNodes)

// var headingNodess = document.querySelectorAll('.box .heading-2')
// console.log(headingNodess[2])



// form 

// console.log(document.forms['form-2']);
// console.log(document.forms.testform);
// console.log(document.anchors)


// ********** BT lay ra the li 
// C1:
// const BoxNode = document.querySelectorAll('.box-1 li')
// console.log(BoxNode)

// C2:
// const BoxNode = document.querySelector('.box-1');

// console.log(BoxNode.getElementsByTagName('li'))
// console.log(BoxNode.querySelectorAll('li'))


// 2. ****************** DOM Attribute

// var headingElement = document.querySelector('h1');

// // console.log(headingElement)

// // them Attribute
// headingElement.title = 'Heading';
// headingElement.id = 'Heading';
// headingElement.className = 'Heading';


// them atrributes vao the a
// var headingElementa = document.querySelector('a')

// // secter
// // headingElementa.href = 'Heading'
// // setAttribute 
// headingElementa.setAttribute('id', 'Heading')

// // lay ra gia tri Attribute
// console.log(headingElementa.getAttribute('class'));

// *********** innerText, textContent

// var HeadingElement = document.querySelector('h1');

// // ************* geter 
// console.log(HeadingElement.textContent)
// textContent sẽ là chính những thứ bên trong TextNode(code)
// ************* seter
// HeadingElement.innerText = `

// New innerText

// `;
// innerText sẽ là những thư mà ta nhìn thấy bên ngoài(display: none)


// **************** innerHTML, outerHTML

// var innerOuter =  document.querySelector('.innner-outer')
// innerHTMl them mot elementNode
// innerOuter.innerHTML = '<a>HTML</a>'
// console.log(innerOuter.innerHTML)

// innerOuter.outerHTML = '<span>Test</span>';

// console.log(innerOuter.outerHTML)


// bai tap
// Các bạn hãy viết hàm render có 1 tham số courses,
// hàm render sẽ thêm các item của mảng
// courses để tạo thành 1 danh sách các khóa học trên giao diện.

// Ví dụ:
// Với mảng var courses = ['ReactJS', 'AngularJS', 'VueJS']
// sẽ thu được kết quả:

//  ReactJS
//  AngularJS
//  VueJS



// <HTML>

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Document</title>
// </head>
// <body>
//     <ul class="courses-list">

//     </ul>
// </body>
// </html>

// JS 

// var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']
// function render(courses) {
//     let ul = document.querySelector('ul')
//     var ListElement = courses.map(function(course, item){
//         return `<li>${course}</li>`;
//     });
//     ul.innerHTML = ListElement.join(' ');
// }
// console.log(render(courses))

// var fixElement = document.querySelector('.inner-outer')

// console.log([fixElement])

// ************** DOM style

// var boxElement = document.querySelector('.DOMStyle');

//  C1:::::::
// boxElement.style.width = '200px';
// boxElement.style.height = '200px';
// boxElement.style.backgroundColor = 'pink'

// C2:::::
// Object.assign(boxElement.style, {
//     width: '150px',
//     height: '150px',
//     backgroundColor: 'aqua'
// });
// console.log(boxElement.style.backgroundColor)

// ********* assign Giong gan'



//  ClassList property

// add
// contains
// remove
// toggle

// var boxClassList = document.querySelector('.ClassListProperty')

// boxClassList.classList.add('red', 'blue');

// contains kiem tra xem trong boxClassList co ton tai hay khong
// console.log
// (boxClassList.classList.contains('red'));

// ************** remove xoa Class
// boxClassList.classList.remove('red')

// setTimeout(() => {
//     boxClassList.classList.remove('red')
//     boxClassList.classList.add('pink')
// }, 3000);

// ******************  Toggle
// khi duoc chay, toggle se kiem gia Class 'red' co hay khong
// neu co thi bi xoa di, khong thi se duoc them vao

// setInterval(() => {
//     boxClassList.classList.toggle('red')
// }, 500);

// ***************** DOM events
// 1. Attribute events
// 2. assign event using the Element node 

// var h1Element = document.querySelectorAll('h1')

// for(var i = 0; i < h1Element.length; i++){
//     h1Element[i].onclick = function(e){
//         console.log(e.target);
//     }
// }


// **************** Input / select 

// var inputElement = document.querySelector('input[type="text"]')

// inputElement.oninput = function(e){
//     inputElement = e.target.value
// }

// //  checkbox 

// var inputElement = document.querySelector('input[type="checkbox"]')
// inputElement.onchange = function(e){
//     console.log(e.target.checked);
// }
// // select
// var inputElement = document.querySelector('select')
// inputElement.onchange = function(e){
//     console.log(e.target.value)
// }


// **************** Key up / down

// var inputElement = document.querySelector('input[type="text"]')

// Key Up
// inputElement.onkeyup = function(e){
//     console.log(e.target.value)
// }
// khi rời khỏi keyword key up sẽ tự động được onKeyUp
// Key Down
// inputElement.onkeyup = function(e){
//     // console.log(e.target.value)
//     // console.log(e.which)
//     switch(e.which){
//         case 27:
//             console.log('Exit');
//             break;
//         case 13:
//             console.log('Enter');
//             break;
//         case 32:
//             console.log('Space');
//             break;
//     }
// }
// khi nhập keyword từ bàn phím keydown sẽ lấy giá trị đầu tiên
// ví dụ giá trị ban đầu là rỗng thì sau khi nhập giá trị a
// keydown sẽ output giá trị rỗng ban đầu và sau đó đến giá trị tiếp

// onkeypress giữ keyword nhưng vẫn chạy ngoại trừ phím esc
// ESC sẽ không được thực thi



// ****************** DOM events

// 1. **************** preventDefault
//  => ngăn chặn hành động mặc định mà trình duyệt thực hiện
// đối với sự kiện đó

// var aElements = document.links;

// for(var i = 0; i < aElements.length; ++i){
//     aElements[i].onclick = function(e){

//         if(!e.target.href.startsWith('https://f8.edu.vn')){
//             e.preventDefault();
//         }
//     }
// }

// var ulElement = document.querySelector('ul')

// ulElement.onmousedown = function(e){
//     e.preventDefault();
// }
// var luElement = document.querySelectorAll('li')
// for(var i = 0; i < luElement.length; i++){
//     luElement[i].onclick = function(e){
//         console.log(e.target)
//     }
// }
// ulElement.onclick = function(e){
//     console.log(e.target)
//     }
// 2. **************** stopPropagation
// => ngăn chặn sự lan truyền thêm của sự kiện hiện tại
// trong các giai đoạn bắt giữ và tạo bọt.

// document.querySelector('button').onclick = 
// function(e){
//     e.stopPropagation();
//     console.log('Click ME!')
// }
// document.querySelector('div').onclick = 
// function(e){
//     console.log('DIV')
// }


// **************** *********

// 1. DOM event / Event listener 

// 1. Xử lý nhiều việc khi 1 event xảy ra

// xử Lý bằng DOM event 

// var btn = document.getElementById('btn')

// btn.onclick = function (){
//     // viec 1
//     console.log('Viec 1');

//     // Viec 2
//     console.log('Viec 2');

//     // Viec 3
//     alert ('Xin Chao!')
// }

// 2. Lắng nghe / Hủy bỏ lắng nghe 

// var btn = document.getElementById('btn')

// *********** Huy Bo Lang Nghe
// btn.onclick = function() {
//     // viec 1
//     console.log('Viec 1');

//     // Viec 2
//     console.log('Viec 2');

//     // Viec 3
//     alert ('Xin Chao!')
// }

// setTimeout(() => {
//     btn.onclick = function() {

//     }
// }, 3000);

// ************** Lang nghe
// setTimeout(() => {
//     btn.onclick = function() {
//         // viec 1
//         console.log('Viec 1');
    
//         // Viec 2
//         console.log('Viec 2');
    
//         // Viec 3
//         alert ('Xin Chao!')
//     }
// }, 3000);


// ********** Event Listener *************

// var btn = document.getElementById('btn')

//     function viec1(){
//         console.log('viec 1');

//     }
//     function viec2(){
//         console.log('viec 2'); 

//     }
// btn.addEventListener('click', viec1);
// btn.addEventListener('click', viec2);

// setTimeout(() =>{
//     btn.removeEventListener('click', viec1)
// },2000)



//  =>>>>>>>>> Sử Dụng DOM event cho nhưng sự kiện đơn giản
// và không muốn hủy bỏ nó đi

// muốn sử dụng nhiều việc khi event xảy ra nên 
// sử dụng event Listener 
// (một sự kiện diễn ra nhưng muốn hủy bỏ việc lắng nghe)

// ---------------------------------------------------
// 1.***************** JSON
// 1. là một định dạng dữ liệu(chuỗi)
// 2. JavaScript Object Notation 
// 3. JSON: Number, Boolean, String, Array, Object, null 

// Mã Hóa / Giải mã 
// Encode / decode 
// Stringify : Từ Javascript types --> JSON
// Parse: Từ JSON --> Javascript types
// var json = '["Javascript", "PHP"]';

// ***************Parse 
// var json = '{"name":"Tung Nguyen", "age": 21}';

// var a = '{"name": "Nguyen"}';

// var object = JSON.parse(json)

// console.log(object)

// *********** Stringify 
// console.log( JSON.stringify({
//     name: "Nguyen",
//     age: 21
// }))


// ****************** Promise

// Sync (Đồng Bộ)
// Async (Bất đồng bộ)
// Nỗi Đau 
// Lý Thuyết, Cách hoạt động
// Thực hành, ví dụ



// setTimeout,  setInterval, fetch, 
// XMLHtttpRequest, file reading,
// request animation frame

// Callback

// sleep
// setTimeout(function(){
//     console.log(1)
// },1000)
// console.log(2);

// callback hell 
// setTimeout(() => {
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//             console.log(3)
//             setTimeout(() => {
//                 console.log(4)
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// ***************** Cách Tạo ra 1 Promise *****************

// Promise có 3 trạng thái:

// 1.Pendding
// 2.Fulfilled
// 3.Rejected

// var promise = new Promise(
//     // Executor
//     function(resolve, reject){
//         // Logic 
//         // Thành Công: resolve 
//         // thất bại: reject  
//         // resolve([
//         //     {
//         //         id: 1,
//         //         name:'Javascript'
//         //     }
//         // ])
//         reject("Có Lỗi!")
//     }
// );

// promise
// // then khi resolve được gọi
// .then(function(course){
//     console.log(course)
// })
// // catch khi reject được gọi
// .catch(function(Fail){
//     console.log(Fail)
    
// })
// // 1 trong resolve và reject đều được gọi 
// .finally(function(){
//     console.log("Done!")
// })



// ***************** Promise Chain 

// var promise = new Promise(
//     function(resolve, reject){
//         resolve();
//     }
// )

// promise 
//     .then(() => {
//         return 1;
//     })
//     .then((data) => {
//         console.log(data);
//         return 2;
//     })
//     .then((data) => {
//         console.log(data);
//         return 3;
//     })
//     .then((data) => {
//         console.log(data)
//     })


// function sleep(ms){
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms)
//     })
// }

// sleep(1000)
//     .then(() => {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(() => {
//         console.log(2);
//         return sleep(1000);
//     })
//     .then(() => {
//         console.log(3);
//         return sleep(1000);
//     })
//     .then(() => {
//         console.log(4);
//         return sleep(1000);
//     })




// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

// var promise = new Promise((resolve, reject) => {
//     reject('error!')
// });


// Promise luon thanh cong: 
// var promise = Promise.resolve("Success!")


// Promise luon that bai: 
// var promise = Promise.reject("Error!")

// promise
// .then((result) => {
//     console.log("result:", result)
// })
// .catch((result) => {
//     console.log("result:", result )
// })


// Promise chay song song
// var promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([1]);
//     }, 2000)
// });
// var promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([2, 3]);
//     }, 3000)
// });

// Promise.all([promise1, promise2])
//     .then((result) => {
//         var result1 = result[0];
//         var result2 = result[1];

//         console.log(result1.concat(result2))
//     });


// var users = [
//     {
//         id: 1,
//         name: 'Kien Dam',
//     },
//     {
//         id:2,
//         name:'Son Dang',
//     },
//     {
//         id:4,
//         name:'Thanh Tung'
//     },
    
    
    
// ];

// var comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content:'Anh Son Chua ra video :('
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content:'Vua ra xong em oi ^^'
//     },
//     {
//         id: 1,
//         user_id: 1,
//         content:' Tuyet Qua anh oi'
//     },
//     {
//         id: 4,
//         user_id: 4,
//         content:' video hay qua '
//     },
// ];

// // 1. Lấy comments
// // 2. Từ comments lấy ra user_id,
// // từ user_id lấy ra user tương ứng

// // Fake API
// // lấy ra danh sách comment
// function getComments(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve(comments)
//         },1000)
//     })
// };
// // duyệt qua danh sách người dùng xem: 
// // người nào có id trùng với user_id của danh sách comment ko
// // sau 1s trả về kết quả trùng(result)
// // cho promise, promise trả về cho getUserById
// function getUsersById(useIds){
//     return new Promise(function(resolve){
//         var result = users.filter(function(User){
//             return useIds.includes(User.id)
//         });
//         setTimeout(function(){
//             resolve(result)
//         },1000)
//     })
// }

// getComments()
//     .then(function(comments){
//         // lấy ra danh sách userIds = các user_id con
//         var useIds = comments.map(function(comment){
//             return comment.user_id;
//         });
//         // chuyền userid của phần comment vào id người dùng
//         return getUsersById(useIds)
//         // thực hiện lấy ra các người dùng có id = user_id 
//         // dựa trên hàm getUsersByIds
//             .then(function(users){
//                 return{  
//                     users: users,
//                     comments : comments
//                 };
//         });
//     })
//     // bây giờ ta đã có được thông tin những người
//     // dùng đã comment đặt tên là data
//     .then(function(data){
//         var boxcomments = document.getElementById("boxComment");
//         // object data có 2 đối tượng là users và comments
//         // sau đó duyệt qua từng phần tử của comments
//         // lần lặp đầu tiên sẽ dựa trên user_id của comment1 
//         // để tìm ra user1 tương tự với lần lặp thứ 2 và ...
//         var html = '';
//         data.comments.forEach((comment) => {
//             // kiểm tra xem trong users, phần tử nào có id 
//             // bằng id trong user_id của comment.
//             // sau đó trả phần tử đó về user
//             var user = data.users.find((user) => {
//                 return user.id === comment.user_id;
//             });
//             html += `<li>${user.name} : ${comment.content}</li>`;
//         });
//         boxcomments.innerHTML = html;
//     })
    
   

// ************************** Fetch

// ********* response.json();
// - JSON server: API Server
// - CRUD  
//       - Create: Tạo mới -> POST
//       - Read: Lấy Dữ Liệu -> GET
//       - Update: Chỉnh sửa -> PUT / PATCH
//                  (PUT sửa toàn bộ source code)
//                  (PATCH chỉ thay đổi nội dung cân sửa)
//       - Delete: Xóa = DELETE 
// - Postman



// 1. Fornt-end : Xây dựng giao diện người dùng

// 2. Back-end: Xây dựng logic xử lý 
// + Cơ sở dữ liệu

// API (URL) -> Application programing interface

// Cổng giao tiếp giữa các Phần Mềm

// var postApi =
//     'https://jsonplaceholder.typicode.com/posts'

// fetch(postApi)
//     .then(function(response){
//         return response.json();
//         //JSON.parse : JSON --> Javascript Types
//     })
//     .then(function(posts){
//         var htmls = posts.map(function(post){
//             return `<li>
//                         <h4>title: ${post.title}</h4>
//                         <p>id: ${post.id}</p>
//                         <p>userID: ${post.userId}</p>
//                     </li>`;
//         });
//         var html = htmls.join('');
//              document.getElementById('PostBlock').innerHTML = html;
//     })
//     .catch(function(err){
//         console.log('Co Loi~!')
//     })

// var PostNW = 'https://jsonplaceholder.typicode.com/posts'

// Node js cach chay localhost
// terminal : npm start 

// var CourseAPI = 'http://localhost:3000/courses';

// fetch(CourseAPI)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(courses){
//         console.log(courses)
//     })


// - CRUD  
//       - Create: Tạo mới -> POST
//       - Read: Lấy Dữ Liệu -> GET
//       - Update: Chỉnh sửa -> PUT / PATCH
//                  (PUT sửa toàn bộ source code)
//                  (PATCH chỉ thay đổi nội dung cân sửa)
//       - Delete: Xóa = DELETE 
// - Postman
// - Example





var courseAPI = 'http://localhost:3000/courses'

function start(){
    // getCourses(function(courses){
    //     renderCourses(courses)
    // });
    // callback promise get -> render
    getCourses(renderCourses);
    handleCreateForm();
}

start();


function getCourses(callback){
    fetch(courseAPI)
        .then(function(response){
            return response.json();
        })
        .then(callback)

}
function renderCourses(courses){
    var listCourse = document.querySelector('#list-courses');
    var htmls = courses.map(function(course){
        return `
            <li class="course-item-${course.id}">
                <h4>name: ${course.name}</h4>
                <p>id: ${course.id}</p>
                <p>description: ${course.description}</p>
                <button onclick="deleteCourse(${course.id})">Delete</button>
                <button onclick="fixCourse(${course.id})">Repair</button>

            </li>
        `
    })
    var html = htmls.join('')
    listCourse.innerHTML = html
}


function handleCreateForm(){
    
    var ClickCreat = document.querySelector('#create')
    
    ClickCreat.onclick = function(item){
        var inputname = document.querySelector('input[name="name"]').value;
        var descriptionname = document.querySelector('input[name="description"]').value;

        formData = {
            name: inputname,
            description: descriptionname
        };

        creatCourse(formData, function(){
            getCourses(renderCourses);

        })
    }
}

function handlGetCourse(id){
    var options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }; 
    fetch(courseAPI + '/' + id, options)
        .then(function(response){
            response.json();
        })
        .then(function(course){
            var inputname = document.querySelector('input[name="name"]');
            var descriptionname = document.querySelector('input[name="description"]');

            inputname.value = course.value;
            descriptionname.value = course.description;
            var creatBtn = document.querySelector('#create');
            creatBtn.onclick = function(){
                var data= {
                    name:inputname.value,
                    description: descriptionname.value
                }
                handlGetCourse(id, data)
            }
        })
}
// Thay Doi gia tri khoa hoc
function fixCourse(data, id){
    var options = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }; 
    fetch(courseAPI + '/' + id, options)
        .then(function(response){
           return response.json();
        })
        .then(function(){
            getCourses(renderCourses)
        })
}

// sau khi nhan du lieu can gui di yeu cau handle
// data la obj cua {name va description}
function creatCourse(data, callback){
    // vi getCourse da dung fetch(courseAPI) ma
    // creatCourse() thi khong co nen phai goi du~ lieu ve
    var options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };    
    fetch(courseAPI, options)
        .then(function(response){
            response.json();
        })
        .then(callback)
}
    


// function deleteCourse(id){
//     var options = {
//         method: 'Delete',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };    
//     fetch(courseAPI + '/' + id, options)
//         .then(function(response){
//             response.json();
//         })
//         .then(function(){
//             getCourses(renderCourses);
//         })
// }
function deleteCourse(id){
    var options = {
        method: 'Delete',
        headers: {
            'Content-Type': 'application/json'
        }
    };    
    fetch(courseAPI + '/' + id, options)
        .then(function(response){
            response.json();
        })
        .then(function(itemdelete){
            var courseitemdelete = document.querySelector('.course-item-'+id)
            if(courseitemdelete){
                courseitemdelete.remove();
            }
        })
}
