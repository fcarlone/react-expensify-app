const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      firstName: 'Frank',
      lastName: 'Carlone'
    });
    // resolve('this is my resolved data');
    // resolve('this is my other resolved data');
    reject('something went wrong');
  }, 4000);
});

console.log('before');

// promise.then((data) => {
//   console.log('1', data);
// });

// catch error when error is thrown (reject)
// promise.then((data) => {
//   console.log('2', data);
// }).catch((error) => {
//   console.log('error: ', error);
// });

// promise chaining
// promise.then((data) => {
//   console.log('1', data);
//   // pass some data from one successful callback to another
//   return 'some data'
// }).then((str) => {
//   console.log('does this run', str);
// }).catch((error) => {
//   console.log('error: ', error);
// });

// promise chaining - return a new promise
promise.then((data) => {
  console.log('1', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('this is my other promise');
    }, 4000);
  });
}).then((str) => {
  console.log('does this run', str);
}).catch((error) => {
  console.log('error: ', error);
});

// different syntax - using catch handler
// promise.then((data) => {
//   console.log('2', data);
// }, (error) => {
//   console.log('error: ', error);
// });

console.log('after');
