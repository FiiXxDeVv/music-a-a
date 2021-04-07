const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://cdn.discordapp.com/attachments/827276822382116895/827587022809333771/image0.png`)
    .setTitle(`**Davos Help**`)
    .setDescription(`

**User Commands**
\`p!invite\` - \`p!support\` - \`p!about\`
\`p!ping\` - \`p!prefix\` - \`p!uptime\`

**Music Commands**
\`p!play\` - \`p!skip\` - \`p!skipto\`
\`p!stop\` - \`p!volume\` - \`p!nowplaying\`
\`p!shuffle\` - \`p!search\` - \`p!resume\`
\`p!remove\` - \`p!queue\` - \`p!filter\`
\`p!loop\` - \`p!lyrics\` - \`p!radio\`

**Links**
[Support](https://discord.gg/eYQg66Ss87) - [Invite](https://discord.com/oauth2/authorize?client_id=787948438700032030&permissions=1647705169&scope=bot)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("YELLOW");
   message.react("<:emoji_74:815251307635015731>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
