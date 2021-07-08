import * as chalk from 'chalk';
const error = (msg: string) => console.log(chalk.red(msg));
const status = (msg: string) => console.log(chalk.blue(msg));
const success = (msg: string) => console.log(chalk.green(msg));
const logger = {
    error,
    status,
    success
}
export default logger;