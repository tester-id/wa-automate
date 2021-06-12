function handler(m) {
  this.sendContact(m.chat, '6281246897183', 'elHamidi', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
