module.exports = {
  name: 'minargstest',
  descriptions: 'generation of randomizer with pre-determined values and user input',
  async execute(message, args) {
    const { executeables, execoutputpath, roms } = require('../../config.json')
    const child = require('child_process')
    function collect(collector){
//    creates a new promise which makes the magic happen
      return new Promise(resolve => {
        collector.on('collect', m => {
          collector.stop();
          resolve(m.content)
        });
      });
    };
    const shell = require('shelljs');
//  arguments list defined in json
    const args_array = require('./rando_generate_easy.json');
//  initialize variables that persist outside each loop iteration
    let original_requester = message.author.id;
    let return_args = [];
    let x = 0;
    let y = 0;
//  actually execute code
    try {
//    prompts requester for unique identifier and exits with message to console and user if identifier exists
      let filter = m => {
        return m.author.id === original_requester
      };
      message.channel.send("Please send a unique name for this instance of randomizer");
      let collector = message.channel.createMessageCollector(filter);
      let await_collection = await collect(collector);
      return_args.push(await_collection);
      let name_polling1 = shell.exec(`./commands/screengrep.sh ${return_args[0]}`, {shell: '/bin/bash'}).stdout;
      let name_polling2 = shell.exec(`./commands/lsgrep.sh ${return_args[0]}`, {shell: '/bin/bash'}).stdout;
      if (name_polling1 || name_polling2) {
        message.channel.send("this instance already exists, please run the running_instances command to see all existing instances");
        throw ("name exists");
      };
      while (x < args_array.length) {
        let args_array_pointer = args_array[x];
        let last_collected_arg = return_args[return_args.length - 1];
        let filter = m => {
          if (args_array_pointer.match_args == "true") {
            return args_array_pointer.acceptable_args.some(
              user_input => user_input.toLowerCase() ===  m.content.toLowerCase()
            ) && m.author.id === original_requester;
          } else {
            return m.author.id === original_requester
          };
        };
        if (args_array_pointer.skippable == "true" && last_collected_arg == "no") {
          return_args.push("null");
        } else {
          message.channel.send(args_array_pointer.parameter);
          let collector = message.channel.createMessageCollector(filter);
//        call collect function and wait for the collect function to complete before continuing the loop
          let await_collection = await collect(collector);
          return_args.push(await_collection);
        };
//      increment loop counter
        x++
      };
      let testarray = [];
      testarray.push("python3.7 ");
      testarray.push(executeables.lttpr_mw);
      testarray.push(" --rom ");
      testarray.push(roms.lttpr_mw);
      testarray.push(" --multi ");
      testarray.push(return_args[1]);
      testarray.push(" --names ");
      testarray.push(return_args[2]);
      testarray.push(" --outputpath ");
      testarray.push(execoutputpath.lttpr_mw);
      testarray.push(return_args[0]);
      let return_string = testarray.join('');
      //let return_string = "python3.7 "+executeables.lttpr_mw+" --outputpath "+execoutputpath+""+return_args[0]+", --rom "+roms.lttpr_mw+", --multi "+return_args[1]+", --names "+return_args[2];
      //message.channel.send(return_string);
      //shell.exec(`${__dirname}/rando_generate_easy.sh `+return_string, {shell: '/bin/bash'}).stdout;
      //child.spawnSync('python3.7', [ executeables.lttpr_mw, '--outputpath', execoutputpath+return_args[0], '--rom', roms.lttpr_mw, '--multi', return_args[1], '--names', return_args[2] ]);
      //child.execSync(`python3.7 ${executeables.lttpr_mw}, --outputpath ${execoutputpath}${return_args[0]}, --rom ${roms.lttpr_mw}, --multi ${return_args[1]}, --names ${return_args[2]}`);
      child.execSync(return_string);
      let file_array = shell.find(`${execoutputpath.lttpr_mw}${return_args[0]}/`);
      while (y < file_array.length) {
        if (y == 0) {
          y++;
        } else {
          message.channel.send({files: [`${file_array[y]}`]});
          y++;
        };
      };
//    still left: start randomizer server
    } catch (error) {
      console.error(error);
    };
  }
};