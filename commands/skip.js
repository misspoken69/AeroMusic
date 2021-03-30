exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('YHmm, you are not in a voice channel!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue){ return message.channel.send({
        embed: {
            description: 'There is nothing in the queue to skip! Add music using `a!play <song>`',
            color: 'BLACK'
        }
    })
}
    if(queue.songs.length !== 0) {
        message.react('✅')
        queue.connection.dispatcher.end('Skipped the current song!')
    }
}