import React, { useState, useRef, useEffect } from 'react';

export function ChatInterface({ session, onSendMessage }) {
    const [input, setInput] = useState('');
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [session.messages]);

    const handleSend = () => {
        if (!input.trim()) return;
        onSendMessage(input);
        setInput('');
    };

    if (!session) return <div className="chat-interface-empty">Select a session to start.</div>;

    return (
        <div className="chat-interface">
            <header className="chat-header">
                <div className="session-info">
                    <h2 className="session-title">{session.title}</h2>
                    <div className="session-stages">
                        {session.stages.map(stage => (
                            <span key={stage} className="stage-badge">{stage}</span>
                        ))}
                    </div>
                </div>
                <div className="chat-actions">
                    <button className="btn-export">Export to Jira</button>
                    <button className="btn-more">⋯</button>
                </div>
            </header>

            <div className="chat-messages" ref={scrollRef}>
                {session.messages.length === 0 ? (
                    <div className="chat-welcome">
                        <div className="welcome-icon">👋</div>
                        <h3>Welcome to your {session.stages[0] || 'Ideation'} session</h3>
                        <p>Based on your pitch, I've prepared some thoughts. Let's dive in!</p>
                        <div className="pitch-summary">
                            <strong>Your Idea:</strong>
                            <p>{session.pitch}</p>
                        </div>
                    </div>
                ) : (
                    session.messages.map((msg, idx) => (
                        <div key={idx} className={`message-group ${msg.role}`}>
                            <div className="message-avatar">
                                {msg.role === 'user' ? 'JR' : '✨'}
                            </div>
                            <div className="message-content">
                                <div className="message-header">
                                    <span className="message-author">{msg.role === 'user' ? 'You' : 'NLPM'}</span>
                                    <span className="message-time">Just now</span>
                                </div>
                                <div className="message-text">
                                    {msg.content}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="chat-input-area">
                <div className="chat-input-container">
                    <textarea
                        placeholder="Type your message..."
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={e => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSend();
                            }
                        }}
                    />
                    <button className="send-btn" onClick={handleSend} disabled={!input.trim()}>
                        ↑
                    </button>
                </div>
                <p className="input-footer">NLPM can make mistakes. Verify important information.</p>
            </div>
        </div>
    );
}

export default ChatInterface;
