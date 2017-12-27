const Discord = require("discord.js");
                        
var bot = new Discord.Client();

const PREFIX = "!";

bot.on('ready', function() {
    bot.user.setGame("Humain");
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
    else if(message.content === '!Q040') {
      const embed = new Discord.RichEmbed();
      embed.setColor(3066993)
      .setDescription('```\nAlors que vous passez de longues heures accoudées au comptoir de la taverne de Marbrume a siroté une biere. \n\nUn barde monte sur une table et commence à jouer une petite chanson… \n\nMalheureusement sa chanson est terrible et nique l’ambiance du bar.```')
      .setThumbnail('https://img15.hostingpics.net/pics/166381aqwzsxe.png');
      
      embed.addField('Le Convaincre de Partir', '!V041')
      .addField('Le Provoquer en Duel', '!V042');
    
      message.channel.send({embed: embed});
    }
  }
});
    }
    else if(message.content === '!V042') {
      const embed = new Discord.RichEmbed();
      embed.setColor(3066993)
      .setDescription('```\nTu saisie la lutte du propriétaire et tu le provoque dans un duel musical ! \n\Tu commences juste à jouer de la lutte quand tu réalises que t’es encore pire que le barde… \n\Le Barde te sur joue facilement et te fait signe de baisser ta lutte… \n\Le Bar entier se fout de ta gueule… c’est très embarrassant…. \n\nUn barde monte sur une table et commence à jouer une petite chanson… \n\nMalheureusement sa chanson est terrible et nique l’ambiance du bar.```')
      .setThumbnail('https://img15.hostingpics.net/pics/166381aqwzsxe.png');
      
      embed.addField('-5 en charisme', '***Tu fera mieux la prochaine fois***');
    
      message.channel.send({embed: embed});
    }
  }
});
bot.login("Mzk1NjA4NjQ2MzI0ODQ2NTky.DSVW3A.Zk2nKQZNoykSUqlVQxPcnZ91cmQ");
