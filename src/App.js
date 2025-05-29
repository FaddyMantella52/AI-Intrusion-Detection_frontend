import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './components/LogInScreen';
import RegisterScreen from './components/RegisterScreen';
import HomeScreen from './components/HomeScreen';
import UploadForm from './components/UploadForm';
import TutorialPage from './components/TutorialPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/upload" element={<UploadForm />} />
        <Route path="/tutorial" element={<TutorialPage />} />
      </Routes>
    </Router>
  );
}

export default App;
