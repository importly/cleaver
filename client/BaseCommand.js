class BaseCommand {
  constructor(name, description = "", catergory = "misc", aliases = []) {
    this.name = name;
    this.description = description;
    this.catergory = catergory;
    this.aliases = aliases;
  }

  async execute() {}
}

module.exports = BaseCommand;
