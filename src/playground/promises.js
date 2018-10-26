const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   firstName: 'Frank',
    //   lastName: 'Carlone'
    // });
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
promise.then((data) => {
  console.log('2', data);
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
