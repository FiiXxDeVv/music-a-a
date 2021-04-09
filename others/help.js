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
\`A!invite\` - \`A!support\` - \`A!about\`
\`A!ping\` - \`A!prefix\` - \`A!uptime\`

**Music Commands**
\`A!play\` - \`A!skip\` - \`A!skipto\`
\`A!stop\` - \`A!volume\` - \`A!nowplaying\`
\`A!shuffle\` - \`A!search\` - \`A!resume\`
\`A!remove\` - \`A!queue\` - \`A!filter\`
\`A!loop\` - \`A!lyrics\` - \`A!radio\`

**Links**
[Support](https://discord.gg/NmGuYUhYRN) - [Invite](https://discord.com/api/oauth2/authorize?client_id=821667430694780938&permissions=8&scope=bot)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("BLUE");
   message.react("<:emoji_74:815251307635015731>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
