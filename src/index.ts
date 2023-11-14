import './pre-start';
import logger from 'jet-logger';

import EnvVars from '@src/constants/EnvVars';
import server from './server';

// **** Run **** //
const SERVER_START_MSG =
  'Express server running at http://localhost:' + EnvVars.Port.toString();

server.listen(EnvVars.Port, () => logger.info(SERVER_START_MSG));
