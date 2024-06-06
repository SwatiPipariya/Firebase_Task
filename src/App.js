

// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

import GoogleAuth from './pages/GoogleAuth';
import './App.css';


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setUser(null);
    }).catch((error) => {
      console.error('Error signing out:', error);
    });
  };

  return (
    <Router>
      <div className="App">
        {user ? (
          <>
            <Sidebar handleLogout={handleLogout} />
            <div className="MainContent">
              {/* <button onClick={handleLogout}>Logout</button> */}
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/notifications" element={<Notifications />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/conversation" element={<Conversation />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/subscription" element={<Subscription />} /> */}
                {/* <Route path="/profile" element={<Profile />} /> */}
              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="*" element={<GoogleAuth />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
