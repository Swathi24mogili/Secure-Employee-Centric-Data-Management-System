
import React, { useState, useEffect } from 'react';
import { User, UserRole } from './types';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Navigation/Sidebar';
import Header from './components/Navigation/Header';
import ProjectDocs from './components/Documentation/ProjectDocs';
import SchemaViewer from './components/Implementation/SchemaViewer';
import SecurityCenter from './components/Implementation/SecurityCenter';
import AutomationHub from './components/Implementation/AutomationHub';
import SmartContractConcept from './components/Implementation/SmartContractConcept';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
  };

  const handleRegister = (user: User) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  if (!isAuthenticated) {
    return isRegistering ? (
      <Register onRegister={handleRegister} onSwitchToLogin={() => setIsRegistering(false)} />
    ) : (
      <Login onLogin={handleLogin} onSwitchToRegister={() => setIsRegistering(true)} />
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={currentUser} onLogout={handleLogout} />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {activeTab === 'overview' && <ProjectDocs />}
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'schema' && <SchemaViewer />}
          {activeTab === 'security' && <SecurityCenter />}
          {activeTab === 'automation' && <AutomationHub />}
          {activeTab === 'blockchain' && <SmartContractConcept />}
        </main>
      </div>
    </div>
  );
};

export default App;
