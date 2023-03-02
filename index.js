require('dotenv').config()
const { Client, Events, Collection, REST, Routes } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { Configuration, OpenAIApi } = require("openai")
const client = new Client({ intents: 2048 })
client.commands = new Collection()
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generate(prompt, model="text-davinci-003") {
  const completion = await openai.createCompletion({
    model: model,
    prompt: prompt
  });
  const text = completion.data.choices[0].text
  return text;
}


// start the discord client and listen for messages
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

const commands = []
// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands(process.env.DISCORD_CLIENT_ID, process.env.DISCORD_GUILD_ID),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();

client.login(process.env.DISCORD_TOKEN)
  client.on(Events.InteractionCreate, async interaction => {
    if (interaction.commandName === 'generate-prompt') {
      const res = await generate(interaction.options.getString('prompt'))
      await interaction.reply({ content: res });
    }
    });
