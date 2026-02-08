import { FluidGradient } from './components/FluidGradient';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Fluid Gradient Background */}
      <FluidGradient />

      {/* Content Overlay */}
      <div className="content">
        <header className="header">
          <div className="logo">
            <span className="logo-icon">✨</span>
            <span className="logo-text">NLPM</span>
          </div>
          <nav className="nav">
            <a href="#features" className="nav-link">Features</a>
            <a href="#how-it-works" className="nav-link">How it Works</a>
            <button className="nav-button">Get Started</button>
          </nav>
        </header>

        <main className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              From Idea to Jira
              <span className="hero-title-gradient"> in One Conversation</span>
            </h1>
            <p className="hero-subtitle">
              The AI-powered product manager that transforms your rough ideas
              into refined concepts and actionable Jira stories — all through
              natural conversation.
            </p>
            <div className="hero-actions">
              <button className="button-primary">
                <span>Start Ideating</span>
                <span className="button-arrow">→</span>
              </button>
              <button className="button-secondary">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="chat-preview">
              <div className="chat-bubble chat-user">
                <p>I want to build a feature that lets users save their favorite items...</p>
              </div>
              <div className="chat-bubble chat-ai">
                <p>Great idea! Let me help you refine this. What problem does this solve for your users? Are they losing track of items they want to revisit?</p>
              </div>
              <div className="chat-bubble chat-user">
                <p>Yes exactly, they browse a lot and forget what they liked</p>
              </div>
              <div className="chat-bubble chat-ai">
                <p>I see the core job here: "When browsing, I want to save items so I can easily find them later." Ready to generate user stories for this?</p>
              </div>
              <div className="chat-typing">
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
