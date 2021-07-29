module.exports = (client) => {

    // Welcome Message Command
      const welcomechannelId = '870349160182861854' 
      const targetChannelId = `870321818039369751` 
  
      client.on('guildMemberAdd', (member) => {
          console.log(member)
          
          const welocmemessage = ` <@${member.id}> Welcome To Our Server, Please Read ${member.guild.channels.cache.get(targetChannelId).toString()}
          Have A Nice Time!`
          const channel = member.guild.channels.cache.get(welcomechannelId)
          channel.send(welocmemessage)
      })
      
      // Leave Message Command
  
      const leavechannelId = '870349174498005062' 
  
      client.on('guildMemberRemove', (member) => {
          const leavemessage = `<@${member.id}> Just Left Server.`
  
          const channel1 = member.guild.channels.cache.get(leavechannelId)
          channel1.send(leavemessage)
      })
  }
  