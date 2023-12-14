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
        message.reply(`Hiii, So glad to see you. Lookin mighty fine today alright 😏`);
    }

    if (textMessage === 'describe looper') {
        message.reply(`loopad is velurant professional. loves mukbang and mommies - cali, nero, looper, rudy`);
    }

    if (textMessage === 'describe rudy') {
        message.reply(`official iphone krunker esports player. server owner. - cali & rudy himself`);
    }

    if (textMessage === 'describe bakya') {
        message.reply(`bakya first bandar (monke) converted to monke after 420 BC - cali`);
    }

    if (textMessage === 'describe bony') {
        message.reply(`pony dark joke manager 💀 (ex wife beater) - bony himself`);
    }

    if (textMessage === 'describe ali bhay') {
        message.reply(`veg biryani eater (fetish aficionado) - maska chaska eater & nero`);
    }

    if (textMessage === 'describe calibur') {
        message.reply('"para pa pa para papa" - aliza');
    }
});

client.login(process.env.TOKEN);
