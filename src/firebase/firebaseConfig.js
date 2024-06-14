import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3ktAwbnbopE5hiwA_CUCRNDjooykhjMg",
  authDomain: "mystore-99e89.firebaseapp.com",
  projectId: "mystore-99e89",
  storageBucket: "mystore-99e89.appspot.com",
  messagingSenderId: "101376963885",
  appId: "1:101376963885:web:eb1a2757499686a905cfa4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)