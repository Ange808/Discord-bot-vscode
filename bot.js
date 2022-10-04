
const { Client, GatewayIntentBits, messageLink} = require("discord.js"); // defining the Client and GatewayIntentBits
require("dotenv").config(); // helps us import your Master ling ling token aka bot.

// I just found out that the new version of discord requires intents, so gotta make sure is turned on in da Discord Application website. loll

const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,               //this is intent access top guilds
        GatewayIntentBits.GuildMessages,        //this is intent access top guildmessages
        GatewayIntentBits.GuildMembers          //this is intent access top guildmembers
    ]
});

//------------------------------------------------------------------------>
/*
interaction / commands are here
*/

bot.on("ready", (client) =>{
    console.log(`${client.user.username} is ready`)
});

bot.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'hey') {
        await interaction.reply(`howsit ${interaction.user}`)
    }
    else if (commandName === 'server') {
        await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`)
    }
    else if (commandName === 'user') {
        await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`)
    }
})

//------------------------------------------------------------------------>


bot.login(process.env.token)         //logs the bot on