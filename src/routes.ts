import {Router} from 'express';

import multer from 'multer';
import multerConfig from './config/multer.config';

const routes = Router();

routes.route('/')
    .get((req, res) => {
        res.send('this is a fucking test');
    });

routes.route('/upload')
    .post(multer(multerConfig).single('files'), (req, res) => {
        res.send(req.file);
    });


export default routes;