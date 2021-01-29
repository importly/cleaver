require("dotenv").config();
const { Collection, Client } = require("discord.js");

const prefix = process.env.P;

class Cleaver extends Client {
  constructor() {
    super();

    //Create collections
    this.commands = new Collection();
    this.token = process.env.TOKEN;

    //Import modules
    this.fs = require("fs");
    this.path = require("path");
  }

  commandHandler() {
    this.fs.readdirSync("./commands").map((directory) => {
      this.fs.readdirSync(`./commands/${directory}/`).map((file) => {
        let CMD = require(`../commands/${directory}/${file}`);
        let madeCMD = new CMD();
        this.commands.set(madeCMD.name, madeCMD);
        madeCMD.aliases.forEach((e) => {
          this.commands.set(e, madeCMD);
        });
        console.log(`Command ${madeCMD.name} loaded in ${directory}`);
      });
    });
  }

  initBot() {
    this.commandHandler();

    this.on("ready", async () => {
      require("../events/ready")(this);
    });

    this.on("message", async (message) => {
      //If the message comes from another bot or doesnt start with the prefix, then return
      if (
        message.author.bot ||
        !message.content.startsWith(prefix) ||
        !message.guild
      )
        return;

      const args = message.content.slice(prefix.length).trim().split(/ +/);
      const lower = args.shift().toLowerCase();

      let commandFiles;
      //Navigate the collection filled with commands, get them, and run the run function in them
      if (this.commands.has(lower)) {
        commandFiles = this.commands.get(lower);
        commandFiles.execute(this, message, args);
      }
    });

    this.login(this.token);
  }
}

module.exports = { Cleaver };
