exports.run = async(client, message, args) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Hmm, you are not in a voice channel!');
    const queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send('There are no songs in queue to shuffle.')
    let songs = queue.songs;
    for (let i = songs.length - 1; i > 1; i--) {
      let j = 1 + Math.floor(Math.random() * i);
      [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    queue.songs = songs;
    message.client.queue.set(message.guild.id, queue);
    message.channel.send(`Shuffled the current queue! 🔀`).catch(console.error);
}