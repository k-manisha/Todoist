import { initializeApp } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9VoScsY-6WnMCkjy133fwrHMS2brgpgo",
  authDomain: "todo-r-list.firebaseapp.com",
  databaseURL: "https://todo-r-list-default-rtdb.firebaseio.com",
  projectId: "todo-r-list",
  storageBucket: "todo-r-list.appspot.com",
  messagingSenderId: "563239687569",
  appId: "1:563239687569:web:ba7f1c970e69d939c1b630",
};

const app = initializeApp(firebaseConfig);

export { app as firebase };
