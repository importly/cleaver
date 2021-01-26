require('dotenv').config();
const { Cleaver } = require('./src/client/Client');

const cleaver_bot = new Cleaver();

cleaver_bot.initBot(process.env.TOKEN);