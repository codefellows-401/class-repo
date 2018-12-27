import { Router } from 'express';
import Chicken from './model.js';

const router = Router();

router.get('/api/v1/chickens', (request, response) => {

  Chicken.find({}).then(chickens => {
    
    response.send(chickens);
  });
});

export default router;