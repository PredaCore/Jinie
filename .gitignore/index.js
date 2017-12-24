const Discord = require(discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Jinie, !help");
});

bot.login("
