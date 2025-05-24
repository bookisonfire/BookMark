import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './sidebar';
import Dashboard from './dashboard';
import Tickets from './tickets';
import MessageBoard from './messageBoard';
import Reports from './reports';
import Settings from './settings';
import Login from './login';


// Main App component
function App() {
  const [user, setUser] = useState(null);
  const [night, setNight] = useState(false);

  useEffect(() => {
    document.body.className = night ? 'night' : '';
  }, [night]);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <Router>
      <div className="app-layout">
        <Sidebar night={night} setNight={setNight} />
        <div className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            <Route path="/tickets" element={<Tickets user={user} />} />
            <Route path="/message-board" element={<MessageBoard user={user} />} />
            <Route path="/reports" element={<Reports user={user} />} />
            <Route path="/settings" element={<Settings user={user} />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
