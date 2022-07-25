// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, deleteUser } from "firebase/auth";
// import { getDatabase } from "firebase/database";
import {  addDoc, collection, doc, getDocs, getFirestore, onSnapshot, query, setDoc, where } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkI1m2HD9kZdUf4HrKc5SBZfdWCcnmv14",
  authDomain: "todolist-sanjo.firebaseapp.com",
  projectId: "todolist-sanjo",
  storageBucket: "todolist-sanjo.appspot.com",
  messagingSenderId: "364241397263",
  appId: "1:364241397263:web:07ed66791b071df84aa57a",
  measurementId: "G-HKRNVYTXT2"
};

// Initialize Firebase1
export const app = initializeApp(firebaseConfig);
const db = getFirestore();
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const writeUserData = async (email, data) => {
  const email1 = email;
  const data1 = data;




  if (email && !data) {
    console.log("first")
    await addDoc(collection(db, "users"), {
      email: email1,
      collections: []
    })  
  }

  if (email && data) {
    console.log(data1)

    // await addDoc(collection(db, "users"), {
    //   email: email1,
    //   data: data1
    // })users
    const citiesRef = collection(db, "users");

    // Create a query against the collection.
    console.log(email)
    const q = query(citiesRef, where("email", "==", email));
    
    // const q = query(collection(db, "users"), where("email", "==", "asdasdasd@gmail.com"));

    const querySnapshot = await getDocs(q);

  querySnapshot.forEach(async (documento) => {
  let datos = documento.data()
  let copia = {...datos} ;
  let nombre = data1.name;
  let color = data1.color;
  let icon = data1.icon;
  copia.collections.push({nombre, color, icon, theme:"grey", datos: []});

  await setDoc(doc(db, "users", documento.id), copia);
});
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
    // });    
  }
  
}
export let collection22 = "prueba";


export const searchCollectionData = async (currentUser,hanlar) => {
  if(hanlar && currentUser){
    let id = "";
    const citiesRef = collection(db, "users");
    const q = query(citiesRef, where("email", "==", currentUser.email));  
    const querySnapshot = await getDocs(q);
    id = querySnapshot.docs[0].id;

    // querySnapshot.forEach(async (documento) => {
    //   let datos = documento.data()
    //   email = datos.email
    //   console.log(datos)
    //   });
    
    onSnapshot(doc(db, "users", id), async (doc) => {
      let datos = doc.data()
      hanlar(datos.collections)
    })
  }
  // console.log(dato)
  
}

export const writeCollectionData = async (email, data) =>{
  if (email && data) {
    const citiesRef = collection(db, "users");

    // Create a query against the collection.
    const q = query(citiesRef, where("email", "==", email));
    
    // const q = query(collection(db, "users"), where("email", "==", "asdasdasd@gmail.com"));

    const querySnapshot = await getDocs(q);

  querySnapshot.forEach(async (documento) => {
  let datos = documento.data()
  let copia = {...datos} ;
  let nombre = data.name;
  let color = data.color;
  let icon = data.icon;
  copia.collections.push({nombre, color, icon, theme:"grey", datos: []});

  await setDoc(doc(db, "users", documento.id), copia);
});
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
    // });    
  }

}

export const writeTodoData = async (email, data) => {
  if (email && data) {
    console.log(data.collectionsSelect)

    const citiesRef = collection(db, "users");

    // Create a query against the collection.
    const q = query(citiesRef, where("email", "==", email));
    
    // const q = query(collection(db, "users"), where("email", "==", "asdasdasd@gmail.com"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach( documento => {
      let colecciones = documento.data().collections

      colecciones.find( async (collection) => {
        console.log(collection.nombre)
      })

    });
      }
  console.log(data)
}

writeUserData()