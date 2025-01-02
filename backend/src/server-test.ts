import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Test endpoint
app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});

// Simple data endpoint
app.post('/data', (req, res) => {
    console.log('Received data:', req.body);
    res.json({ message: 'Data received', data: req.body });
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Test server running on http://localhost:${PORT}`);
});