importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js');

firebase.intializeApp({
    apiKey: "AIzaSyDIdjSbPCbAAY-HyUQ0vE6jIL8quWAyubI",
    authDomain: "jobconnect-fdf9c.firebaseapp.com",
    databaseURL: "https://jobconnect-fdf9c-default-rtdb.firebaseio.com",
    projectId: "jobconnect-fdf9c",
    storageBucket: "jobconnect-fdf9c.appspot.com",
    messagingSenderId: "928286298707",
    appId: "1:928286298707:web:716e36083c3df56565aca6",
    measurementId: "G-F3EQM5PE97"
});

const messaging = firebase.messaging();