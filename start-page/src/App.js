import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Sign from "./auth/Sign";
import TestsPage from "./pages/TestsPage";
import CreateTestPage from "./pages/CreateTestPage";
import ScanPhotoPage from "./pages/ScanPhotoPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/home' element={<TestsPage/>} />
                <Route path='/signup' element={<Sign/>} />
                <Route path='/create' element={<CreateTestPage/>} />
                <Route path='/scan' element={<ScanPhotoPage/>} />
                <Route path='/result' element={<ResultPage/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;

