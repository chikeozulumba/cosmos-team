import { Router } from 'express';
import TeamController from '../controllers/TeamController';

const router = Router();

router.get('/team', TeamController.baseRequest);

export default router;
