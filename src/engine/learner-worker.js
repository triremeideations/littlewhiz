/* eslint-disable no-unused-vars */

// /***** FIREBASE integration ******/

// // Import needed functions from required SDKs
// import { initializeApp }
// from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";

// // import { getFirestore }
// // from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

// import {    getAuth,
//             createUserWithEmailAndPassword,
//             onAuthStateChanged,
//             signInWithEmailAndPassword,
//             sendPasswordResetEmail,
//             signOut
// }
// from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

// /**google login alternative */
// import { GoogleAuthProvider, signInWithPopup }
// from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";


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
const password = "test_ting";


/*****************************/
// littleWhiz User functions //

// create new account 
export function newLearner(){
    createUserWithEmailAndPassword(auth, email, password)
    .then((credentials) => {
        const learner = credentials.user;
        const uid = learner.uid;
        console.log(uid);
        console.log('new Learner account successfully created!');
    })
    .catch((e)=>{
        const errorCode = e.code;
        const errorMsg = e.message;
        console.log(errorCode + ' ' + errorMsg);
    })
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
    } catch{
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
        sendPasswordResetEmail(auth, email, 'sender')
        .then(console.log('prompt user to check email'));
    } catch (e) {
        console.log(e);
    }
}

/********************/
/**GOOGLE SIGN-in ***/

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
auth.languageCode = 'it';

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
