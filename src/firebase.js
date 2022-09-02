import { initializeApp } from "firebase/app";
import { getFirestore, doc, onSnapshot, setDoc, query, where, getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore"; 


import { ref, onUnmounted } from 'vue'

const firebaseConfig = {
    apiKey: "AIzaSyBKdcq8JNRWunqEohRBQ-woo796HI1Irgs",
    authDomain: "prono-game2.firebaseapp.com",
    projectId: "prono-game2",
    storageBucket: "prono-game2.appspot.com",
    messagingSenderId: "190891791891",
    appId: "1:190891791891:web:6c9cfe972a90f6a06091e6",
    measurementId: "G-8DY30B52PN"
  }


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const usersCollection = collection(db,'users')

export const createUser = async user => {
  console.log(user)
  user.forEach(async (match) =>{
    await setDoc(doc(db, "matchs", match.fixture.id.toString()), {
      goals : match.goals,
      teams: match.teams,
      round : match.league.round.split(' - ')[1],
      season : match.league.season
    });
  })
  return "bien ajouté"
}
export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = onSnapshot(collection(db, "users"),(querySnapshot)=>{
      users.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  });
  onUnmounted(close)
  return users
}

export const getMatchs = async (round) => {

  let matchs = []
  const q = query(collection(db, "matchs"), where("round", "==", round.toString()));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
      matchs.push(doc.data())
  });
  return matchs
};