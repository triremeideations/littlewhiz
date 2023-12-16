import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage';
import SelectionPage from './SelectionPage';
import BeginQuizzes from './QuizPage';


const App=()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/category" element={<SelectionPage/>}/>
                <Route path="/ready" element={<BeginQuizzes/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App