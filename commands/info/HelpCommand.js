const { MessageEmbed, Message } = require("discord.js");
const Client = require("../../client/Client");
const BaseCommand = require("../../client/BaseCommand");

class HelpCommand extends BaseCommand {
  constructor() {
    super("ping", "Measures latency", "misc", ["latency"]);
  }
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  async execute(client, message, args) {}
}
module.exports = HelpCommand;
