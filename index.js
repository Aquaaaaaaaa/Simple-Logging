const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

client.on('ready', () => {
    console.log('Ready! Logged in as: ' + client.user.tag);
});

client.on('roleCreate', (role) => {
    let RoleCreateembed = new Discord.MessageEmbed()
    .setTitle('Role Create Event Triggered!')
    .addField('Role Name:', role, false)
    .setFooter('For More Info Check Discord Audit Log!')
    .setColor('YELLOW')
    const channel = client.channels.cache.find(channel => channel.name === "rls")
    channel.send(RoleCreateembed)
});

client.on('messageDelete', (message) => {
    let messagedeleteembed = new Discord.MessageEmbed()
    .setTitle('Message Event Triggered!')
    .addField('Message Content:', message.content, false)
    .addField('Message Author:', message.author.tag, false)
    .addField('Message Author ID:', message.author.id, false)
    .setFooter('For More Info Check Discord Audit Log!')
    .setColor('YELLOW')
    .setImage(message.author.avatarURL({dynamic: true}))
    const channel = client.channels.cache.find(channel => channel.name === "rls")
    channel.send(messagedeleteembed)

});

client.on('guildMemberAdd', (member) => {
    let joinembed = new Discord.MessageEmbed()
    .setTitle('Join Event Triggered!')
    .addField('Member:', member, false)
    .setFooter('For More Info Check Discord Audit Log!')
    .setTimestamp()
    .setColor('YELLOW')
    .setImage(message.author.avatarURL({dynamic: true}))
    const channel = client.channels.cache.find(channel => channel.name === "rls")
    channel.send(joinembed)
});

client.on('guildMemberRemove', (member) => {
    let leaveembed = new Discord.MessageEmbed()
    .setTitle('Leave Event Triggered!')
    .addField('Member:', member, false)
    .setFooter('For More Info Check Discord Audit Log!')
    .setTimestamp()
    .setColor('YELLOW')
    .setImage(message.author.avatarURL({dynamic: true}))
    const channel = client.channels.cache.find(channel => channel.name === "rls")
    channel.send(leaveembed)
});

client.on('guildBanAdd', (guild, user) => {
    let banembed = new Discord.MessageEmbed()
    .setTitle('Ban Add Event Triggered!')
    .addField('Member:', user, false)
    .addField('Guild:', guild, false)
    .setFooter('For More Info Check Discord Audit Log!')
    .setTimestamp()
    .setColor('YELLOW')
    .setImage(message.author.avatarURL({dynamic: true}))
    const channel = client.channels.cache.find(channel => channel.name === "rls")
    channel.send(banembed)
});

client.on('guildBanRemove', (guild, user) => {
    let banembed = new Discord.MessageEmbed()
    .setTitle('Ban Remove Event Triggered!')
    .addField('Member:', user, false)
    .addField('Guild:', guild, false)
    .setFooter('For More Info Check Discord Audit Log!')
    .setTimestamp()
    .setColor('YELLOW')
    .setImage(message.author.avatarURL({dynamic: true}))
    const channel = client.channels.cache.find(channel => channel.name === "rls")
    channel.send(banembed)
});

client.on('roleDelete', (role) => {
    let RoleCreateembed = new Discord.MessageEmbed()
    .setTitle('Role Delete Event Triggered!')
    .addField('Role Name:', role, false)
    .setFooter('For More Info Check Discord Audit Log!')
    .setColor('YELLOW')
    const channel = client.channels.cache.find(channel => channel.name === "rls")
    channel.send(RoleCreateembed)
});

client.on('emojiCreate', (emoji) => {
    let emojicr = new Discord.MessageEmbed()
    .setTitle('Emoji Create Event Triggered!')
    .addField('Emoji Name:', emoji, false)
    .setFooter('For More Info Check Discord Audit Log!')
    .setColor('YELLOW')
    const channel = client.channels.cache.find(channel => channel.name === "rls")
    channel.send(emojicr)
});

client.on('emojiDelete', (emoji) => {
    let emojide = new Discord.MessageEmbed()
    .setTitle('Emoji Delete Event Triggered!')
    .addField('Emoji Name:', emoji, false)
    .setFooter('For More Info Check Discord Audit Log!')
    .setColor('YELLOW')
    const channel = client.channels.cache.find(channel => channel.name === "rls")
    channel.send(emojide)
});



client.login(config.token)