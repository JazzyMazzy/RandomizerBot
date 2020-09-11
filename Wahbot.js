const fs = require('fs');
const { prefix, token, modules, executeables, execoutputpath } = require('./config.json');
const Discord = require("discord.js");

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
};

let moduleloopvar;
for (moduleloopvar of modules) {
  let moduleCommandFiles = fs.readdirSync(`./modules/${moduleloopvar}`).filter(file => file.endsWith('.js'));
  for (const file of moduleCommandFiles) {
    const command = require(`./modules/${moduleloopvar}/${file}`);
    client.commands.set(`${moduleloopvar}.${command.name}`, command);
  };
};

client.on("ready", () => {
  console.log("I am ready!");
});


client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return message.reply('no command found');

  try {
	client.commands.get(command).execute(message, args);
  } catch (error) {
	console.error('Wahbot.js caught:', error);
	message.reply('Error: '+error);
  }

});

client.login(token);
