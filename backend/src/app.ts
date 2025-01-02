import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import ledigRoutes from './routes/ledigRoutes';

dotenv.config();
const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
}));

// Body parsers
app.use(express.json());
app.use(bodyParser.json());

// Basic error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Test route to verify server is working
app.get('/test', (req: express.Request, res: express.Response) => {
    res.json({ message: 'Server is running!' });
});

// Routes
app.use('/api/ledig', ledigRoutes);

const PORT = process.env.PORT || 5001;

// Wrap server startup in try-catch
try {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
} catch (error) {
    console.error('Failed to start server:', error);
}