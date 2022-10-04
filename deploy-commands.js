const { REST, SlashCommandBuilder, Routes } = require('discord.js');

/*const { clientId, guildId, token } = require('./config.json');
-if using const { clientId, guildId, token } = require('./config.json');
-then we wouldnt need to put "process.env." to our tokens
*/
const { clientId, guildId, token } = require("dotenv").config();
const commands = [
    new SlashCommandBuilder().setName("hey").setDescription('Master Ling ling replys back'),
    new SlashCommandBuilder().setName('server').setDescription('Master Ling ling tells you the server info'),
    new SlashCommandBuilder().setName('user').setDescription('Master Ling ling tells you user info')
]

.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.token);

rest.put(Routes.applicationGuildCommands(process.env.clientId, process.env.guildId), { body: commands})
    .then((data) => console.log(`Successfully registered ${data.length} application commands.`))
    .catch(console.error);