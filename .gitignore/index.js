const Discord = require("discord.js");
                        
var bot = new Discord.Client();

const PREFIX = "!";

bot.on('ready', function() {
    bot.user.setGame("Race : Elfe");
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
      embed.setTitle('Mon titre - 256 caractères')
      .setAuthor('Nom', 'https://i.imgur.com/lm8s41J.png')
      .setColor(3066993)
      .setDescription('```\nAlors que vous passez de longues heures accoudées au comptoir de la taverne de Marbrume a siroté une biere. \n\nUn barde monte sur une table et commence à jouer une petite chanson… \n\nMalheureusement sa chanson est terrible et nique l’ambiance du bar.```')
      .setFooter('Pied de page - 2048','http://i.imgur.com/w1vhFSR.png')
      .setImage('http://i.imgur.com/yVpYmuV.png')
      .setThumbnail('https://img15.hostingpics.net/pics/166381aqwzsxe.png')
      .setTimestamp()
      .setURL('http://google.com');
      
      embed.addField('Markdown', 'Le **Markdown**, c\'est la *vie* ! ***Discord***')
      .addField('Markdown', 'Le **Markdown**, c\'est la *vie* ! ***Discord***')
      .addBlankField(true)
      .addField('Markdown', 'Le **Markdown**, c\'est la *vie* ! ***Discord***');
      
      message.channel.send({embed: embed});
    }
  }
});

bot.login("Mzk0NDc2MjQzOTc5OTkzMDg5.DSVNPQ.hCL2M-2EsXgc3dfFtunGTO2FbmQ");
