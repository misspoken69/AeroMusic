exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Hmm, you have to join a voice channel to run this command.');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed: {
            description: 'There is nothing playing to be paused!',
            color: 'BLACK'
        }
    })
    message.react('✅')
    queue.songs = []
    queue.connection.dispatcher.end('Paused!')
}