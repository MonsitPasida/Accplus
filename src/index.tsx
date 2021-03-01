import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import firebase  from 'firebase/app';
import {User} from '@firebase/auth-types';
import "firebase/auth";
import React, {  createContext, FC, useEffect, useState } from "react";


firebase.initializeApp({
  apiKey: "AIzaSyDrSnF49mH__zabWJcIK_ffBy6WZ051Pdw",
  authDomain: "login-app-c69d6.firebaseapp.com",
  projectId: "login-app-c69d6",
  storageBucket: "login-app-c69d6.appspot.com",
  messagingSenderId: "629363034421",
  appId: "1:629363034421:web:1cf1614c64175f5c5d247c",
  measurementId: "G-VWC7LT5XCM",
});

export const auth = firebase.auth();

export const UserContext = createContext<User | null>(null );;

const UesrProvidr: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null );;

  useEffect(() => {
    auth.onAuthStateChanged( userAuth => setUser(userAuth));
  }, []);

  return <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>;
};

ReactDOM.render(
  <UesrProvidr>
    <App />
  </UesrProvidr>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
