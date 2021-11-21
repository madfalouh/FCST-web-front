import React, { useRef, useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import {  db, auth } from "../firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Header from "../components/Header";

firebase.initializeApp({
  apiKey: "AIzaSyBCOsnTXv_-slD3V_EGJsQJNox9keCYihY",
  authDomain: "studied-biplane-288914.firebaseapp.com",
  databaseURL: "https://studied-biplane-288914-default-rtdb.firebaseio.com",
  projectId: "studied-biplane-288914",
  storageBucket: "studied-biplane-288914.appspot.com",
  messagingSenderId: "200125937769",
  appId: "1:200125937769:web:b7dd80653ea66fa3ad8af8",
  measurementId: "G-BPWS19HWJM",
});

const firestore = firebase.firestore();
const handleOnClickOnLogout = async () => {
  await updateDoc(doc(db, "users", auth.currentUser.uid), {
    isOnline: false,
  });

  await signOut(auth);

  router.push("/Home");
};

function Chat() {
  const [user, setUser] = useState();

  useEffect(() => {
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists) {
        setUser(docSnap.data());
      }
    });
  });

  return (
    <div className="App">
      <header>
        <h1></h1>
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </>
  );
}

function SelectUser() {
  const UserRef = firestore.collection("users");
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.where(
    "uuid",
    "==",
    "njKfj9LCruaRr9DTrvBo9YBtU5c2",
    "||",
    "uid",
    "==",
    "9pPxdDNKq8Ppbzffwp4M598yVAK2"
  );

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      uuid,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />

      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="type your message here "
        />

        <button type="submit" disabled={!formValue}>
          💬
        </button>
      </form>
    </>
  );
}

function ChatMessage(e) {
  const { text, uid, photoURL } = e.message;
  return (
    <>
      <div>
        <img src={photoURL} />
        <p>{text}</p>
      </div>
    </>
  );
}

export default Chat;
