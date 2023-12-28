import { 
    newLearner,
    loginLearner, logoutLearner,
    infoLearner, 
    loginWithGoogle} from "../engine/learner-worker";

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
        </div>
    )
}

export default UserPage;