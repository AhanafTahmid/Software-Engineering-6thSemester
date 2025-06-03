import express from 'express';
const app = express();
import companyRoutes from './company.route.js';
import { connectDB } from './dbConnect.js';
import cors from 'cors';
app.use(cors(
    {
        origin: '*',
    }
));

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/', companyRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {console.log(`Running on port ${PORT}`);});