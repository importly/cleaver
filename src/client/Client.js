const { Collection, Client } = require('discord.js');
let ready_event = require("../events/ReadyEvent");

class Cleaver extends Client {
    constructor() {
        super();

        this.commands = new Collection();
    }

    commandHandler() {
        console.log("commands");
    }

    initBot(token) {
        this.commandHandler();

        this.on('ready', ()=>{
            ready_event(this);
        });

        this.login(token);
        console.log("done");
    }
}

module.exports = { Cleaver };