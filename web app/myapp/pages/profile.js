import React, { useState, useEffect } from "react";
import { storage, db, auth } from "../firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";

const Profile = () => {
  const [img, setImg] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists) {
        setUser(docSnap.data());
      }
    });
  });

  return user ? (
    <section>
      <div className="profile_container">
        <div className="img_container">
          <div className="overlay">
            <div>
              <label htmlFor="photo"></label>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="photo"
                onChange={(e) => setImg(e.target.files[0])}
              />
            </div>
          </div>
        </div>
        <div className="text_container">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <hr />
          <small>Joined on: {user.createdAt.toDate().toDateString()}</small>
        </div>
      </div>
    </section>
  ) : null;
};

export default Profile;
