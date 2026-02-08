const STORAGE_KEY = 'nlpm_data';

export const loadData = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : { projects: [] };
    } catch (error) {
        console.error('Failed to load data from localStorage:', error);
        return { projects: [] };
    }
};

export const saveData = (data) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
        console.error('Failed to save data to localStorage:', error);
    }
};

export const createProject = (name) => {
    const data = loadData();
    const newProject = {
        id: crypto.randomUUID(),
        name,
        sessions: [],
        createdAt: new Date().toISOString()
    };
    data.projects.push(newProject);
    saveData(data);
    return newProject;
};

export const createSession = (projectId, sessionData) => {
    const data = loadData();
    const project = data.projects.find(p => p.id === projectId);
    if (!project) return null;

    const newSession = {
        id: crypto.randomUUID(),
        title: sessionData.title || 'Untitled Session',
        stages: sessionData.stages || [], // Array of stage names (Shaping, etc.)
        pitch: sessionData.pitch || '',
        messages: [],
        artifacts: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    project.sessions.push(newSession);
    saveData(data);
    return newSession;
};

export const updateSession = (projectId, sessionId, updates) => {
    const data = loadData();
    const project = data.projects.find(p => p.id === projectId);
    if (!project) return;

    const sessionIndex = project.sessions.findIndex(s => s.id === sessionId);
    if (sessionIndex === -1) return;

    project.sessions[sessionIndex] = {
        ...project.sessions[sessionIndex],
        ...updates,
        updatedAt: new Date().toISOString()
    };

    saveData(data);
};
