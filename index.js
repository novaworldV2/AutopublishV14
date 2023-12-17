const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js");
const bot = new Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildInvites ], partials: [ Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction, Partials.ThreadMember, Partials.GuildScheduledEvent ]});
const Discord = require('discord.js')

bot.once("ready", () => {
	console.log(`Bot connecté ${bot.user.tag} (${bot.user.id}) SUPPORT = https://discord.gg/QuFXDxjhnY`);
});

bot.on("messageCreate", async (message) => {
	if (message.channel.type !== Discord.ChannelType.GuildAnnouncement) return;
	try {
		await message.crosspost();
		console.log(`Le message ${message.content} a été envoyé`)
	} catch {} 
});

bot.login("TON TOKEN ICI")
