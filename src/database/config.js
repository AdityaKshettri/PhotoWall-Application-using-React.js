import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCzlV9cPb8SUECAedfMkh8PANKbGVVLJNc",
    authDomain: "photowall-reactjs-app.firebaseapp.com",
    databaseURL: "https://photowall-reactjs-app.firebaseio.com",
    projectId: "photowall-reactjs-app",
    storageBucket: "photowall-reactjs-app.appspot.com",
    messagingSenderId: "217539078707",
    appId: "1:217539078707:web:69b756e337fe4d16e95146",
    measurementId: "G-KYBD2WBPNH"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();

export default database;