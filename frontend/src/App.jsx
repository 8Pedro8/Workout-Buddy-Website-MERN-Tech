import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages & components
import Home from './pages/Home';
import Navbar from './Components/Navbar';

function App() {

  return (
    <div className="App">
       <Router>
       <Navbar />
        <div className="pages">
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
       </Router>
    </div>
  )
}

export default App