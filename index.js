require('dotenv').config()
const { Client } = require('discord.js');
const client = new Client({ intents: 2048 })

// start the discord client and listen for messages

client.login(process.env.DISCORD_TOKEN)
 client.on('message', (message) => {
   try {
     if(message.author.bot) {
       return;
      } else {
       /*
        1) grab the message text
        2) pass the text as a prompt to OpenAI
       */
     }
   } catch (e) {
     console.log(e.message)
   }
 })
