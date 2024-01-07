/* eslint-disable no-unused-vars */

/***** FIREBASE integration ******/

// Import needed functions from required SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import '../styles/sign_up.css';
import '../styles/sign_in.css';
import '../styles/sign_reset.css';

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

/********************/
// create new account
// SIGN UP

export function newLearner(email, password, regName){
    loadingDialog();
    createUserWithEmailAndPassword(auth, email, password)
    .then(()=> verifyLearnerEmail())
    // try this verify now, since I set up dynamic links
    .then(()=> {
        localStorage.setItem('regName',regName);
        localStorage.setItem('regMail',email);
        localStorage.setItem('createNew','pending');
                //this is resolved in updateDisplayName
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

function loadingDialog(){
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
    //these getitems must come after the definitions, not before. 
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
    updateProfile(auth.currentUser, {displayName: `${x}`})
    .then(
        ()=> {
            // console.log(
            // `successfully set displayName to ${auth.currentUser.displayName}`
            // );
            localStorage.setItem('createNew','completed');
        }
    )
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
/**************************/
/**************************/

/*********************************/
/*********************************/
/* Login existing user */
// SIGN IN

export function tempUser(m, temp, x){
    signInWithEmailAndPassword(m, temp)
    .catch(()=>{});
}

export function loginLearner(email, password){
    //enable loading screen
    loginProcessingDialog();
    try {
        signInWithEmailAndPassword(auth, email, password)
        .then((credentials) => {
            const learner = credentials.user;
            //fetch name from database and save in localstorage
            localStorage.setItem('dispName', learner.displayName);
            //failsafe for if page reloads without user inititating it.
            //or if user leaves creation in some way without finalising op.
            localStorage.setItem('tempName', password);
            localStorage.setItem('tempMail', email);
            userLoginDialog('success');
        })
        .catch((e)=>{
            const errorCode = e.code;
            const errorMsg = e.message;
            console.log('report login: ' + errorCode + ' msg:' + errorMsg);
            localStorage.setItem('loginErrorCode', errorCode);
            userLoginDialog('failed');
        });
    } catch(e){
        console.warn(e);
        console.log('user is not logged in');    
    }
}

function loginProcessingDialog(){
    const login_procDiag = document.getElementsByClassName('login-load')[0];
    login_procDiag.classList.toggle('loadingscreen');
}

function userLoginDialog(stat){
    const lgPass_dialog = document.getElementsByClassName('login-pass')[0];
    const lgFail_dialog = document.getElementsByClassName('login-fail')[0];
    const legrMsg = document.querySelector('#lgerMsg');
    const lgName = document.querySelector('#logName');
    lgName.innerText = localStorage.getItem('dispName');

    const err_msg = localStorage.getItem('loginErrorCode');

    //disable loading screen
    loginProcessingDialog();

    //throw appropriate error message
    if (err_msg === 'auth/invalid-credential')
        legrMsg.innerText = "Your email-password combination is not recognised.";
    if (err_msg === 'auth/network-request-failed')
        legrMsg.innerText =
        "It seems that your internet connection is broken!";


    switch (stat) {
        case 'success':
            lgPass_dialog.classList.add('expand_loginDialog');
            break;
        case 'failed':
            lgFail_dialog.classList.add('expand_loginDialog');
            break;
        default:
            console.log('login outcome handled');
            break;
    }
}
/*****************************/
/*****************************/


/************************************/
/* Reset password for existing user */

// password reset
export function forgotPassword(email){
    resetProcessingDialog();
    // loading screen
    sendPasswordResetEmail(auth, email)
    .then(()=> userResetDialog('success'))
    .catch((e)=>{
        const errorCode = e.code;
        const errorMsg = e.message;
        console.log('report create: ' + errorCode + ' msg:' + errorMsg);
        localStorage.setItem('resetErrorCode', errorCode);
        userResetDialog('failed');
        }
    )    
    
}

function resetProcessingDialog(){
    const reset_procDiag = document.getElementsByClassName('reset-load')[0];
    reset_procDiag.classList.toggle('resetLoadScreen');
}

function userResetDialog(stat){
    const resetPass_dialog = document.getElementsByClassName('reset-pass')[0];
    const resetFail_dialog = document.getElementsByClassName('reset-fail')[0];
    const resErrMsg = document.querySelector('#resetErrMsg');
    
    //fetch error codes/messages
    const err_msg = localStorage.getItem('resetErrorCode');

    //disable loading screen
    resetProcessingDialog();

    //throw appropriate error message
    if (err_msg === 'auth/invalid-email')
        resErrMsg.innerText = "This is not a valid email.";
    if (err_msg === 'auth/invalid-credential')
        resErrMsg.innerText = "This email is not registered.";
    if (err_msg === 'auth/network-request-failed')
        resErrMsg.innerText =
        "It seems that your internet connection is broken!";


    switch (stat) {
        case 'success':
            resetPass_dialog.classList.add('expand_resetDialog');
            break;
        case 'failed':
            resetFail_dialog.classList.add('expand_resetDialog');
            break;
        default:
            console.log('reset outcome handled');
            break;
    }
}


/************************************/
/************************************/

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




/***********************/
// sign out
export function logoutLearner(){
    signOut(auth)
    .then(()=> {
        console.log('learner successfully signed out')
    })
    .catch((e)=>console.log(e));
}

/**************************************/
/**************************************/

export function learnerLoginStatus(){
    try{
        onAuthStateChanged(auth, (learner)=>{
            if (learner != null) {
                localStorage.setItem('currentProfileName', learner.displayName);
                localStorage.setItem('currentProfileUID', learner.uid);
                localStorage.setItem('learnerSignedIn','yes');
                // console.log(localStorage.getItem('currentProfileName'));
                // console.log(localStorage.getItem('currentProfileUID'));
                refreshDashboard();
            }
            else {
                localStorage.setItem('learnerSignedIn','no');
                // console.log('No info retrieved! It seems learner is logged out.');
            }
        })
    } catch(e){console.log(e)};
}

export const refreshDashboard=()=>{
    if (localStorage.getItem('viaExternal') !== null){
        const gippy = localStorage.getItem('viaExternal');
        if (gippy === 'true'){
            localStorage.removeItem('viaExternal');
            window.location.reload();
        }
    }
}
export const goToDashboard=()=>{
    localStorage.setItem('viaExternal','true');
    window.location.replace('/dashboard');
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