const firebaseConfig = {
    apiKey: "AIzaSyCw3inF5dfMAN7GWaZEP8z6tqRYloyMN44",
    authDomain: "tik-tok-clone-9cc7b.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-9cc7b.firebaseio.com",
    projectId: "tik-tok-clone-9cc7b",
    storageBucket: "tik-tok-clone-9cc7b.appspot.com",
    messagingSenderId: "1078525595972",
    appId: "1:1078525595972:web:088bcf1540c019e37c0711"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;