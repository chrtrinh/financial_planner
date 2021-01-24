import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBgROiGkX1Ex3qKbxA7AqG7j62ySfbg0BQ",
	authDomain: "deenero-financial-planner.firebaseapp.com",
	projectId: "deenero-financial-planner",
	storageBucket: "deenero-financial-planner.appspot.com",
	messagingSenderId: "98656673202",
	appId: "1:98656673202:web:0d09f985c8bb60bf6b58ab",
	measurementId: "G-PZLFVQC1L6",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
