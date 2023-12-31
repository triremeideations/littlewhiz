import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './component/HomePage';
import SelectionPage from './component/SelectionPage';
import BeginQuizzes from './component/QuizPage';
import UserPage from './component/UserPage';
import PolicyPage from './component/PolicyPage';
import LearnerInputs from './engine/LearnerInputs';


const App=()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/category" element={<SelectionPage/>}/>
                <Route path="/ready" element={<BeginQuizzes/>}/>
                <Route path="/login" element={<UserPage/>}/>
                <Route path="/new-learner" element={<LearnerInputs/>}/>
                <Route path="/privacy-policy" element={<PolicyPage/>}/>
                <Route path="*" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App