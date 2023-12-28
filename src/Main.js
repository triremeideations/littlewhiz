import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './component/HomePage';
import SelectionPage from './component/SelectionPage';
import BeginQuizzes from './component/QuizPage';
import UserPage from './component/UserPage';


const App=()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/category" element={<SelectionPage/>}/>
                <Route path="/ready" element={<BeginQuizzes/>}/>
                <Route path="/login" element={<UserPage/>}/>
                <Route path="*" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App