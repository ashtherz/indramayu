import { Router } from 'express';
import { createLedig, getAllLedig } from '../controllers/ledigControllers';

const router = Router();

// Log middleware for debugging
router.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`, req.body);
    next();
});

router.post('/', async (req, res) => {
    try {
        console.log('Received POST request with body:', req.body);
        await createLedig(req, res);
    } catch (error) {
        console.error('Error in POST /api/ledig:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/', async (req, res) => {
    try {
        await getAllLedig(req, res);
    } catch (error) {
        console.error('Error in GET /api/ledig:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;