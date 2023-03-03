require('dotenv').config()

const { Configuration, OpenAIApi } = require("openai")
const { SlashCommandBuilder } = require('discord.js');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generate(prompt, model="gpt-3.5-turbo") {
  const completion = await openai.createCompletion({
    model: model,
    prompt: prompt
  });
  const text = completion.data.choices[0].text
  return text;
}
module.exports = {
	data: new SlashCommandBuilder()
   .setName('generate-prompt')
   .setDescription('Generate a ChatGPT reponse!')
   .addStringOption(option =>
     option
     .setName('prompt')
     .setDescription('The prompt to generate')
     .setRequired(true)
    ),

	async execute(interaction) {
    const res = await generate(interaction.options.getString('prompt'))
		await interaction.reply(res);
	},
};
