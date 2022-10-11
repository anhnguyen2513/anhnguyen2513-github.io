// var users = [
//     {
//         id: 1,
//         name:'Nguyen Tung'
//     },
//     {
//         id: 2,
//         name:'Son Dang'
//     },
//     {
//         id: 3,
//         name:'Bui Tuan'
//     },
// ];

// var comments = [
//     {   
//         id: 1,
//         user_id: 1,
//         content:'Anh son chua ra video'
//     },
//     {   
//         id: 2,
//         user_id: 2,
//         content:'Anh vua ra video xong'
//     },
//     {   
//         id: 3,
//         user_id: 3,
//         content: 'Video hay qua anh oi'
//     }
// ]
// // lấy comments
// // từ comment lấy ra user_id,
// // từ user_id lấy ra user tương ứng

// // 1. Lấy comments
// // 2. Từ comments lấy ra user_id,
// // từ user_id lấy ra user tương ứng

// function getByComment(){
//     return new Promise((resolve) => {
//         setTimeout(() =>{
//             resolve(comments)
//         }, 1000)
//     });
// }
// function getUserById(Userid){
//     return new Promise((resolve) => { 
//         var boxUserid = users.filter(function(userid){
//             return Userid.includes(userid.id)
//         });
//         setTimeout(() => {
//             resolve(boxUserid);
//         },1000)
//     });
// };
//     getByComment()
//         .then(function(comments){
//             var Userid = comments.map(function(comment){
//                 return comment.user_id;
//             })
//             return getUserById(Userid)
//                 .then(function(users){
//                     return {
//                         users: users,
//                         comments: comments
//                     }
                    
//             })
//         })
//         // da lay duoc tt nguoi dung da cmt va dat ten la data
//         .then(function(data){

//             var commentblock = document.getElementById('boxComment');
//             var html ='';
            
//             data.comments.forEach((comment) => {
//                 var user = data.users.find(function(user){
//                     return user.id === comment.user_id;
//                 })
//                 html += `<li>${user.name}: ${comment.content}</li>`
//             });
//             commentblock.innerHTML = html;
//         })


// var nwapi = 'https://jsonplaceholder.typicode.com/posts'

// fetch(nwapi)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(render){
        
//         var NWAPI = document.getElementById('PostBlock');
//         var htmls = render.map(function(renders){
//             return htmls = `
//             <h4>Title: ${renders.title}</h4>
//             <p>ID: ${renders.id}</p>
//             <p>UserID: ${renders.userId}</p>
//             `
//         });
//         var html = htmls.join(' ')
//         NWAPI.innerHTML = htmls;
//     })
//     .catch(function(err){
//         console.log('Co Loi~!')
//     })

var CourseAPI = 'http://localhost:3000/courses';

fetch(CourseAPI)
    .then(function(response){
        return response.json();
    })
    .then(function(courses){
        console.log(courses)
    })

// star localhost npm start 