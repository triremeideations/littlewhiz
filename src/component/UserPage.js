import { 
    newLearner,
    loginLearner, logoutLearner, infoLearner, 
    loginWithGoogle, 
    forgotPassword,
    deleteLearner, 
    verifyLearnerEmail,
    updateDisplayName
} from "../engine/learner-worker";

const UserPage =()=>{
    return(
        <div>
            <button onClick={()=>newLearner()} style={{padding: '5px'}}>
                Create New Learner
            </button>
            <button onClick={()=>loginLearner()} style={{padding: '5px'}}>
                Learner Login
            </button>
            <button onClick={()=>logoutLearner()} style={{padding: '5px'}}>
                Learner Logout
            </button>
            <button onClick={()=>infoLearner()} style={{padding: '5px'}}>
                Learner Details
            </button>
            <button onClick={()=>loginWithGoogle()} style={{padding: '5px'}}>
                Google Log in
            </button>
            <button onClick={()=>forgotPassword()} style={{padding: '5px'}}>
                Reset Password
            </button>
            <button onClick={()=>verifyLearnerEmail()} style={{padding: '5px'}}>
                Verify Current User
            </button>
            <button onClick={()=>updateDisplayName('chuck')} style={{padding: '5px'}}>
                Update display Name
            </button>
            <button onClick={()=>deleteLearner()} style={{padding: '5px'}}>
                DELETE ACCOUNT
            </button>
        </div>
    )
}

export default UserPage;