import React, { useState } from 'react';

const STAGE_ICONS = {
    'Shaping': '🌫️',
    'Discovering': '🔍',
    'Validating': '🧪',
    'Scoping': '🎯',
    'Structuring': '🏗️',
    'Prioritizing': '⚖️',
    'Roadmapping': '📅',
    'Confirming': '✅'
};

export function Sidebar({
    projects,
    activeSessionId,
    onSelectSession,
    onNewProject,
    onNewSession
}) {
    const [expandedProjects, setExpandedProjects] = useState(
        projects.length > 0 ? [projects[0].id] : []
    );

    const toggleProject = (projectId) => {
        setExpandedProjects(prev =>
            prev.includes(projectId)
                ? prev.filter(id => id !== projectId)
                : [...prev, projectId]
        );
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="logo-small">
                    <span className="logo-icon">✨</span>
                    <span className="logo-text">NLPM</span>
                </div>
                <button className="new-project-btn" onClick={onNewProject} title="New Project">
                    <span>+</span>
                </button>
            </div>

            <div className="sidebar-scroll">
                <div className="sidebar-section">
                    {projects.length === 0 ? (
                        <div className="sidebar-empty">
                            No projects yet. Click + to start.
                        </div>
                    ) : (
                        projects.map(project => (
                            <div key={project.id} className="project-group">
                                <div
                                    className={`project-header ${expandedProjects.includes(project.id) ? 'expanded' : ''}`}
                                    onClick={() => toggleProject(project.id)}
                                >
                                    <span className="project-chevron">▸</span>
                                    <span className="project-name">{project.name}</span>
                                    <button
                                        className="inline-new-session"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onNewSession(project.id);
                                        }}
                                        title="New Session"
                                    >
                                        +
                                    </button>
                                </div>

                                {expandedProjects.includes(project.id) && (
                                    <div className="sessions-list">
                                        {project.sessions.length === 0 ? (
                                            <div className="session-empty">No sessions</div>
                                        ) : (
                                            project.sessions.map(session => (
                                                <div
                                                    key={session.id}
                                                    className={`session-item ${activeSessionId === session.id ? 'active' : ''}`}
                                                    onClick={() => onSelectSession(project.id, session.id)}
                                                >
                                                    <span className="session-icon">
                                                        {session.stages && session.stages.length > 0
                                                            ? STAGE_ICONS[session.stages[0]] || '💬'
                                                            : '💬'}
                                                    </span>
                                                    <span className="session-title">{session.title}</span>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div className="sidebar-footer">
                <div className="user-profile">
                    <div className="avatar">JR</div>
                    <div className="user-info">
                        <div className="user-name">Juan Rivas</div>
                        <div className="user-plan">Pro Plan</div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
