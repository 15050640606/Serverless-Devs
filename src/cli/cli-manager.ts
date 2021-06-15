/** @format */

import { getCredential, loadComponent } from '@serverless-devs/core';
import { logger } from '../utils';
import yaml from 'js-yaml';
import path from 'path';
import os from 'os';
import fs from 'fs';

export interface CliParams {
  component: string;
  command: string;
  access: string;
  props: string;
}

export default class CliManager {
  protected inputs: CliParams;

  constructor(inputs: CliParams) {
    this.inputs = inputs;
  }

  async init(): Promise<any> {
    let result = '';
    try {
      let { component, command, access, props } = this.inputs;
      // 获取密钥信息
      let credentials = {};
      try {
        const accessFile = path.join(os.homedir(), '.s', 'access.yaml');
        const accessFileInfo = yaml.load(fs.readFileSync(accessFile, 'utf8') || '{}');
        if (accessFileInfo[access]) {
          credentials = await getCredential(access);
        }
      } catch (e) {
        credentials = {};
      }
      const componentInstance = await loadComponent(component, null, { access });
      if (componentInstance) {
        if (!command) {
          if (componentInstance['index']) {
            command = 'index';
          } else {
            command = 'cli-help-options';
          }
        }
        if (command === 'cli-help-options') {
          if (componentInstance.__doc) {
            const docResult = componentInstance.__doc();
            logger.info(`\n${docResult}`);
          } else {
            try {
              let componentPathYaml = path.join(componentInstance.__path, 'publish.yml');
              if (!(await fs.existsSync(componentPathYaml))) {
                componentPathYaml = path.join(componentInstance.__path, 'publish.yaml');
              }
              const publishYamlInfor = await yaml.load(fs.readFileSync(componentPathYaml, 'utf8'));
              logger.info(`Help Information: 
                    
${publishYamlInfor['Name']}@${publishYamlInfor['Version']}: ${publishYamlInfor['Description']}
${yaml.dump(publishYamlInfor['Commands'])}
${publishYamlInfor['HomePage'] ? '🧭  More information: ' + publishYamlInfor['HomePage'] + '\n' : ''}`);
            } catch (e) {
              logger.info('No document set');
            }
          }
          return 'help';
        }
        if (componentInstance[command]) {
          let tempProp = {};
          try {
            tempProp = JSON.parse(props || '{}');
          } catch (e) {
            throw new Error('-p/--prop parameter format error');
          }
          try {
            result =
              (await componentInstance[command]({
                props: tempProp,
                Properties: tempProp,
                Credentials: credentials,
                credentials: credentials,
                appName: 'default',
                Project: {
                  ProjectName: 'default',
                  projectName: 'default',
                  component: component,
                  Component: component,
                  provider: undefined,
                  Provider: undefined,
                  accessAlias: access || 'default',
                  AccessAlias: access || 'default',
                },
                project: {
                  component: '',
                  access: access || 'default',
                  projectName: '',
                },
                command: command,
                Command: command,
                args: process.env.temp_params,
                argsObj: process['temp_params'],
                Args: process.env.temp_params,
                ArgsObj: process['temp_params'],
                path: {
                  configPath: '',
                },
                Path: {
                  ConfigPath: '',
                },
              })) || {};

            let outResult = yaml.dump(JSON.parse(JSON.stringify(result)));

            logger.success(Object.keys(result).length === 0 ? `End of method: ${command}` : outResult);
          } catch (e) {
            logger.error(`Failed to execute:\n
  ❌ Message: ${e.message}
  🧭 You can get help for this component by [s ${component} -h]
  😈 If you have questions, please tell us: https://github.com/Serverless-Devs/Serverless-Devs/issues\n`);
            process.exit(-1);
          }
        } else {
          logger.error(`Failed to execute:\n
  ❌ Message: Component ${component} does not include [${command}] method
  🧭 You can get help for this component by [s ${component} -h]
  😈 If you have questions, please tell us: https://github.com/Serverless-Devs/Serverless-Devs/issues\n`);
          process.exit(-1);
        }
      }
    } catch (e) {
      logger.error(`Failed to execute:\n
  ❌ Message: ${e.message}
  🧭 You can get more component on: https://github.com/Serverless-Devs/package-awesome
  😈 If you have questions, please tell us: https://github.com/Serverless-Devs/Serverless-Devs/issues\n`);
      process.exit(-1);
    }
    return result;
  }
}