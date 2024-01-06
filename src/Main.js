import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './component/HomePage';
import SelectionPage from './component/SelectionPage';
import BeginQuizzes from './component/QuizPage';
import UserPage from './component/UserPage';
import NoPage from './component/NoPage';
import PolicyPage from './component/PolicyPage';
import LearnerCreate from './engine/learner-create';
import LearnerLogin from './engine/learner-login';
import LearnerReset from './engine/learner-reset';


const App=()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/category" element={<SelectionPage/>}/>
                <Route path="/ready" element={<BeginQuizzes/>}/>
                <Route path="/new-learner" element={<LearnerCreate/>}/>
                <Route path="/learner-login" element={<LearnerLogin/>}/>
                <Route path="/learner-reset" element={<LearnerReset/>}/>
                <Route path="/privacy-policy" element={<PolicyPage/>}/>
                <Route path="/harshControls" element={<UserPage/>}/>
                <Route path="*" element={<NoPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App