import { getAllCompanies, createCompany, updateCompany, deleteCompany } from './company.controller.js';
import {Router} from 'express';

const router = Router();
router.get('/list', getAllCompanies);
router.post('/list', createCompany);
router.put('/list/:id', updateCompany);
router.delete('/list/:id', deleteCompany);

export default router;