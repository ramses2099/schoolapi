require('dotenv').config();

const PRODUCTION = require('./production');
const DEVELOPMEMT = require('./developments');
const QA = require('./qa');

const { NODE_DEV } = process.env;

let currentEnv = DEVELOPMEMT;

if (NODE_DEV == "production") {
    currentEnv = PRODUCTION;
} else if (NODE_DEV == "qa") {
    currentEnv = QA;
}

module.exports = currentEnv;
