// import { IntentsBitField  } from 'discord.js' ;
const {IntentsBitField} = require('discord.js');
export const intents = [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
];

