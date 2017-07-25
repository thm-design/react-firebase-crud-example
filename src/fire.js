import firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBRsAzMA3oQYIpmDeh0Naur854S_a0YHxk',
  authDomain: 'react-crud-b236b.firebaseapp.com',
  databaseURL: 'https://react-crud-b236b.firebaseio.com',
  projectId: 'react-crud-b236b',
  storageBucket: 'react-crud-b236b.appspot.com',
  messagingSenderId: '160517016818'
};
var fire = firebase.initializeApp(config);
export default fire;
