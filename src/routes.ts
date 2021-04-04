import {Router} from 'express';


const routes = Router();

routes.route('/')
    .get((req, res) => {
        res.send('this is a fucking test');
    })


export default routes;