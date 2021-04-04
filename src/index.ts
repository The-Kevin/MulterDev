import express from 'express';
import routes from './routes';

const app = express();

app.use('/uploads', routes);

app.listen(process.env.PORT || 4000, () => {
    console.log('running...');
});