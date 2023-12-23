import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './component/HomePage';
import SelectionPage from './component/SelectionPage';
import BeginQuizzes from './component/QuizPage';


const App=()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/category" element={<SelectionPage/>}/>
                <Route path="/ready" element={<BeginQuizzes/>}/>
                <Route path="*" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App