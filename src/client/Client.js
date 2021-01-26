const { Collection, Client } = require('discord.js')

class Cleaver extends Client {
    constructor() {
        super()

        this.commands = new Collection();
    }
    //bruj javascript is so bad theres no error checking

    commandHandler() {

    }

    initBot() {
        this.commandHandler();

        this.on('ready', () => {
            require('../events/ReadyEvent.js')
        })
    }
}

module.exports = { Cleaver }