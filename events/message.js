const defaultSettings = require("../config/defaultSettings.json")

module.exports = (client, message) => {
        if(message.author.bot) return;
        if(!message.guild) return;
      
        if (message.isMentioned(client.user)) {
          message.reply(`Hi! You can use +help to view help.`);
        }
      
        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);
    
        if(!command.startsWith(client.prefix)) return;
    
        let cmd = client.commands.get(command.slice(client.prefix.length));
        if(cmd) cmd.run(client, message, args);    
}