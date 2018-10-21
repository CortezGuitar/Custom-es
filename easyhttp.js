// ES7 VERSION / async-await
class EasyHTTP {
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
      });
    const resData = await response.json();
    return resData
  }

  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    return resData 
  }

  async delete(url) {
    await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
    const resData = await 'Deleted...';
    return resData
  }
}

// ES6 VERSION / Fetch with Promises

// class EasyHTTP {
//   get (url) {
//     return new Promise((resolve, reject) => {
//       fetch (url)
//       .then (res => res.json())
//       .then (data => resolve(data))
//       .catch (err => reject(err));
//     });
//   }

//   post (url, data) {
//     return new Promise((resolve, reject) => {
//       fetch (url, {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       })
//       .then(res => res.json())
//       .then(data => resolve(data))
//       .catch(err => reject(err));
//     });
//   }

//   put (url, data) {
//     return new Promise((resolve, reject) => {
//       fetch (url, {
//         method: 'PUT',
//         headers: {
//           'Content-type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       })
//       .then(res => res.json())
//       .then(data => resolve(data))
//       .catch(err => reject(err));
//     });
//   }

//   delete (url) {
//     return new Promise((resolve, reject) => {
//       fetch (url, {
//         method: 'DELETE',
//         headers: {
//           'Content-type': 'application/json'
//         }
//       })
//       .then(res => res.json())
//       .then(() => resolve('Deleted...'))
//       .catch(err => reject(err));
//     });
//   }
// }


// ES5 VERSION

// function easyHTTP () {
//   this.http = new XMLHttpRequest();
// }

// // Make an HTTP GET request
// easyHTTP.prototype.get = function(url, callback) {
//   this.http.open('GET', url, true);

//   let self = this;
//   this.http.onload = function () {
//     if(self.http.status === 200) {
//       callback(null, self.http.responseText);
//     } else {
//       callback('Error:' + self.http.status);
//     }
//   };
//   this.http.send();
// };

// // Make an HTTP POST request
// easyHTTP.prototype.post = function (url, data, callback) {
//   this.http.open ('POST', url, true);
//   this.http.setRequestHeader('Content-type', 'application/json');

//   let self = this;
//   this.http.onload = function () {
//     callback(null, self.http.responseText);
//   };

//   this.http.send(JSON.stringify(data));
// };

// // Make an HTTP PUT request
// easyHTTP.prototype.put = function (url, data, callback) {
//   this.http.open ('PUT', url, true);
//   this.http.setRequestHeader('Content-type', 'application/json');

//   let self = this;
//   this.http.onload = function () {
//     callback(null, self.http.responseText);
//   };

//   this.http.send(JSON.stringify(data));
// };

// // Make an HTTP DELETE request
// easyHTTP.prototype.delete = function (url, callback) {
//   this.http.open ('DELETE', url, true);
//   this.http.setRequestHeader('Content-type', 'application/json');

//   this.http.onload = function () {
//     callback(null, 'Post deleted');
//   };

//   this.http.send();
// };
