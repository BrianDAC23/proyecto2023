import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home'
import Login from './components/Login';
import "bootstrap/dist/css/bootstrap.min.css";
import { Register } from './components/Register'
import { AuthProvider } from './context/authContext'
import { ProtectedRoute } from './components/ProtectedRoute';
import Contacto from './components/Contacto';
import Post from './components/Post/PostH'
import Footer from './components/Footer';
import NavBar from './components/NavigationBar'


function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/contacto" element={<ProtectedRoute><Contacto /></ProtectedRoute>} />
        <Route path="/post" element={<ProtectedRoute><Post /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
      <Footer />
    </AuthProvider>

  );
}

export default App;
