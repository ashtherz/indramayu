export const submitLedigData = async (formData: { date: string; program: string; quantity: number }) => {
    const response = await fetch('http://localhost:5001/api/ledig', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    });
    return response.json();
};
