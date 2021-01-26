
require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.on("ready",() => {
    console.log(bot.user.username + " is online");
});

bot.login(TOKEN);