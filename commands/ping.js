module.exports = {
  name: 'ping',
  descriptions: 'Ping!',
  execute(message, args) {
    if (message.author.id === ("397895452961275904")) {
      message.channel.send("You are a bottom.");
    } else if (message.author.id === ("88056685184159744")) {
      message.channel.send("Mazzy loves you <3");
    } else {
      message.channel.send("pong!");
    };
  },
};
