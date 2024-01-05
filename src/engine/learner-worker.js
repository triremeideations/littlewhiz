/* eslint-disable no-unused-vars */

/***** FIREBASE integration ******/

// Import needed functions from required SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import '../styles/sign_up.css';

import {    getAuth,
            createUserWithEmailAndPassword,
            updateProfile,
            onAuthStateChanged,
            signInWithEmailAndPassword,
            sendPasswordResetEmail,
            sendSignInLinkToEmail,
            sendEmailVerification,
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

/*****************************/
// littleWhiz User functions //

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
};


// create new account 
export function newLearner(email, password, regName){
    loadingDialog();
    createUserWithEmailAndPassword(auth, email, password)
    .then((credentials) => {
        // console.log(credentials);
        const learner = credentials.user;
        const uid = learner.uid;
        console.log(uid);
        console.log('new Learner account successfully created!');
        // set localstorage to ensure the next step to login is
        // carried out with same email
        // preventing logging a different device
        window.localStorage.setItem('emailForSignIn', email);
    })
    .then(()=> verifyLearnerEmail())
    // try this verify now, since I set up dynamic links
    .then(()=> {
        localStorage.setItem('regName',regName);
        localStorage.setItem('regMail',email);
        userCreationDialog('success');
        })
    .catch((e)=>{
        const errorCode = e.code;
        const errorMsg = e.message;
        console.log('report create: ' + errorCode + ' msg:' + errorMsg);
        localStorage.setItem('regErrorCode', errorCode);
        userCreationDialog('failed');
    })
}

export function loadingDialog(){
    const loading_dialog = document.getElementsByClassName('loading')[0];
    loading_dialog.classList.toggle('loadscreen');
    // console.log('catch me if you can!');
}

function userCreationDialog(stat){
    const success_dialog = document.getElementsByClassName('success')[0];
    const fail_dialog = document.getElementsByClassName('failed')[0];
    const user_id = document.querySelector('#reg');
    const user_email = document.querySelector('#mail');
    const eMsg = document.querySelector('#eMsg');
    user_id.innerText = localStorage.getItem('regName');
    user_email.innerText = localStorage.getItem('regMail');
    const err_msg = localStorage.getItem('regErrorCode');

    //disable loading screen
    loadingDialog();

    //throw appropriate error message
    if (err_msg === 'auth/invalid-email')
        eMsg.innerText = "This email is invalid";
    if (err_msg === 'auth/network-request-failed')
        eMsg.innerText =
        "Something went wrong... It seems that your internet connection is broken!";


    switch (stat) {
        case 'success':
            success_dialog.classList.add('expand_dialog');
            break;
        case 'failed':
            fail_dialog.classList.add('expand_dialog');
            break;
        default:
            console.log('creation outcome handled');
            break;
    }
}

/**********************/
// verify email
export function verifyLearnerEmail(){
    const user = auth.currentUser;
    sendEmailVerification(user).then(function() {
        console.log('email verification link sent to email');
    }).catch(function(e) {
        console.log(e);
    });
}

/*********************/
/*Update display name*/
export function updateDisplayName(x){
    const user = auth.currentUser;
    updateProfile(user, {displayName: `${x}`})
    .then(
        ()=>console.log(`successfully set displayName to ${user.displayName}`)
    )
    console.log(user);
}

// learner details
export function infoLearner(){
    try {
        const learner = auth.currentUser;
        const learnerName = learner.displayName;
        const email = learner.email;
        const pixLink = learner.photoURL;
        const isVerified = learner.emailVerified;
        const uid = learner.uid;
        const learnerDetails = [learnerName, email, pixLink, isVerified, uid];
        console.log(learnerDetails);
        
    } catch (error) {
        console.log(error);        
    }
}

/********/
/*automatically login the current user via email*/
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
/****************/


/*************/
/*this differs from the above in that it is a standalone request for
the sign in link to be sent to an existing user email*/

function loginWithEmail(email){
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
        console.log('login link sent to email');
        window.localStorage.setItem('emailForSignIn', email);
    }
    )
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log (`report verify... code: ${errorCode} message: ${errorMessage}`);
    });
}
/*********************/


// sign in
export function loginLearner(email, password){
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


export function learnerLoginStatus(){
    try{
        onAuthStateChanged(auth, (learner)=>{
            if (learner != null) {
                console.log(`User: ${learner.displayName} is logged in`)  
            }
            else {
                console.log('No info retrieved! It seems learner is logged out.');
            }
        })
    } catch(e){console.log(e)};
}

// password reset
export function forgotPassword(email){
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