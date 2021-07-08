import logger from 'utils/logger';
import * as settings from 'config/settings.json';
import * as data from 'static/data.json';
logger.success(settings.welcomeMessage);
logger.success(data.foo);