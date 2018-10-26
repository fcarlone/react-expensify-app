import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCxMAUgZDm4DORkbpoHhi0Ae9VdJSuMe7s",
  authDomain: "expensify-react-e009e.firebaseapp.com",
  databaseURL: "https://expensify-react-e009e.firebaseio.com",
  projectId: "expensify-react-e009e",
  storageBucket: "expensify-react-e009e.appspot.com",
  messagingSenderId: "804441332780"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// REFERENCES BELOW:

// // child removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childsnapshot) => {
//     expenses.push({
//       id: childsnapshot.key,
//       ...childsnapshot.val()
//     });
//   });
//   console.log(expenses)
// }, (e) => {
//   console.log('Error fetching data', e);
// });


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []

//     snapshot.forEach((childsnapshot) => {
//       expenses.push({
//         id: childsnapshot.key,
//         ...childsnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });


// database.ref('notes').push({
//   title: 'groceries',
//   body: 'apples'
// });

// database.ref('notes/-LPhaLv0bs8hRjO65gmh').update({
//   body: 'update note application'
// });

// database.ref('expenses').push({
//   description: 'cell phone bill',
//   note: 'note 5',
//   amount: 1234.99,
//   createdAt: 100000
// });

// const firebaseNotes = {
//   notes: {
//     uniqueid1: {
//       title: 'this is title one',
//       body: 'this is note note'
//     },
//     uniqueid2: {
//       title: 'this is title two',
//       body: 'this is body two'
//     }
//   }
// };

// database.ref().on('value', (snapshot) => {
//   const data = snapshot.val();
//   const refName = data.name;
//   const refTitle = data.job.title;
//   const refCompany = data.job.company;
//   console.log(`${refName} is a ${refTitle} at ${refCompany}.`)
// }, (e) => {
//   console.log('Error fetching data', e);
// });

// setTimeout(() => {
//   database.ref().update({
//     name: 'Frank Carlone',
//     'job/title': 'Marketer'
//   });
// }, 4000);

// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// });

// on method stored in a variable
// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e)
// });

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 4000);
// database.ref().off(onValueChange);

// unsubscribe - using off method 
// database.ref().off();

// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((error) => {
//     console.log('Getting fetching error: ', error);
//   });

// database.ref().set({
//   name: 'Frank Carlone',
//   age: 47,
//   stressLevel: 5,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   isSingle: true,
//   location: {
//     city: 'Philadelphia',
//     state: 'PA'
//   }
// }).then(() => {
//   console.log('Data is saved.');
// }).catch((e) => {
//   console.log('this failed.', e)
// });

// update method - only at root level
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle',
//   'location/state': 'WA'
// });

// database.ref().update({
//   'job/title': 'marketing'
// });

// update method - for nested values
// database.ref().update({
//   job: 'Manager',
//   'location/city': 'Pittsburgh'
// });

// database.ref().set('this is my data.');

// database.ref('age').set(55);
// database.ref('location/city').set('Pittsburgh');

// database.ref('attributes').set({
//   height: 75,
//   weight: 190
// }).then(() => {
//   console.log('attributes are saved.');
// }).catch((error) => {
//   console.log('This failed. ', error);
// });


// remove method
// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('isSingle is removed');
//   }).catch((error) => {
//     console.log('Removed failed. ', error);
//   });

// using set to remove data
// database.ref('isSingle').set(null);
