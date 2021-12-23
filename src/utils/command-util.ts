import os from 'os';
import path from 'path';
import { Command } from '@serverless-devs/commander';
import { CommandManager } from '../core';
import { version, Parse } from '../specification';
import { PROCESS_ENV_TEMPLATE_NAME } from '../constants/static-variable';
import storage from './storage';
import logger from './logger';
import { emoji } from './common';
import _, { get, forEach, size } from 'lodash';
import core from './core';
const { makeUnderLine, loadComponent, fse: fs, getYamlContent, publishHelp } = core;

const { getSubcommand, getServiceConfig } = version;

export async function setEnvbyDotenv(templateFile: string) {
  const spath = path.dirname(templateFile);
  require('dotenv').config({ path: path.join(spath, '.env') });
  const data = await getYamlContent(templateFile);
  const { services } = data;
  let codeUri: string;
  for (const key in services) {
    const element = services[key];
    if (element.component === 'fc') {
      codeUri = get(element, 'props.function.codeUri');
      break;
    }
  }
  if (codeUri) {
    codeUri = path.isAbsolute(codeUri) ? codeUri : path.join(spath, codeUri);
    require('dotenv').config({ path: path.join(codeUri, '.env') });
  }
}

export function createUniversalCommand(command: string, customerCommandName?: string, description?: string) {
  const _command = new Command(command);
  const processArgv: string[] = [];
  let params: string[] = [];
  let _customerCommandName = customerCommandName;
  let start = false;
  for (let i = 0; i < process.argv.length; i++) {
    if (!start) {
      processArgv.push(process.argv[i]);
    } else {
      params.push(process.argv[i]);
    }
    if (process.argv[i] === command) {
      start = true;
    }
  }

  if (params.length !== 0) {
    process.env.temp_params = params.join(' ');
    process['temp_params'] = params;
  }
  process.argv = processArgv;
  _command.description(description || '').action(() => {
    const template: string | undefined = process.env[PROCESS_ENV_TEMPLATE_NAME];
    if (template) {
      const commandManager = new CommandManager(template, command, _customerCommandName, process.env.temp_params);
      commandManager.init();
    }
  });
  return _command;
}

export async function getCommandDetail(name: any, provider: any, version: any): Promise<any[]> {
  let command_list: any = [];
  return command_list;
}

export async function getParsedTemplateObj(templateFile: any) {
  const parse = new Parse(templateFile);
  const parsedObj = parse.getOriginalParsedObj();
  const result = await parse.getRealVariables(parsedObj);
  return result;
}

export function getCustomerCommandInfo(parsedTemplateObj: any): string[] {
  return getSubcommand(parsedTemplateObj);
}

export async function createCustomerCommand(templateFile: string): Promise<any[]> {
  const customerCommands: any = [];
  const doc = await getParsedTemplateObj(templateFile);
  const subCommands = getCustomerCommandInfo(doc);
  const commandListPromise = subCommands.map(async projectName => {
    const projectDocDetail: any = getServiceConfig(doc, projectName);
    return { projectName, projectDocDetail };
  });
  
  const commandListDetail = await Promise.all(commandListPromise);
  // 只有一个指令的时候

  forEach(commandListDetail, ({ projectName, projectDocDetail }) => {
    const customerCommand = new Command(projectName);
    customerCommand._componentName = get(projectDocDetail, 'component');
    const [_customerCommandName, methodName] = process.argv.slice(2);
    if (_customerCommandName === projectName && methodName && methodName.indexOf('-') !== 0) {
      customerCommand.addCommand(createUniversalCommand(methodName, projectName));
    }
    customerCommand.option('-h, --help', 'Print usage document');
    customerCommand.action(async () => {
      const { component } = projectDocDetail;
      const componentInstance: any = await loadComponent(component);
      if (componentInstance) {
        try {
          const publishYamlInfor = await getYamlContent(path.join(componentInstance.__path, 'publish.yml'));
          console.log(
            `${emoji('🚀')} ${publishYamlInfor['Name']}@${publishYamlInfor['Version']}: ${publishYamlInfor['Description']}\n`,
          );
          if (publishYamlInfor['Commands']) {
            const helperLength = publishHelp.maxLen(publishYamlInfor['Commands']);
            console.log(publishHelp.helpInfo(publishYamlInfor['Commands'], 'Commands', helperLength))
            console.log(
              `${
                publishYamlInfor['HomePage']
                  ? `${emoji('🧭')} ${makeUnderLine('More information: '+ publishYamlInfor['HomePage'])} `  + '\n'
                  : ''
              }`,
            );
          }
        } catch (e) {
          logger.error('Help information could not be found');
        }
      } else {
        logger.error('Help information could not be found');
      }
    });

    customerCommands.push(customerCommand);
  });

  if(size(commandListDetail) === 1) {
    const componentInstance: any = await loadComponent(get(_.first(commandListDetail), 'projectDocDetail.component'));
    const publishYamlInfor = await getYamlContent(path.join(componentInstance.__path, 'publish.yml'));
    // @ts-ignore
    _.set(_.first(customerCommands), '_componentPublish', publishYamlInfor);
  }
  return customerCommands;
}

export function registerCommandChecker(program: any) {
  program.on('command:*', (cmds: any) => {
    const commands = program.commands.map((command: any) => command.name());
    if (!commands.includes(cmds[0])) {
      logger.error(`  error: unknown command ${cmds[0]}`);
      program.help();
    }
  });
}

export async function registerCustomerCommand(system_command: any, templateFile: string) {
  if (templateFile) {
    const customerCommands = await createCustomerCommand(templateFile);
    forEach(customerCommands, command => {
      system_command.addCommand(command);
    });
    if(size(customerCommands) === 1) {
      // @ts-ignore
      return _.get(_.get(_.first(customerCommands), '_componentPublish'), 'Commands', []);
    } else {
      return _.map(customerCommands, item => ({
        [`${item._name} [options]`]: `Please use [s ${item._name} -h]  obtain the documentation`
      }))
    }
  }
}

export async function registerUniversalCommand(system_command: any, templateFile: string) {
  if (templateFile) {
    const parsedTemplateObj = await getParsedTemplateObj(templateFile);
    const customerCommands = getCustomerCommandInfo(parsedTemplateObj);
    if (process.argv[2] && !customerCommands.includes(process.argv[2]) && !['-h', '--help'].includes(process.argv[2])) {
      system_command.addCommand(createUniversalCommand(process.argv[2]));
    }
    // else if (
    //     process.argv[2] &&
    //     customerCommands.includes(process.argv[2]) &&
    //     process.argv[3] &&
    //     !customerCommands.includes(process.argv[3])
    // ) {
    //     system_command.addCommand(createUniversalCommand(process.argv[3], process.argv[2]));
    // }
  }
}

export function registerVerbose(program: any) {
  if (process.argv.includes('--verbose')) {
    process.env.VERBOSE = program.verbose;
  }
}

export function recordCommandHistory(argv: string[]) {
  const file = storage.getHistoryFile();
  fs.appendFileSync(file, argv.join(',') + os.EOL);
}

export default {
  registerCommandChecker,
  recordCommandHistory,
  registerCustomerCommand,
  registerUniversalCommand,
};
