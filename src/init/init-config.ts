/** @format */

import * as inquirer from 'inquirer';
import chalk from 'chalk';
import { emoji } from '../utils/common';

const data = [
  new inquirer.Separator(`\n${emoji('👋')} Hello Serverless for Cloud Vendors`),
  {
    key: 'alibaba',
    name: 'Alibaba Cloud Serverless',
    value: 'alibaba',
  },
  {
    key: 'aws',
    name: 'AWS Cloud Serverless',
    value: 'aws',
  },
  {
    key: 'tencent',
    name: 'Tencent Cloud Serverless',
    value: 'tencent',
  },
  new inquirer.Separator(`\n${emoji('🧩')} Serverless Dev Framework`),
  {
    key: 'devsapp/midway-hook-vue',
    name: 'Midway - Midway FaaS Framework',
    value: 'devsapp/midway-hook-vue',
  },
  {
    key: 'devsapp/start-malagu',
    name: 'Malagu - Malagu Framework',
    value: 'devsapp/start-malagu',
  },
  new inquirer.Separator(`\n${emoji('🍼')} Dev Template for Serverless Devs`),
  {
    key: 'devsapp/start-application',
    name: 'Application Scaffolding',
    value: 'devsapp/start-application',
  },
  {
    key: 'devsapp/start-component',
    name: 'Component Scaffolding',
    value: 'devsapp/start-component',
  },
];

const data_small = [
  {
    key: 'alibaba',
    name: `${chalk.gray(`[${emoji('👋')} Hello Serverless]`)}\tAlibaba Cloud Serverless`,
    value: 'alibaba',
  },
  {
    key: 'aws',
    name: `${chalk.gray(`[${emoji('👋')} Hello Serverless]`)}\tAWS Cloud Serverless`,
    value: 'aws',
  },
  {
    key: 'tencent',
    name: `${chalk.gray(`[${emoji('👋')} Hello Serverless]`)}\tTencent Cloud Serverless`,
    value: 'tencent',
  },
  {
    key: 'devsapp/dk-http',
    name: `${chalk.gray(`[${emoji('🚀')} DK Framework]`)}\tDK HTTP API`,
    value: 'devsapp/dk-http',
  },
  {
    key: 'devsapp/dk-tablestore-mail',
    name: `${chalk.gray(`[${emoji('🚀')} DK Framework]`)}\tDK TableStore Mail`,
    value: 'devsapp/dk-tablestore-mail',
  },
  // {
  //   key: 'devsapp/start-component',
  //   name: 'FullStack Website',
  //   value: 'devsapp/start-component',
  // },
  {
    key: 'devsapp/midway-hook-vue',
    name: `${chalk.gray(`[${emoji('🧩')} Serverless Dev]`)}\tMidway - Midway FaaS Framework`,
    value: 'devsapp/midway-hook-vue',
  },
  {
    key: 'devsapp/start-malagu',
    name: `${chalk.gray(`[${emoji('🧩')} Serverless Dev]`)}\tMalagu - Malagu Framework`,
    value: 'devsapp/start-malagu',
  },
  {
    key: 'devsapp/start-application',
    name: `${chalk.gray(`[${emoji('🍼')} Dev Template]]`)}\tApplication Scaffolding`,
    value: 'devsapp/start-application',
  },
  {
    key: 'devsapp/start-component',
    name: `${chalk.gray(`[${emoji('🍼')} Dev Template]]`)}\tComponent Scaffolding`,
    value: 'devsapp/start-component',
  },
];

