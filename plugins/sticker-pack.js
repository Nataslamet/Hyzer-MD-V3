let handler = async (m, { conn, text }) => {
  let res = 'https://api.lolhuman.xyz/api/stickerwa?apikey=eafa46a5dac2cd0cf3f0c2e1&query=meme'
  if (!res.ok) throw await 'Website Down'
  let json = await res.json()
  if (!json.result) throw json
  m.reply(json.result) 
}
handler.help = ['stickerpack'].map(v => v + ' <Apa>')
handler.tags = ['internet', 'sticker']
handler.command = /^(stickerpack)$/i

module.exports = handler
