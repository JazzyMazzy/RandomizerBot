module.exports = {
  name: 'running_instances',
  descriptions: 'check for running screen instances and returns them to user',
  execute(message, args) {
    const shell = require('shelljs');
    try {
     let screen_contents = shell.exec('/home/minecraft/Wahbot/commands/screenlist.sh', {shell: '/bin/bash'}).stdout;
     let ls_contents = shell.ls('/home/minecraft/multiworld/patched_roms')
     if (screen_contents) {message.channel.send(screen_contents)};
     if (ls_contents) {message.channel.send(ls_contents)};
     if (!screen_contents && !ls_contents) {message.channel.send("No instances currently exist")};
    } catch (error) {
      console.error(error);
    };
  }
};
