
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyCUFK2FmhH4h1XLNbRG8oE63NqlNMySLts",
    authDomain: "sorteo-51124.firebaseapp.com",
    projectId: "sorteo-51124",
    storageBucket: "sorteo-51124.appspot.com",
    messagingSenderId: "931613622001",
    appId: "1:931613622001:web:7f808dca092bd54047b350",
    measurementId: "G-09EZ6E1WWZ"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const registerUser = async (userData) => {
    try {
        const docRef = await addDoc(collection(db, "users"), userData);
        console.log("Usuario registrado con ID: ", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("Error añadiendo documento: ", e);
    }
};