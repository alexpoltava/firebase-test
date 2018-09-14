import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/functions';

const config = {
    apiKey: "AIzaSyD5OzagQcqdqO_QiCYK5WFIlfcbaI3F0Ts",
    authDomain: "fir-test-9dca1.firebaseapp.com",
    databaseURL: "https://fir-test-9dca1.firebaseio.com",
    projectId: "fir-test-9dca1",
    storageBucket: "fir-test-9dca1.appspot.com",
    messagingSenderId: "1084724618663"
  };
firebase.initializeApp(config);

const functions = firebase.functions();

export {
  firebase,
  functions,
};
