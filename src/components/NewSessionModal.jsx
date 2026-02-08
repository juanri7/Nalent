import React, { useState } from 'react';

const STAGES = [
    { name: 'Shaping', icon: '🌫️', description: 'Define the core problem & JTBD' },
    { name: 'Discovering', icon: '🔍', description: 'Validate needs & identify assumptions' },
    { name: 'Validating', icon: '🧪', description: 'Stress-test the vision (Challenge Mode)' },
    { name: 'Scoping', icon: '🎯', description: 'Define the ONE job & MVP scale' },
    { name: 'Structuring', icon: '🏗️', description: 'Break into Epics & User Stories' },
    { name: 'Prioritizing', icon: '⚖️', description: 'Rank by value vs effort' },
    { name: 'Roadmapping', icon: '📅', description: 'Sequence for outcomes & velocity' }
];

export function NewSessionModal({ isOpen, onClose, onSubmit, projectName }) {
    const [selectedStages, setSelectedStages] = useState([]);
    const [pitch, setPitch] = useState('');

    if (!isOpen) return null;

    const toggleStage = (stageName) => {
        setSelectedStages(prev =>
            prev.includes(stageName)
                ? prev.filter(s => s !== stageName)
                : [...prev, stageName]
        );
    };

    const handleStart = () => {
        if (!pitch.trim()) {
            alert('Please enter your initial idea.');
            return;
        }
        onSubmit({
            title: pitch.split('\n')[0].substring(0, 30) + (pitch.length > 30 ? '...' : ''),
            stages: selectedStages,
            pitch: pitch
        });
        // Reset state
        setSelectedStages([]);
        setPitch('');
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <header className="modal-header">
                    <h2>New Session in <span className="highlight">{projectName}</span></h2>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </header>

                <div className="modal-body">
                    <section className="help-selection">
                        <label>Where do you need help in your journey?</label>
                        <p className="subtext">Select one or multiple stages to guide the AI</p>
                        <div className="stages-grid">
                            {STAGES.map(stage => (
                                <div
                                    key={stage.name}
                                    className={`stage-card ${selectedStages.includes(stage.name) ? 'selected' : ''}`}
                                    onClick={() => toggleStage(stage.name)}
                                >
                                    <span className="stage-card-icon">{stage.icon}</span>
                                    <div className="stage-card-info">
                                        <span className="stage-card-name">{stage.name}</span>
                                        <span className="stage-card-desc">{stage.description}</span>
                                    </div>
                                    <div className="stage-card-checkbox">
                                        {selectedStages.includes(stage.name) && '✓'}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="pitch-input">
                        <label>What's your initial idea or problem?</label>
                        <textarea
                            placeholder="Type your rough idea here... (e.g., I want to build a better way for PMs to track their experiments)"
                            value={pitch}
                            onChange={e => setPitch(e.target.value)}
                        />
                    </section>
                </div>

                <footer className="modal-footer">
                    <button className="btn-cancel" onClick={onClose}>Cancel</button>
                    <button className="btn-start" onClick={handleStart}>
                        <span>Start Session</span>
                        <span className="btn-arrow">→</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}

export default NewSessionModal;
