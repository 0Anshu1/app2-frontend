import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


function App() {
  const { isAuthenticated, user, logout } = useAuth0();

  if (!isAuthenticated) {
    // If not authenticated, show a loading message or redirect to the login page
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Great!! You Are now logged in!!</h1>
        <p>Welcome, {user.name}!</p>
        <button
          onClick={() => 
            logout({ returnTo: 'http://localhost:3000' }) // Redirect to app1
          }
        >
          Log Out
        </button>
      </header>
    </div>
  );
}

export default App;
