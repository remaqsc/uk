
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import Home from './pages/Home';
import Tracking from './pages/Tracking';
import Blog from './pages/Blog';
import News from './pages/News';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Auth from './pages/Auth';
import RequestService from './pages/RequestService';
import { store } from './services/store';
import { Role } from './types';

const PrivateRoute: React.FC<{ children: React.ReactNode, roles?: Role[] }> = ({ children, roles }) => {
  const user = store.getCurrentUser();
  if (!user) return <Navigate to="/auth" />;
  if (roles && !roles.includes(user.role)) return <Navigate to="/" />;
  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tracking" element={<Tracking />} />
            
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Blog />} />
            
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<News />} />
            
            <Route path="/auth" element={<Auth />} />
            <Route path="/request" element={<RequestService />} />
            <Route 
              path="/dashboard" 
              element={
                <PrivateRoute roles={['CLIENT']}>
                  <Dashboard />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/admin" 
              element={
                <PrivateRoute roles={['ADMIN', 'SUPER_ADMIN']}>
                  <Admin />
                </PrivateRoute>
              } 
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
