const Discord = require("discord.js");
                        
var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("jinie, !help");
    console.log("le bot a bien ete connecte");
});

bot.login("Mzk0NDc2MjQzOTc5OTkzMDg5.DSFlDQ.vAj7kkqzqaWt9cy9QIive1dht9E");
