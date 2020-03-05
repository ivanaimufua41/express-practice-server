import './LoadEnv'; // Must be the first import
import app from '@server';
import logger from '@shared/Logger';
import 'reflect-metadata';

// Start the server
const port = 4000;
app.listen(port, () => {
    logger.info('Express server started on port: ' + port);
});
