const Discord = require('discord.js')
const client = new Discord.Client()
const ms = require('ms');
const links = require('./links.json')

var prefix = "!";

client.on('ready', () => {
    console.log("logado")
    client.user.setActivity("on programming....")
})

client.on('message', message => {
    responseObject = links;
    if(responseObject[message.content]){
        message.channel.send(responseObject[message.content])
    }
    if(message.content.startsWith(prefix + "ping")) {
        let startTime = Date.now();
        let embed = new Discord.RichEmbed()
        .setAuthor(client.user.username.displayAvatarURL, client.user.displayAvatarURL)
        .setColor('#B40486')
        .setAuthor("Ping - Pong")
        .addField("Ping local", `**:ping_pong: Ping = ${Math.round(Date.now() - startTime)} ms!**`, true)
        .addField("Seu ping", `**:ping_pong: Ping = ${Math.round(client.ping).toFixed(0)} ms!**`, true)
        .setFooter(`${message.author.tag}`)
        .setTimestamp()
        message.channel.send(embed)
    }

    if (message.content.includes("https://discord.gg/")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.delete();
            message.reply("❌ **Você não pode divulgar aqui!**");
        }

    }

    if(message.content.startsWith(prefix + "tt") || message.content.startsWith(prefix + "criador")) {
        let embed = new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setColor('#B40486')
        .setTitle("---Twitter do meu criador---")
        .addField(" Twitter = https://twitter.com/@_CarlosT_T", client.user.username)
        .setImage("https://media.giphy.com/media/fniU8bOk2YBK88kaHj/giphy.gif")
        .setTimestamp()
        .setFooter(`${message.author.tag}`)
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "friend") || message.content.startsWith(prefix + "friends")) {
        let embed = new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setColor('#B40486')
        .setTitle("---Twitter dos **KIDS**---")
        .addField("Twitter do Kauan | https://twitter.com/@KauanT_T", client.user.username)
        .addField("Twitter do Thiago | https://twitter.com/thiagoooopvp", client.user.username)
        .setImage("https://media.giphy.com/media/ncfTAtUnHtrutyE626/giphy.gif")
        .setTimestamp()
        .setFooter(`${message.author.tag}`)
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "icone")) {
        let simg = `${message.guild.iconURL}?size=2048`
        let icone = new Discord.RichEmbed()
        .setDescription("Ícone do grupo:")
        .setColor("#B40486")
        .setImage(simg)
        message.channel.send(icone)
    }

    if(message.content.startsWith(prefix + "avatar")) {
        var user = message.mentions.users.first() || message.author;
        var embed = new Discord.RichEmbed()
        .setTitle(":frame_photo: " + user.username)
        .setImage(user.username.displayAvatarURL)
        .setColor('#B40486')
        message.channel.send(embed);
    }


    if(message.content.startsWith(prefix + "corrida")) {
        let user = message.mentions.users.first();
          if (!user) return message.reply('**Você não mencionou o usuario que você quer correr!**').catch(console.error);
          const Corrida = "<@" + message.author.id + ">" 
          const corrida2 =  " <@" + user.id + ">"
          var falas = [" fez **200** metros 🏎 ....."," fez **500** metros 🏎 ..........."," fez **800** metros 🏎 .............."," fez **1000** metros 🏎 ................."," fez **1500** metros 🏎 ............................","Explodiu 🔥 ","Bateu e pegou fogo 🔥" ]
          message.channel.send({
              "embed": {
                  "title": "🏎 Corrida",
                  "description": " O " + Corrida + " e" +  corrida2 + " **estao disputando uma corrida**" ,
                  "color": "65535",
                  
                  "fields": [
                      {
                          "name":"Sobre a corrida:",
                          "value":  "O " + Corrida +  "\n" + falas[Math.round(Math.random() * falas.length)]  + "\n" +  "O " + corrida2 +  "\n" + falas[Math.round(Math.random() * falas.length)],
                          "inline": false
                        }
                    ]
                }
            })
    }

    function checkBots(guild) {
        let botCount = 0; // This is value that we will return
        guild.members.forEach(member => { // We are executing this code for every user that is in guild
          if(member.user.bot) botCount++; // If user is a bot, add 1 to botCount value
        });
        return botCount; // Return amount of bots
      }

      function checkMembers(guild) {
        let memberCount = 0;
        guild.members.forEach(member => {
          if(!member.user.bot) memberCount++; // If user isn't bot, add 1 to value. 
        });
        return memberCount;
      }

      exports.run = async (bot, message, args) => {
  
    }
    
    exports.help = {
      name: 'serverinfo'
    }

    if(message.content.startsWith(prefix + "botinfo") || message.content.startsWith(prefix + "bi")) {
        let embed = new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.AvatarURL)
        .setColor("#B40486")
        .setTitle("---Informação do bot---")
        .addField(":crown: Criador", "HeyCarlos")
        .addField(":speech_balloon: Canais", client.channels.size, true)
        .addField(":clock5: Tempo de atividade", Math.round(client.uptime / (1000 * 60 * 60)) + "horas, " + Math.round(client.uptime / (1000 * 60)) % 60 + "minutos, " + Math.round(client.uptime / 1000) % 60 + " segundos", true)
        .addField(":file_cabinet: Número de servidores", client.guilds.size, true)
        .addField(":bust_in_silhouette: Número de usuários", message.guild.memberCount, true)
        .addField(":ab: Nomes dos servidores onde o bot está presente", client.guilds.map(r => r.name + ` | **${r.memberCount}** members`))
        .setTimestamp()
        .setFooter(`${message.author.tag}`)
        return message.channel.send(embed)        
    }

    if(message.content.startsWith(prefix + "serverinfo") || message.content.startsWith(prefix + "si")) {
        let sicon = message.guild.displayAvatarURL
        let embed = new Discord.RichEmbed()

        .setTitle("**Smit**")
        .addField(":crown: Proprietário do servidor", message.guild.owner.user.tag)
        .addField(':earth_americas: Região do servidor', message.guild.region, true)
        .addField(':speech_balloon: Canais', message.guild.channels.size, true)
        .addField(':busts_in_silhouette: Contagem total de membros', message.guild.memberCount)
        .addField(':boy: Players', checkMembers(message.guild), true)
        .addField(':robot: Bots', checkBots(message.guild), true)
        .setFooter('Guilda criada em:')
        .setColor("#B40486")
        .setFooter(`${message.author.tag}`)
        .setThumbnail(sicon)
        .setTimestamp()

        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "userinfo") || message.content.startsWith(prefix + "ui")) {
        let embed = new Discord.RichEmbed()
        .setDescription("Informação do usuário")
        .setAuthor(message.author.username)
        .setColor("#FF0000")
        .addField("Nome de usuário", `${message.author}`)
        .addField("ID", message.author.id)
        .addField("Criado em", message.author.createdAt)
        .setFooter(`${message.author.tag}`)
        .setTimestamp()
        message.channel.sendEmbed(embed)
    }

    if(message.content.startsWith(prefix + "logout")) {
        if(message.author.id == "452121459549143040") {
            message.channel.send("**:gear: saiu**").then(() => {
                console.log("OFF!")
                client.destroy();
                process.exit()
            })
        } else {
            message.channel.send(":x: Erro, tente novamente mais tarde!")
        }
    }

    if(message.content.startsWith(prefix + "limpar") || message.content.startsWith(prefix + "clear")) {
        let myrole = message.guild.member(client.user).hasPermission("MANAGE_MESSAGES");
        let yourole = message.guild.member(message.author).hasPermission("MANAGE_MESSAGES");

        if (!myrole) {
            return message.channel.send(":no_entry:**Eu não tenho as permissões necessárias**");
        }

        if (!yourole) {
            return message.channel.send(":no_entry:**Você não tem as permissões necessárias**");
        }

        var suppression = message.content.substr(8);
        if (suppression < 2 || suppression > 101) {
            return message.reply("**O valor que você tem é inválido, por favor, escolha um valor entre 2 e 100**");
        }
        message.channel.bulkDelete(suppression, true).then(ok => {
            message.reply("**Excluindo " + "" + suppression + "" + " mensagens**")
            .then(message => setTimeout(function(){message.delete}, 5000))
            .catch(err => console.log(err));
        })
    }

})
client.login("NDc2NTQ4NjAzNjIwNjIyMzcx.DlHc4A.XIYv_rEUg-7uwDZmPzH25zlnihE")