const Discord = require("discord.js");
                        
var bot = new Discord.Client();

const PREFIX = "!";

bot.on('ready', function() {
    bot.user.setGame("Race : Humain");
    console.log("le bot a bien ete connecte");
});

bot.on('message', message => {
  if(message.content[0] === PREFIX) {
    if(message.content === '!markdown') {
      message.channel.send(
`Le **Markdown**, c'est la *vie* ! ***Discord***
      
~~bonjour~~
__bonjour__
`);
      message.channel.send("``code``");
    }
    else if(message.content === '!richEmbed1') {
      message.channel.send({embed: {
        color: 3447003,
        description: 'bonjour le monde!'
      }});
    }
    else if(message.content === '!richEmbed2') {
      message.channel.send({embed: {
        color: 3447003,
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: 'Titre',
        url: 'http://wolfayeur.fr',
        description: 'bonjour le monde!',
        fields: [{
        name:'Du texte simple',
          value: 'Votre texte ici'
        },
                 {
          name:'Ajout d\'une Url',
          value: 'Voila l\'adresse de [Google](http://google.com).' 
                 },
                 {
          name:'Markdown',
          value: 'Le **Markdown**, c\'est la *vie* ! ***Discord***'  
        }],
        timestamps: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: 'Par Wolfayeur'
        }
      }});
    }
    else if(message.content === '!richEmbed3') {
      const embed = new Discord.RichEmbed();
      embed.setTitle('Rencontre a la Taverne')
      .setAuthor('Quete H0001', 'http://data.twinoid.com/proxy/www.dinorpg.com/favicon.ico')
      .setColor(3447003)
      .setFooter('Pied de page - 2048','http://i.imgur.com/w1vhFSR.png')
      .setImage('http://i.imgur.com/yVpYmuV.png')
      .setThumbnail('https://i.imgur.com/p2qNFag.png')
      .setTimestamp()
      .setURL('http://google.com');

      embed.addField('Markdown', 'Le **Markdown**, c\'est la *vie* ! ***Discord***')
      .addField('Markdown', 'Le **Markdown**, c\'est la *vie* ! ***Discord***')
      .addBlankField(true)
      .addField('Tu décides de faire quelque chose à ce sujet !', 'Le **Convaincre de Partir **, Le **Provoquer en Duel**');
      
      message.channel.send({embed: embed});
    }
  }
});

bot.login("Mzk0NDc2MjQzOTc5OTkzMDg5.DSFzbg.wm0qD6l8YM5t5bFT2nKQpnHg1zw");
