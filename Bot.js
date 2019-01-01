const Discord = require('discord.js');
const client = new Discord.Client();
client.on('message', msg => {
var prefix = '.';//البرفكس
    if(msg.content.startsWith(prefix + "servers")){
        let embed = new Discord.RichEmbed()
        .setTitle("server info..")
        .setThumbnail(msg.guild.iconURL)
        .addField("name.", `${msg.guild.name} with ID: [ ${msg.guild.id} ]`)
        .addField("owner ..", `${msg.guild.owner} with ID: [ ${msg.guild.ownerID} ]`)
        .addField('created at ',msg.guild.createdAt)
        .addField('channels', msg.guild.channels.size)
        .addField('roles', msg.guild.roles.size)
        .addField("afk channel.", `${msg.guild.afkChannel} with ID: ${msg.guild.afkChannelID}`)
        .addField('region', msg.guild.region)
        msg.channel.send(embed);
    }
});
 client.login(process.env.BOT_TOKEN);
 
