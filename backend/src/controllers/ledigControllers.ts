import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

// Simple file-based storage for testing
const DATA_FILE = path.join(__dirname, '../../data.json');

// Initialize data file if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

export const createLedig = async (req: Request, res: Response): Promise<void> => {
    try {
        const { date, program, quantity } = req.body;
        console.log('Processing data:', { date, program, quantity });

        // Validate input
        if (!date || !program || quantity === undefined) {
            res.status(400).json({ error: 'Missing required fields' });
            return;
        }

        // Read existing data
        const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        
        // Add new entry
        const newEntry = {
            id: Date.now(),
            date,
            program,
            quantity,
            createdAt: new Date().toISOString()
        };
        
        data.push(newEntry);

        // Save data
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

        res.status(201).json({
            message: 'Data saved successfully',
            data: newEntry
        });
    } catch (error) {
        console.error('Error in createLedig:', error);
        res.status(500).json({ error: 'Failed to save data' });
    }
};

export const getAllLedig = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        res.status(200).json(data);
    } catch (error) {
        console.error('Error in getAllLedig:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};