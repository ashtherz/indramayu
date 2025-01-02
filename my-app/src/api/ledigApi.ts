const API_URL = 'http://localhost:5001/api/ledig';

export const createLedig = async (data: { date: string; progLedig: string; totalImplementation: number }) => {
    const response = await fetch(`${API_URL}/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return response.json();
};

export const getLedig = async () => {
    const response = await fetch(`${API_URL}`);
    return response.json();
};
