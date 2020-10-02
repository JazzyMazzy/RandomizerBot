module.exports = {
  name: 'generate',
  descriptions: 'generation of randomizer according to preset',
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
    const args_array = require('./generate_args.json');
    const presets = require('./generate_presets.json')
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
//    generate array of names to match
      let z = 2;
//    20201001 EY: changed array "preset_names" to "preset_names_to_match" to eliminate similar variable names
      let preset_names_to_match = [];
      while (z < presets.length) {
        let preset_loop_obj = {};
        preset_names_to_match.push(presets[z].name);
        z++
      };
//    prompt user to select preset
      filter = m => {
        return preset_names_to_match.some(
          user_input => user_input.toLowerCase() ===  m.content.toLowerCase()
        ) && m.author.id === original_requester;
      };
      message.channel.send(`Generate what type? Available options: ${preset_names_to_match}`);
      collector = message.channel.createMessageCollector(filter);
      await_collection = await collect(collector);
      let preset_name_selection = await_collection;
//    match preset based on response from user, and convert object to usable form
      let selected_preset_array = presets.filter(preset_filter_var => preset_filter_var.name && preset_filter_var.name === preset_name_selection);
      let selected_preset = selected_preset_array[0];
//    20201001 EY: added variable for preset name to be used in the randomizer generator for the output name
      let preset_name = selected_preset.name;
      let preset_args = selected_preset.arg;
      let preset_values = selected_preset.value;

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
//      if statement at beginning of logic to prevent polling the user if value is preset
        if (preset_args[x] === "preset") {
          return_args.push(preset_values[x]);
        } else if (args_array_pointer.skippable == "true" && last_collected_arg == "no") {
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

//    begin ugly parsing of arguments into a string :(
//    return_args[0] is unique name
      let return_string_array = [];
      return_string_array.push("python3.7 ");
      return_string_array.push(executeables.lttpr_mw);
      if (return_args[1] == "yes") {
        return_string_array.push(` --create_spoiler`);
      };
      return_string_array.push(` --logic ${return_args[2]}`);
      return_string_array.push(` --mode ${return_args[3]}`);
      return_string_array.push(` --swords ${return_args[4]}`);
      return_string_array.push(` --goal ${return_args[5]}`);
      return_string_array.push(` --difficulty ${return_args[6]}`);
      return_string_array.push(` --item_functionality ${return_args[7]}`);
      return_string_array.push(` --timer ${return_args[8]}`);
      return_string_array.push(` --progressive ${return_args[9]}`);
      return_string_array.push(` --algorithm ${return_args[10]}`);
      return_string_array.push(` --shuffle ${return_args[11]}`);
      return_string_array.push(` --crystals_ganon ${return_args[12]}`);
      return_string_array.push(` --crystals_gt ${return_args[13]}`);
      if (return_args[14] == "yes") {
        return_string_array.push(` --openpyramid`);
      };
      return_string_array.push(" --rom ");
      return_string_array.push(roms.lttpr_mw); // Assigned from main config
      return_string_array.push(` --loglevel ${return_args[15]}`);
      if (return_args[16] == "yes") {
        return_string_array.push(` --seed ${return_args[17]}`);
      };
      return_string_array.push(` --count ${return_args[18]}`);
      return_string_array.push(` --fastmenu ${return_args[19]}`);
      if (return_args[20] == "yes") {
        return_string_array.push(` --quickswap`);
      };
      if (return_args[21] == "yes") {
        return_string_array.push(` --disablemusic`);
      };
      if (return_args[22] == "yes") {
        return_string_array.push(` --mapshuffle`);
      };
      if (return_args[23] == "yes") {
        return_string_array.push(` --compassshuffle`);
      };
      if (return_args[24] == "yes") {
        return_string_array.push(` --keyshuffle`);
      };
      if (return_args[25] == "yes") {
        return_string_array.push(` --bigkeyshuffle`);
      };
      if (return_args[26] == "yes") {
        return_string_array.push(` --retro`);
      };
      if (return_args[27] == "yes") {
        return_string_array.push(` --startinventory ${return_args[28]}`);
      };
      return_string_array.push(` --accessibility ${return_args[29]}`);
      if (return_args[30] == "yes") {
        return_string_array.push(` --hints`);
      };
      if (return_args[31] == "yes") {
        return_string_array.push(` --no-shuffleganon`);
      };
      return_string_array.push(` --heartbeep ${return_args[32]}`);
      return_string_array.push(` --heartcolor ${return_args[33]}`);
      return_string_array.push(` --ow_palettes ${return_args[34]}`);
      return_string_array.push(` --uw_palettes ${return_args[35]}`);
      if (return_args[36] == "yes") {
        return_string_array.push(` --sprite ${return_args[37]}`);
      };
      return_string_array.push(` --shufflebosses ${return_args[38]}`);
      return_string_array.push(` --shuffleenemies ${return_args[39]}`);
      return_string_array.push(` --enemy_health ${return_args[40]}`);
      return_string_array.push(` --enemy_damage ${return_args[41]}`);
      if (return_args[42] == "yes") {
        return_string_array.push(` --shufflepots`);
      };
      if (return_args[43] == "yes") {
        return_string_array.push(` --beemizer ${return_args[44]}`);
      };
      return_string_array.push(` --multi ${return_args[45]}`);
      return_string_array.push(` --names ${return_args[46]}`);
      if (return_args[47] == "yes") {
        return_string_array.push(` --teams ${return_args[48]}`);
      };
      return_string_array.push(` --outputpath ${execoutputpath.lttpr_mw}${return_args[0]}`);
//    20201001 EY: changed outputname from static "custom" to variable referencing the preset name
      return_string_array.push(` --outputname ${preset_name}`);
      let return_string = return_string_array.join('');
      
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
//    new code to start randomizer server!!
      if (return_args[45] > 1) {
        //using an array to avoid scope issues... need to fix
        let port_var_array = []
        let zz = 0;
        while (zz < 1) {
          let random_port_var = Math.floor(Math.random() * 1000) + 38281;
          let port_var_check = shell.exec(`lsof -i:${random_port_var}`, {shell: '/bin/bash'}).stdout;
          if (!port_var_check) {
            port_var_array.push(`${random_port_var}`);
            zz++;
          };
        };
        port_var = port_var_array[0];
        let serverstart_array = [];
        serverstart_array.push(`screen -dmS ${return_args[0]} `);
        serverstart_array.push(`python3.7 ${executeables.lttpr_mw_server} `);
        serverstart_array.push(`--port ${port_var} `);
        serverstart_array.push(`--multidata ${execoutputpath.lttpr_mw}${return_args[0]}/ER_${preset_name}_multidata`);

        let serverstart_string = serverstart_array.join('');
        child.execSync(serverstart_string);
        message.channel.send(`Server started on port ${port_var}`);
      };
//    end new code
    } catch (error) {
      console.error(error);
    };
  }
};
