import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { NewSessionModal } from './components/NewSessionModal';
import { ChatInterface } from './components/ChatInterface';
import { FluidGradient } from './components/FluidGradient';
import * as storage from './utils/storage';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [activeSession, setActiveSession] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProjectId, setModalProjectId] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Load data on mount
  useEffect(() => {
    const data = storage.loadData();
    setProjects(data.projects);
  }, []);

  const handleNewProject = () => {
    const name = prompt('Enter project name:');
    if (name) {
      const newProject = storage.createProject(name);
      setProjects(prev => [...prev, newProject]);
    }
  };

  const handleOpenNewSession = (projectId) => {
    setModalProjectId(projectId);
    setIsModalOpen(true);
  };

  const handleCreateSession = (sessionData) => {
    const newSession = storage.createSession(modalProjectId, sessionData);
    if (newSession) {
      const updatedData = storage.loadData();
      setProjects(updatedData.projects);
      setActiveSession({ projectId: modalProjectId, ...newSession });
    }
    setIsModalOpen(false);
  };

  const handleSelectSession = (projectId, sessionId) => {
    const project = projects.find(p => p.id === projectId);
    const session = project?.sessions.find(s => s.id === sessionId);
    if (session) {
      setActiveSession({ projectId, ...session });
    }
  };

  const handleSendMessage = (content) => {
    if (!activeSession) return;

    const newMessage = { role: 'user', content };
    const updatedMessages = [...activeSession.messages, newMessage];

    // Optimistic UI update
    setActiveSession(prev => ({ ...prev, messages: updatedMessages }));

    // Save to storage
    storage.updateSession(activeSession.projectId, activeSession.id, {
      messages: updatedMessages
    });

    // Simulate AI response for now
    setTimeout(() => {
      const aiResponse = {
        role: 'assistant',
        content: `I've noted your input about "${content}". Based on our ${activeSession.stages[0] || 'Ideation'} focus, let's explore how this impacts your core value prop.`
      };
      const finalMessages = [...updatedMessages, aiResponse];
      setActiveSession(prev => ({ ...prev, messages: finalMessages }));
      storage.updateSession(activeSession.projectId, activeSession.id, {
        messages: finalMessages
      });
    }, 1000);
  };

  return (
    <div className={`app-container ${isSidebarVisible ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Sidebar
        projects={projects}
        activeSessionId={activeSession?.id}
        onSelectSession={handleSelectSession}
        onNewProject={handleNewProject}
        onNewSession={handleOpenNewSession}
      />

      <main className="main-stage">
        <FluidGradient />

        <div className="stage-overlay">
          {activeSession ? (
            <ChatInterface
              session={activeSession}
              onSendMessage={handleSendMessage}
            />
          ) : (
            <div className="landing-view">
              <header className="header">
                <div className="logo">
                  <span className="logo-icon">✨</span>
                  <span className="logo-text">NLPM</span>
                </div>
                <div className="header-actions">
                  <button className="nav-button">Sign In</button>
                </div>
              </header>

              <div className="hero-centered">
                <h1 className="hero-title">
                  From Idea to Jira
                  <span className="hero-title-gradient"> in One Conversation</span>
                </h1>
                <p className="hero-subtitle">
                  The AI-powered product manager that transforms your rough ideas
                  into refined concepts and actionable Jira stories.
                </p>
                <div className="hero-actions">
                  <button className="button-primary" onClick={() => {
                    if (projects.length === 0) {
                      const name = prompt('Start by creating your first Project:');
                      if (name) {
                        storage.createProject(name);
                        const data = storage.loadData();
                        setProjects(data.projects);
                        handleOpenNewSession(data.projects[0].id);
                      }
                    } else {
                      handleOpenNewSession(projects[0].id);
                    }
                  }}>
                    <span>Start Ideating</span>
                    <span className="button-arrow">→</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <NewSessionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateSession}
        projectName={projects.find(p => p.id === modalProjectId)?.name}
      />
    </div>
  );
}

export default App;