const alibaba_data = [
  new inquirer.Separator(`\n${emoji('👏')} Event Function`),
  {
    key: 'devsapp/start-fc-event-nodejs12',
    name: 'Node.js 12 Example',
    value: 'devsapp/start-fc-event-nodejs12',
  },
  {
    key: 'devsapp/start-fc-event-nodejs10',
    name: 'Node.js 10 Example',
    value: 'devsapp/start-fc-event-nodejs10',
  },
  {
    key: 'devsapp/start-fc-event-python3',
    name: 'Python3 Example',
    value: 'devsapp/start-fc-event-python3',
  },
  {
    key: 'devsapp/start-fc-event-python2',
    name: 'Python2 Example',
    value: 'devsapp/start-fc-event-python2',
  },
  {
    key: 'devsapp/start-fc-event-php7',
    name: 'PHP7.2 Example',
    value: 'devsapp/start-fc-event-php7',
  },
  {
    key: 'devsapp/start-fc-event-java8',
    name: 'Java8 Example',
    value: 'devsapp/start-fc-event-java8',
  },
  new inquirer.Separator(`\n${emoji('🌏')} HTTP Function`),
  {
    key: 'devsapp/start-fc-http-nodejs12',
    name: 'Node.js 12 Example',
    value: 'devsapp/start-fc-http-nodejs12',
  },
  {
    key: 'devsapp/start-fc-http-nodejs10',
    name: 'Node.js 10 Example',
    value: 'devsapp/start-fc-http-nodejs10',
  },
  {
    key: 'devsapp/start-fc-http-python3',
    name: 'Python3 Example',
    value: 'devsapp/start-fc-http-python3',
  },
  {
    key: 'devsapp/start-fc-http-python2',
    name: 'Python2 Example',
    value: 'devsapp/start-fc-http-python2',
  },
  {
    key: 'devsapp/start-fc-http-php7',
    name: 'PHP7.2 Example',
    value: 'devsapp/start-fc-http-php7',
  },
  {
    key: 'devsapp/start-fc-http-java8',
    name: 'Java8 Example',
    value: 'devsapp/start-fc-http-java8',
  },
  new inquirer.Separator(`\n${emoji('🚕')} Project Example`),
  // {
  //   key: 'devsapp/start-fc-http-nodejs12',
  //   name: 'Chatroom - Websocket Example',
  //   value: 'devsapp/start-fc-http-nodejs12',
  // },
  {
    key: 'devsapp/todolist-app',
    name: 'TodoList - Node.js Example',
    value: 'devsapp/todolist-app',
  },
  {
    key: 'devsapp/django-blog',
    name: 'Django Blog - Python Example',
    value: 'devsapp/django-blog',
  },
  {
    key: 'devsapp/puppeteer-app',
    name: 'Puppeteer - Front-end Example',
    value: 'devsapp/puppeteer-app',
  },
  {
    key: 'devsapp/image-prediction-app',
    name: 'Image Prediction - AI Example',
    value: 'devsapp/image-prediction-app',
  },
  {
    key: 'devsapp/ffmpeg-app',
    name: 'Video Processing - FFmpeg Example',
    value: 'devsapp/ffmpeg-app',
  },
  new inquirer.Separator(`\n${emoji('🚢')} Web Framework Example`),
  {
    key: 'devsapp/start-express',
    name: 'Express - Node.js Framework',
    value: 'devsapp/start-express',
  },
  {
    key: 'devsapp/start-flask',
    name: 'Flask - Python Framework',
    value: 'devsapp/start-flask',
  },
  {
    key: 'devsapp/start-springboot',
    name: 'SpringBoot - Java Framework',
    value: 'devsapp/start-springboot',
  },
  {
    key: 'devsapp/start-zblog',
    name: 'Zblog - PHP Framework',
    value: 'devsapp/start-zblog',
  },

  new inquirer.Separator(`\n${emoji('🎡')} Static Website`),
  {
    key: 'devsapp/website-vue',
    name: 'Vue - Front-end Framework',
    value: 'devsapp/website-vue',
  },
  {
    key: 'devsapp/website-react',
    name: 'React - Front-end Framework',
    value: 'devsapp/website-react',
  },
  {
    key: 'devsapp/website-docusaurus',
    name: 'Docusaurus - Static Web Framework',
    value: 'devsapp/website-docusaurus',
  },
  {
    key: 'devsapp/website-hexo',
    name: 'Hexo - Static Web Framework',
    value: 'devsapp/website-hexo',
  },
  {
    key: 'devsapp/website-vuepress',
    name: 'Vuepress - Static Web Framework',
    value: 'devsapp/website-vuepress',
  },
];

const alibaba_data_small = [
  {
    key: 'devsapp/start-fc-event-nodejs12',
    name: `${chalk.gray(`[${emoji('👏')} Event Function]`)}\tNode.js 12 Example`,
    value: 'devsapp/start-fc-event-nodejs12',
  },
  {
    key: 'devsapp/start-fc-event-nodejs10',
    name: `${chalk.gray(`[${emoji('👏')} Event Function]`)}\tNode.js 10 Example`,
    value: 'devsapp/start-fc-event-nodejs10',
  },
  {
    key: 'devsapp/start-fc-event-python3',
    name: `${chalk.gray(`[${emoji('👏')} Event Function]`)}\tPython3 Example`,
    value: 'devsapp/start-fc-event-python3',
  },
  {
    key: 'devsapp/start-fc-event-python2',
    name: `${chalk.gray(`[${emoji('👏')} Event Function]`)}\tPython2 Example`,
    value: 'devsapp/start-fc-event-python2',
  },
  {
    key: 'devsapp/start-fc-event-php7',
    name: `${chalk.gray(`[${emoji('👏')} Event Function]`)}\tPHP7.2 Example`,
    value: 'devsapp/start-fc-event-php7',
  },
  {
    key: 'devsapp/start-fc-event-java8',
    name: `${chalk.gray(`[${emoji('👏')} Event Function]`)}\tJava8 Example`,
    value: 'devsapp/start-fc-event-java8',
  },
  {
    key: 'devsapp/start-fc-http-nodejs12',
    name: `${chalk.gray(`[${emoji('🌏')} HTTP Function]`)}\tNode.js 12 Example`,
    value: 'devsapp/start-fc-http-nodejs12',
  },
  {
    key: 'devsapp/start-fc-http-nodejs10',
    name: `${chalk.gray(`[${emoji('🌏')} HTTP Function]`)}\tNode.js 10 Example`,
    value: 'devsapp/start-fc-http-nodejs10',
  },
  {
    key: 'devsapp/start-fc-http-python3',
    name: `${chalk.gray(`[${emoji('🌏')} HTTP Function]`)}\tPython3 Example`,
    value: 'devsapp/start-fc-http-python3',
  },
  {
    key: 'devsapp/start-fc-http-python2',
    name: `${chalk.gray(`[${emoji('🌏')} HTTP Function]`)}\tPython2 Example`,
    value: 'devsapp/start-fc-http-python2',
  },
  {
    key: 'devsapp/start-fc-http-php7',
    name: `${chalk.gray(`[${emoji('🌏')} HTTP Function]`)}\tPHP7.2 Example`,
    value: 'devsapp/start-fc-http-php7',
  },
  {
    key: 'devsapp/start-fc-http-java8',
    name: `${chalk.gray(`[${emoji('🌏')} HTTP Function]`)}\tJava8 Example`,
    value: 'devsapp/start-fc-http-java8',
  },
  {
    key: 'devsapp/todolist-app',
    name: `${chalk.gray(`[${emoji('🚕')} Project Example]`)}\tTodoList - Node.js Example`,
    value: 'devsapp/todolist-app',
  },
  {
    key: 'devsapp/django-blog',
    name: `${chalk.gray(`[${emoji('🚕')} Project Example]`)}\tDjango Blog - Python Example`,
    value: 'devsapp/django-blog',
  },
  {
    key: 'devsapp/puppeteer-app',
    name: `${chalk.gray(`[${emoji('🚕')} Project Example]`)}\tPuppeteer - Front-end Example`,
    value: 'devsapp/puppeteer-app',
  },
  {
    key: 'devsapp/image-prediction-app',
    name: `${chalk.gray(`[${emoji('🚕')} Project Example]`)}\tImage Prediction - AI Example`,
    value: 'devsapp/image-prediction-app',
  },
  {
    key: 'devsapp/ffmpeg-app',
    name: `${chalk.gray(`[${emoji('🚕')} Project Example]`)}\tVideo Processing - FFmpeg Example`,
    value: 'devsapp/ffmpeg-app',
  },
  {
    key: 'devsapp/start-express',
    name: `${chalk.gray(`[${emoji('🚢')} Web Framework]`)}\tExpress - Node.js Framework`,
    value: 'devsapp/start-express',
  },
  {
    key: 'devsapp/start-flask',
    name: `${chalk.gray(`[${emoji('🚢')} Web Framework]`)}\tFlask - Python Framework`,
    value: 'devsapp/start-flask',
  },
  {
    key: 'devsapp/start-springboot',
    name: `${chalk.gray(`[${emoji('🚢')} Web Framework]`)}\tSpringBoot - Java Framework`,
    value: 'devsapp/start-springboot',
  },
  {
    key: 'devsapp/start-zblog',
    name: `${chalk.gray(`[${emoji('🚢')} Web Framework]`)}\tZblog - PHP Framework`,
    value: 'devsapp/start-zblog',
  },
  {
    key: 'devsapp/website-vue',
    name: `${chalk.gray(`[${emoji('🎡')} Static Website]`)}\tVue - Front-end Framework`,
    value: 'devsapp/website-vue',
  },
  {
    key: 'devsapp/website-react',
    name: `${chalk.gray(`[${emoji('🎡')} Static Website]`)}\tReact - Front-end Framework`,
    value: 'devsapp/website-react',
  },
  {
    key: 'devsapp/website-docusaurus',
    name: `${chalk.gray(`[${emoji('🎡')} Static Website]`)}\tDocusaurus - Static Web Framework`,
    value: 'devsapp/website-docusaurus',
  },
  {
    key: 'devsapp/website-hexo',
    name: `${chalk.gray(`[${emoji('🎡')} Static Website]`)}\tHexo - Static Web Framework`,
    value: 'devsapp/website-hexo',
  },
  {
    key: 'devsapp/website-vuepress',
    name: `${chalk.gray(`[${emoji('🎡')} Static Website]`)}\tVuepress - Static Web Framework`,
    value: 'devsapp/website-vuepress',
  },
];

const aws_data = [
  {
    key: 'devscomp/start-lambda',
    name: 'nodejs12.x-httpe',
    value: 'devscomp/start-lambda',
  },
];

const tencent_data = [
  {
    key: 'devscomp/start-scf',
    name: 'nodejs12.x-http',
    value: 'devscomp/start-scf',
  },
];

export const APPLICATION_TEMPLATE = [
  {
    type: 'autocomplete',
    name: 'template',
    message: 'Hello, serverlessor. Which template do you like? \nPlease select or input: ',
    loop: true,
    pageSize: 20,
    source: function (answersSoFar, input) {
      if (!input) {
        return process.env['serverless_devs_temp_height'] == '1' ? data : data_small;
      }
      return data.filter((item: any) => item.name && item.name.indexOf(input) !== -1);
    },
  },
];

export const ALIBABA_APPLICATION_TEMPLATE = [
  {
    type: 'autocomplete',
    name: 'template',
    message: ' Which Alibaba Cloud Serverless template do you like? \nPlease select or input: ',
    loop: true,
    pageSize: 20,
    source: function (answersSoFar, input) {
      if (!input) {
        return process.env['serverless_devs_temp_height'] == '1' ? alibaba_data : alibaba_data_small;
      }
      return alibaba_data.filter((item: any) => item.name && item.name.indexOf(input) !== -1);
    },
  },
];

export const TENCENT_APPLICATION_TEMPLATE = [
  {
    type: 'autocomplete',
    name: 'template',
    message: ' Which Tencent Cloud Serverless template do you like? \nPlease select or input: ',
    loop: false,
    pageSize: 20,
    source: function (answersSoFar, input) {
      if (!input) {
        return tencent_data;
      }
      return tencent_data.filter((item: any) => item.name && item.name.indexOf(input) !== -1);
    },
  },
];

export const AWS_APPLICATION_TEMPLATE = [
  {
    type: 'autocomplete',
    name: 'template',
    message: ' Which AWS Cloud Serverless template do you like? \nPlease select or input: ',
    loop: false,
    pageSize: 20,
    source: function (answersSoFar, input) {
      if (!input) {
        return aws_data;
      }
      return aws_data.filter((item: any) => item.name && item.name.indexOf(input) !== -1);
    },
  },
];

export const PROJECT_NAME_INPUT = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Please input your project name (init dir)',
  },
];
