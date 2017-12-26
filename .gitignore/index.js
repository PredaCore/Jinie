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
      embed.setTitle('Mon titre - 256 caractères')
      .setAuthor('Nom', 'https://i.imgur.com/lm8s41J.png')
      .setColor(3447003)
      .setDescription('*Alors que vous passez de longues heures accoudées au comptoir de la taverne de Marbrume a siroté de l'alcool, Un barde monte sur une table et commence à jouer une petite chanson…Malheureusement sa chanson est terrible et nique l’ambiance du bar.*')
      .setFooter('Pied de page - 2048','http://i.imgur.com/w1vhFSR.png')
      .setImage('http://i.imgur.com/yVpYmuV.png')
      .setThumbnail('https://i.imgur.com/p2qNFag.png')
      .setTimestamp()
      .setURL('http://google.com');
      
      .addBlankField(true)
      .addField('Tu décides de faire quelque chose à ce sujet !', 'Le **Convaincre de Partir**, le **Provoquer en Duel !**');
      
      message.channel.send({embed: embed});
    }
  }
});

bot.login("Mzk0NDc2MjQzOTc5OTkzMDg5.DSFzbg.wm0qD6l8YM5t5bFT2nKQpnHg1zw");
