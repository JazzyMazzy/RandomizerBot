module.exports = {
  name: 'fetch',
  descriptions: 'fetches randomizer files from directory',
  async execute(message, args) {
    const shell = require('shelljs');
    let file_array = shell.find(`/home/minecraft/multiworld/patched_roms/${args}/`);
    let y = 0;
    while (y < file_array.length) {
      if (y == 0) {
        y++;
      } else {
        message.channel.send({files: [`${file_array[y]}`]});
        y++;
      };
    };
  }
};