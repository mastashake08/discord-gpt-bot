[![Patreon donate button](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://www.patreon.com/mastashake08)
[![npm](https://img.shields.io/npm/v/buttplug.svg)](https://npmjs.com/package/discord-gpt-bot)
[![Discord](https://img.shields.io/badge/Discord-Join%20My%20Server-blue)](https://discord.gg/DMbMmQvvQh)
[![CodeLife](https://img.shields.io/badge/Code%20Life-Join%20The%20Team-brightgreen)](https://bit.ly/30vZro9)

# Discord GPT Bot

A discord bot that sends OpenAI generated messages to a channel whenever a specific user uses the /generate-prompt command


## Table Of Contents

- [Support The Project](#support)
- [Installation](#installation)

- [Usage Example](#usage)
- [Contributing](#contributing)
- [License](#license)

## Support
Join my Masta Coders Discord server and come join a community of coders, investors and thinkers come join!
[![CodeLife Join button](https://i.imgur.com/407brBK.png)](https://discord.gg/DMbMmQvvQh)

[You can also support me  via Patreon](http://patreon.com/qdot)!
Every donation helps us afford more time to create projects and classes for underserved youth!

## Installation

Use the package manager [npm](https://npmjs.org) to install the dependencies. Then copy the example .env file and fill in with appropriate values.

```bash
 git clone https://github.com/mastashake08/discord-gpt-bot.git
 npm install
 cp .env.example .env
 #set values for OpenAI and DISCORD APIs in .env
 DISCORD_TOKEN=
 DISCORD_CHANNEL_ID=
 DISCORD_CLIENT_ID=
 DISCORD_GUILD_ID=
 OPENAI_API_KEY=




```

## Usage

```bash
node index.js
```
### Docker

```bash
# On linux/amd64 architechture
docker run --platform linux/amd64 --env-file=<PATH TO .ENV> -d --name=<NAME> mastashake08/discord-gpt-bot

docker run  --env-file=<PATH TO .ENV> -d --name=<NAME> mastashake08/discord-gpt-bot:latest
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
