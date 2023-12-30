/* eslint-disable no-unused-vars */

/***** FIREBASE integration ******/

// Import needed functions from required SDKs
import { initializeApp } from "firebase/app";

// // import { getFirestore }
// // from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

import {    getAuth,
            createUserWithEmailAndPassword,
            onAuthStateChanged,
            signInWithEmailAndPassword,
            sendPasswordResetEmail,
            sendSignInLinkToEmail,
            isSignInWithEmailLink, signInWithEmailLink,
            signOut,
            reauthenticateWithCredential,
            deleteUser
}
from "firebase/auth";

/**google login alternative */
import { GoogleAuthProvider, signInWithPopup }
from "firebase/auth"


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCygUhe2mwIEf1Bas6EwsVgxmX0X9QA1HI",
    authDomain: "littlewhiz-learner.firebaseapp.com",
    projectId: "littlewhiz-learner",
    storageBucket: "littlewhiz-learner.appspot.com",
    messagingSenderId: "315417833283",
    appId: "1:315417833283:web:1aa0e0703cd1848c7b09f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// authenticate
const auth = getAuth(app);
const email = "triremesolutions@proton.me";
const password = "freedom";


/*****************************/
// littleWhiz User functions //

// const homeURL = 'https://trireme-littlewhiz.netlify.app';
const homeURL = 'https://littlewhiz-learner.web.app';

const actionCodeSettings = {
    url: `${homeURL}`,
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.littlewhiz.ios'
    },
    android: {
      packageName: 'com.littlewhiz.android',
      installApp: true,
      minimumVersion: '12'
    },
    dynamicLinkDomain: 'littlewhizlearner.page.link'
    //dynamicLinkDomain: 'trireme-littlewhiz.netlify.app'//invalid. firbase host required
  };


// create new account 
export function newLearner(){
    createUserWithEmailAndPassword(auth, email, password)
    .then((credentials) => {
        console.log(credentials);
        console.log('all above');
        const learner = credentials.user;
        const uid = learner.uid;
        console.log(uid);
        console.log('new Learner account successfully created!');
        // set localstorage to ensure the next step to login is carried out with same email
        // preventing logging a different device
        window.localStorage.setItem('emailForSignIn', email);
    })
    .then(()=> verifyLearnerEmail()) // try this now, since I set up dynamic links
    .then(()=> loginLearnerViaEmail())
    .catch((e)=>{
        const errorCode = e.code;
        const errorMsg = e.message;
        console.log('report create: ' + errorCode + ' ' + errorMsg);
    })
}

/**********************/
// verify email

function verifyLearnerEmail(){
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
        console.log('login/verification link sent to email');
        window.localStorage.setItem('emailForSignIn', email);
    }
    )
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log (`report verify... code: ${errorCode} message: ${errorMessage}`);
    });
}
//app not hosted on firebase, so this verify function will be skipped.
/*********************/

function loginLearnerViaEmail(){
    if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
          email = window.prompt('Please provide your email for confirmation');
        }
        signInWithEmailLink(auth, email, window.location.href)
          .then((credentials) => {
            // Clear email from localstorage.
            window.localStorage.removeItem('emailForSignIn');
            const learner = credentials.user;
          })
          .catch((error) => {
            console.log('email link login error:'+ error)
          });
      }
}


// sign in
export function loginLearner(){
    try {
        signInWithEmailAndPassword(auth, email, password)
        .then((credentials) => {
            const learner = credentials.user;
            const uid = learner.uid;
            console.log('learner successfully logged in!');
        })
        .catch((e)=>{
            console.log(e);
            console.log('wrong email or password');
        });
    } catch(e){
        console.warn(e);
        console.log('user is not logged in');    
    }
}

// sign out
export function logoutLearner(){
    signOut(auth)
    .then(()=> {
        console.log('learner successfully signed out')
    })
    .catch((e)=>console.log(e));
}

// learner details
export function infoLearner(){
    try{
        onAuthStateChanged(auth, (learner)=>{
            if (learner != null) {
                const learnerName = learner.displayName;
                const email = learner.email;
                const pixLink = learner.photoURL;
                const isVerified = learner.emailVerified;
                const uid = learner.uid;
                const learnerDetails = 
                [learnerName, email, pixLink, isVerified, uid];
                console.log(learnerDetails);  
            }
            else {
                console.log('No info retrieved! It seems learner is logged out.');
            }
        })
    } catch(e){console.log(e)};
}

// password reset
export function forgotPassword(){
    try {
        sendPasswordResetEmail(auth, email)
        .then(console.log('prompt user to check email'));
    } catch (e) {
        console.log(e);
    }
}

/********************/
/**GOOGLE SIGN-in ***/

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
auth.languageCode = 'en';

export function loginWithGoogle(){
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(`errorCode: ${errorCode} msg: ${errorMessage}
                    email: ${email} cred: ${credential}`)
    });
}

/****************************/
/* DELETING LEARNER ACCOUNT */

export function deleteLearner() {
    const auth = getAuth();
    const killLearner = auth.currentUser;
    
    deleteUser(killLearner)
    .then(() => {
        console.log('this account has been deleted successfully!');
    }).catch((error) => {
        console.log(error)
    });
}

// export function shakyLearner(){
//     const auth = getAuth();
//     const shakeLearner = auth.currentUser;

//     // const credential = promptForCredentials();
//     reauthenticateWithCredential(shakeLearner, credential)
//     .then(() => {
//         console.log('your account is re-confirmed');
//     }).catch((error) => {
//         console.log(error);
//     });
// }