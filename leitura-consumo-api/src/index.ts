
import express from 'express';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import { routes } from './routes';

dotenv.config();

const app = express();

// Database connection
createConnection().then(() => {
    console.log('Connected to the database');
}).catch(error => console.log(error));

app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
