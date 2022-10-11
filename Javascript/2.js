// var styles = ['Jazz', 'Blues'];
// console.log(styles)
// styles.push('Rock-n-Roll'); // them phan tu vao cuoi 
// console.log(styles)
// styles.splice(1, 1,'Classic') // thay doi/ xoa / chen
// console.log(styles)
// var firstelement = styles.shift(); // tach pt dau` tien cua mang va tao mang moi
// console.log(styles);
// styles.unshift('rap', 'Reggae')  // them pt vao dau mang 
// console.log(styles)

// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// })

// arr[2]();

// for(var i = 100; i >= 0; i--){
//     if(i%5 == 0){
//         console.log(i)
//     }
// }

// bai tap kiem tra co phai so nguyen duong hay khong
// c1:
// function isInteger(value){
//     return( Number.isInteger(value) && value > 0)
// } 
// console.log(isInteger(2));

// c2:
// function isInteger(value){
//     return (typeof value == 'number' && value > 0 && value % 1 == 0)
// }
// console.log(isInteger(1))

//  bai tap kiem tra so nguyen am
// c1:
// function isInteger(value){
//     return(typeof value == 'number' && value < 0 && value % 1 == 0)
// }
// console.log(isInteger(-1))
// c2:
// function iInteger(value){
//     return Number.isInteger(value) && value < 0
// }
// console.log(iInteger(-19))

//  Tinh Tong Hai so 
// c1:
// function Total(a, b){
//     var sum = a + b;
//     return sum;
// }
// console.log(Total(2 , 4))
// c2: kiem tra du lieu truoc khi tinh tong js

// function total(a, b){
//     try{
//         a = Number(a);
//         b = Number(b);
//         if (isNaN(a) || isNaN(b)){
//             throw new Error('Dữ liệu bạn nhập vào không phải là số');
//         }
//         return a + b;
//     }
//     catch (e){
//         console.log(e.message);
//         return false;
//     }
// }
// console.log(typeof total(1, "#1"))
// console.log(total(1, "202"))

// Tinh Tong Cac phan tu trong mang

// c1:
// var arr = [1, 3, 5, 8, 3]
// var sum = 0;
// function sumArray(arr){
//     for(var i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum
// }
// console.log(sumArray(arr))


// c2: Dung forEach
// function sumArray(arr){
//     var sum = 0;
//     arr.forEach(function sumArray(arrs) {
//         sum += arrs
//     });
//     return sum
// }
// var arr = [1, 3, 5, 8, 3]
// console.log(sumArray(arr))


// c3: Dung Ham Map()

// function sumArray(arr){
//     var sum = 0;
//     arr.map(function(arrs){
//         sum += arrs
//     });
//     return sum
// }
// var arr = [1, 3, 5, 8, 3]
// console.log(sumArray(arr))

// Ham giai phuong trinh bac nhat 1 an
// C1:

// function ptbn(a, b){
//     if(a != 0 && b == 0){
//         alert('phuong trinh co 1 nghiem x = 0');
//     }
//     else if ( a == 0 & b == 0){
//         alert('phuong trinh co vo so nghiem');
//     }
//     else if( a == 0 & b != 0){
//         alert('phuong trinh vo nghiem');
//     }
//     else{
//         alert('phuong trinh co nghiem la: ' + (-b/a));
//     }
// }
// console.log(ptbn(5, -20))

//  Kiem Tra so nguyen to
// c1:

// function snt(value){
//     if(value <= 1 ){
//         return `${value} khong phai la so nguyen to`;
//     }
//      if(value % Math.sqrt(value)==0){
//         return `${value} khong phai la so nguyen too`;
//     }
//      if(value == 2 || value == 3){
//         return `${value} la so nguyen to`;
//     }

//     for(var i = 2, sqrt = Math.sqrt(value); i <= sqrt; i++){
//         if(value % i == 0){
//         return `${value} khong phai la so nguyen to`;
//         }
//     }
//     return `${value} la so nguyen to`;
// }
// console.log(snt(6));

// var watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//     }
//   ];
//   function calculateRating (watchList){
//       var newlist = watchList.filter((film) => {
//           return film.Director === 'Christopher Nolan';
//       })
//       var totalIMDB = newlist.reduce(function(sum, item){
//             return sum + parseFloat(item["imdbRating"]);
//       }, 0)
//       return totalIMDB / newlist.length;

//   }
//   console.log(calculateRating(watchList))
  
  
//   function calculateRating(watchList) {
//     var newList = watchList.filter((film) => {
//       return film.Director === "Christopher Nolan";
//     });
//     var totalIMDB = newList.reduce((a, b) => a + b.imdbRating * 1, 0);
//     return totalIMDB / newList.length;
//   }



object[arrItem[0]] = arrItem[1];
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