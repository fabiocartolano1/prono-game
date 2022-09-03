import axios from 'axios'
import { getFirestore, doc, setDoc, getDocs, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBKdcq8JNRWunqEohRBQ-woo796HI1Irgs",
    authDomain: "prono-game2.firebaseapp.com",
    projectId: "prono-game2",
    storageBucket: "prono-game2.appspot.com",
    messagingSenderId: "190891791891",
    appId: "1:190891791891:web:6c9cfe972a90f6a06091e6",
    measurementId: "G-8DY30B52PN"
  }
const userId = "K0VK4wcVrDgozKIrnHpN";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const setBets = async () => {

    let config = {
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "858b8f39a2c8b232bf3e39099c50ef16"
        }

    }
    const querySnapshot = await getDocs(collection(db, "matchs"));
    querySnapshot.forEach(async (doc) => {
    const newBetRef = doc(collection(db, "bets"));

    // later...
    await setDoc(newBetRef,{
        idMatch : doc.id,
        idUser : userId,
        home : null,
        away : null
    } );
    });

}

setBets()
