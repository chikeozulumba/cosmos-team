import { Router } from 'express';
import TeamController from '../controllers/TeamController';

const router = Router();
const team = new TeamController();

router.get('/team', team.baseRequest);

export default router;
