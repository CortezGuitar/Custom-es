// ES6 VERSION
const http = new EasyHTTP();

// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

const data = {
  name: 'John Petrucci',
  username: 'johnpetrucci',
  email: 'jpetrucci@gmail.com'
};

// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// http.put('https://jsonplaceholder.typicode.com/users/3', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/3')
  .then(data => console.log(data))
  .catch(err => console.log(err));

// ES5 VERSION

// const http = new easyHTTP();
// // Get posts
// // http.get('https://jsonplaceholder.typicode.com/posts', (err, posts) => {
// //   if(err) {
// //     console.log(err);
// //   } else {
// //     console.log(posts);
// //   }
// // });

// // // Get single post
// // http.get('https://jsonplaceholder.typicode.com/posts/1', (err, post) => {
// //   if(err) {
// //     console.log(err);
// //   } else {
// //     console.log(post);
// //   }
// // });

// // Create data
// const data = {
//   title: 'Custom post',
//   body: 'This is custom post'
// };

// // Create post
// // http.post('https://jsonplaceholder.typicode.com/posts', data, (err, post) => {
// //   if(err) {
// //     console.log(err);
// //   } else {
// //     console.log(post);
// //   }
// // });

// // Update post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, (err, post) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// // Delete post
// http.delete('https://jsonplaceholder.typicode.com/posts/1', (err, response) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });