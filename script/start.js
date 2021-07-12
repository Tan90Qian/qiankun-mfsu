const shell = require("shelljs");
const path = require('path');
const chalk = require('chalk');

const cwd = process.cwd();
const log = console.log;

const apps = ["master", "slave"];

apps.forEach((app) => {
  log(chalk.yellow("start:", app));
  const appPath = path.resolve(cwd, "apps", app);
  shell.cd(appPath);
  log(appPath);
  shell.exec("yarn start", { async: true });
});
