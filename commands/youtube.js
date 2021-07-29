module.exports = {
    name: 'youtube',
    description: 'Sends YT Link', //Optional
    execute(message, args) {
        message.channel.send('https://www.youtube.com/channel/UCGBwCnreLBSzIlT98a2tDBw')
    }
}
