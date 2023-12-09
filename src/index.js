require('dotenv').config()
const {Client, IntentsBitField} = require ('discord.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`✅ ${c.user.tag} is online.`)
    console.log("Heya there's our BOT running!!!")
});

client.on('messageCreate', (message) => {
    // console.log(message.content);

    if (message.author.bot) {
        return;
    }
    
    let textMessage = message.content.trim().toLowerCase();
    
    if (textMessage === 'hi mankyaa') {
        // message.reply(`Hi ${message.author}`);
        message.reply(`Hiii, So glad to see you. Lookin mighty fine today alright 😏`);
    }
});

client.login(process.env.TOKEN);
