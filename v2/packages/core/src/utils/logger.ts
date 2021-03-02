
import i18n from './i18n';
import { Logger, spinner as LogSpinner } from '@serverless-devs/core';


const CLI_CONTENT = 'S-CLI';

export default class ServerlessDevsCliLogger {

    static log(m) {
        Logger.log(i18n.__(m));
    }
    static info(m) {
        Logger.info(CLI_CONTENT, i18n.__(m));
    }

    static debug(m) {
        Logger.debug(CLI_CONTENT, i18n.__(m));
    }

    static error(m) {
        Logger.error(CLI_CONTENT, i18n.__(m));
    }

    static warning(m) {
        Logger.warn(CLI_CONTENT, i18n.__(m));
    }


    static success(m) {
        Logger.log(i18n.__(m), 'green');
    }

    static spinner(info) {
        return LogSpinner(info);
    }

}



