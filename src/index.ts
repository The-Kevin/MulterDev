const express = require('express');
import routes from './routes';

const app = express();

app.use(routes);

app.listen(3000, () => {
    console.log('running...');
});