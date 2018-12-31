var colors = require('colors');
console.log("Loading...".underline.green)
const RPC = require("discord-rpc");
const client = new RPC.Client({ transport: 'ipc' });
const config = require('./config.json');
client.login({ clientId: config.App_ID });
client.once('ready', () => {
    let presence = {
        startTimestamp: new Date(1000)
    };
    client.setActivity(presence);
    console.log("Loaded!".rainbow)
});

// By Roki
