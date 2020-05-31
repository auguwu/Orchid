import { Middleware } from '.';

/** Enables the ability to pass in Forms */
export default (): Middleware => ({
  intertwine() {
    try {
      require('form-data');
    } catch {
      const logger = this.middleware.get('logger');
      if (logger) logger.warn('Unable to find package `form-data`');      
    }

    const logger = this.middleware.get('logger');
    if (logger) logger.info('Enabled Forms middleware, now you have access to pass in Form Data into Request#body');

    this.middleware.add('form', true);
  },
  name: 'form'
});