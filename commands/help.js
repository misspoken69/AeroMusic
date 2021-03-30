exports.run = async(client, message) => {
    message.channel.send({
        embed: {
            title: '*Aero Command Menu*',
            description: `
            __***Commands***__
            \`a!play\` | Play a song!
            \`a!pause\` | Pause music. 
            \`a!resume\` | Resume Music.
            \`a!np\` | Get current song's info.
            \`a!skip\` | Skip to next song.
            \`a!stop\` | Stop playing the music.
            \`a!volume\` | Adjust the current volume.
            \`a!queue\` | To see the full queue.`,
            footer: `By Misspoken#1122`,
            color: 'BLACK',
			image: 'https://media.discordapp.net/attachments/817447136585056307/826524486953205790/30d899232dfe254a407a954880f424e4.gif?width=486&height=251'
        }
    })
}