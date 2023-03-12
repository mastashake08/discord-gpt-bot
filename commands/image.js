require('dotenv').config()

const { Configuration, OpenAIApi } = require("openai")
const { SlashCommandBuilder } = require('discord.js');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


module.exports = {
	data: new SlashCommandBuilder()
   .setName('generate-image')
   .setDescription('Generate a ChatGPT image!')
   .addStringOption(option =>
     option
     .setName('prompt')
     .setDescription('The image prompt to generate')
     .setRequired(true)
    ),
};
