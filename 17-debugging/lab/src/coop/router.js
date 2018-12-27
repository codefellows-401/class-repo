import { Router } from 'express';
import Coop from './model.js';

const router = Router();

router.get('/api/v1/coops', (request, response) => {

  Coop.find().then(coops => {
    response.send(coops);
  });
});

export default router;