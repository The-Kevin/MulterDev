import {Router} from 'express';

import uploadOne from './models/uploadOne';
import uploadMany from './models/uploadMany';
import base64 from './models/base64Encode';

const routes = Router();
 
routes.route('/')
    .get((req, res) => {
        res.send('this is a fucking test');
    });

routes.route('/uploadOne')
    .post(uploadOne, (req, res) => {
       res.send(`${req.file.originalname}  ${base64(req.file)}`);
    });

routes.route('/uploadMany')
    .post(uploadMany, (req, res) => {
        res.send(base64(req.files));
    });


export default routes;