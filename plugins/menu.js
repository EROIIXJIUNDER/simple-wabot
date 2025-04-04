//Simple Base Botz
// • Credits : wa.me/6285822146627 [ Nazir ]
// • Feature : menu


let fs = require('fs')
let path = require('path')
let canvafy = require('canvafy')
let moment = require('moment-timezone')
Styles = (text, style = 1) => {
    var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
    var yStr = Object.freeze({
        1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
    });
    var replacer = [];
    xStr.map((v, i) => replacer.push({
        original: v,
        convert: yStr[style].split('')[i]
    }));
    var str = text.toLowerCase().split('');
    var output = [];
    str.map(v => {
        const find = replacer.find(x => x.original == v);
        find ? output.push(find.convert) : output.push(v);
    });
    return output.join('');
};
const defaultMenu = {
    before: ``.trimStart(),
    header: '',
    body: '◦ %cmd',
    footer: '',
    after: ``,
}
let handler = async (m, {
    conn,
    usedPrefix: _p,
    args,
    command
}) => {
    conn.sendMessage(m.chat, {
        react: {
            text: '🕒',
            key: m.key
        }
    })
    conn.sendPresenceUpdate("composing", m.chat)
    let tags
    let teks = `${args[0]}`.toLowerCase()
    let arrayMenu = ['anonymous', 'main', 'fun', 'islami', 'info', 'ai', 'bug', 'jadibot', 'quotes', 'store', 'ephoto', 'downloader', 'textprome', 'nsfw', 'convert', 'premium', 'music', 'maker', 'game', 'group', 'panel', 'internet', 'hengker', 'owner', 'rpg', 'totalsaluran', 'sticker', 'tools', 'anime', 'convert']
    if (!arrayMenu.includes(teks)) teks = '404'
    if (teks == 'anonymous') tags = {
        anonymous: 'ANONYMOUS'
    }
    if (teks == 'downloader') tags = {
        downloader: 'DOWNLOADER'
    }
    if (teks == 'ai') tags = {
        ai: 'AI'
    }
    if (teks == 'convert') tags = {
        convert: 'convert'
    }
    if (teks == 'main') tags = {
        main: 'MAIN'
    }
    if (teks == 'totalsaluran') tags = {
        totalsaluran: 'SALURAN'
    }
    if (teks == 'premium') tags = {
        premium: 'PREMIUM'
    }
    if (teks == 'game') tags = {
        game: 'GAME'
    }
    if (teks == 'convert') tags = {
        convert: 'CONVERT'
    }
    if (teks == 'maker') tags = {
        maker: 'MAKER'
    }
    if (teks == 'group') tags = {
        group: 'GROUP'
    }
    if (teks == 'panel') tags = {
        panel: 'PANEL'
    }
    if (teks == 'music') tags = {
        music: 'MUSIC'
    }
    if (teks == 'anonymous') tags = {
        anonymous: 'ANONYMOUS'
    }
    if (teks == 'quotes') tags = {
        quotes: 'QUOTES'
    }
    if (teks == 'fun') tags = {
        fun: 'FUN'
    }
    if (teks == 'islami') tags = {
        islami: 'ISLAMI'
    }
    if (teks == 'textprome') tags = {
        textprome: 'TEXTPROME'
    }
    if (teks == 'store') tags = {
        store: 'STORE'
    }
    if (teks == 'bug') tags = {
        bug: 'BUG'
    }
    if (teks == 'jadibot') tags = {
        jadibot: 'JADIBOT'
    }
    if (teks == 'nsfw') tags = {
        nsfw: 'NSFW'
    }
    if (teks == 'internet') tags = {
        internet: 'INTERNET'
    }
    if (teks == 'hengker') tags = {
        hengker: 'HENGKER'
    }
    if (teks == 'ephoto') tags = {
        ephoto: 'EPHOTO'
    }
    if (teks == 'owner') tags = {
        owner: 'OWNER'
    }
    if (teks == 'rpg') tags = {
        rpg: 'RPG'
    }
    if (teks == 'info') tags = {
        info: 'INFO'
    }
    if (teks == 'sticker') tags = {
        sticker: 'STICKER'
    }
    if (teks == 'tools') tags = {
        tools: 'TOOLS'
    }
    if (teks == 'anime') tags = {
        anime: 'ANIME'
    }
    try {
        let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
        let {
            limit,
            role,
            registered
        } = global.db.data.users[m.sender]
        let user = global.db.data.users[m.sender];
        let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
        let d = new Date(new Date + 3600000)
        let locale = 'id'
        // d.getTimeZoneOffset()
        // Offset -420 is 18.00
        // Offset    0 is  0.00
        // Offset  420 is  7.00
        let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
        let week = d.toLocaleDateString(locale, {
            weekday: 'long'
        })
        let date = d.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
        let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(d)
        let time = d.toLocaleTimeString(locale, {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })
        let _uptime = process.uptime() * 1000
        let _muptime
        if (process.send) {
            process.send('uptime')
            _muptime = await new Promise(resolve => {
                process.once('message', resolve)
                setTimeout(resolve, 1000)
            }) * 1000
        }
        let muptime = clockString(_muptime)
        let uptime = clockString(_uptime)
        let ucap = ucapan()
        let module = package.module
        let totalreg = Object.keys(global.db.data.users).length
        let fkontak = {
            "key": {
                "participants": "0@s.whatsapp.net",
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": "Asyl Free UserBot"
            },
            "message": {
                "contactMessage": {
                    "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
            },
            "participant": "0@s.whatsapp.net"
        };
        let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
        let ppUrl = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/avatar_contact.png");
        let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
            return {
                help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
                tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
                prefix: 'customPrefix' in plugin,
                limit: plugin.limit,
                premium: plugin.premium,
                enabled: !plugin.disabled,
            }
        })
        if (teks == '404') {
            let capt = `Hello, @${m.sender.replace(/@.+/g, '')} 🪸\n`
            capt += `I am an automated system (WhatsApp Bot) that can help to do something, search and get data / information only through WhatsApp.\n\n`

            capt += ` –   *BOT INFORMATION*\n`
            capt += `┌  ◦ Database : Mongodb\n`
            capt += `│  ◦ Library : Baileys\n`
            capt += `└  ◦ Author : ${global.namebot}\n\n`
            capt += ` –   *BOT LIST MENU*\n`
            capt += `┌  ◦  ${_p + command} main\n`
            capt += `│  ◦  ${_p + command} info\n`
            capt += `│  ◦  ${_p + command} downloader\n`
            capt += `│  ◦  ${_p + command} ai\n`
            capt += `│  ◦  ${_p + command} premium\n`
            capt += `│  ◦  ${_p + command} game\n`
            capt += `│  ◦  ${_p + command} fun\n`
            capt += `│  ◦  ${_p + command} music\n`
            capt += `│  ◦  ${_p + command} group\n`
            capt += `│  ◦  ${_p + command} internet\n`
            capt += `│  ◦  ${_p + command} owner\n`
            capt += `│  ◦  ${_p + command} rpg\n`
            capt += `│  ◦  ${_p + command} maker\n`
            capt += `│  ◦  ${_p + command} sticker\n`
            capt += `│  ◦  ${_p + command} tools\n`
            capt += `│  ◦  ${_p + command} anime\n`
            capt += `│  ◦  ${_p + command} quotes\n`
            capt += `└  ◦  ${_p + command} convert\n`
            // Removed Rank canvas creation

            /* return conn.sendMessage(m.chat, {            
             document: fs.readFileSync("./package.json"),
             mimetype: "image/png",
             pageCount: 2024,
             fileName: `Selamat ${ucap} ${name}`,
             fileLength: 100000000000000,
             jpegThumbnail: await conn.resize(ppUrl, 100, 100), // Changed to use ppUrl directly
             caption: Styles(capt),
             contextInfo: {
             thumbnailUrl: "https://files.catbox.moe/a66gg1.jpg",
             renderLargerThumbnail: true,
             sourceUrl: "https://alfisyl.my.id"
             mentionedJid: [m.sender],      
             isForwarded: true,      
             businessMessageForwardInfo: { businessOwnerJid: '6288980870067@s.whatsapp.net' }, 
             forwardedNewsletterMessageInfo: {
             newsletterJid: '120363144038483540@newsletter',
             newsletterName: 'Asyl UserBot',
             serverMessageId: -1
             },      
             forwardingScore: 2023,      
             }}, { quoted: fkontak }) */

            return conn.sendMessage(m.chat, {
                document: fs.readFileSync("./package.json"),
                fileName: `Selamat ${ucap} ${name}`,
                mimetype: "image/png",
                fileLength: 100000000000000,
                pageCount: 2024,
                jpegThumbnail: await conn.resize(ppUrl, 100, 100), // Changed to use ppUrl directly
                caption: Styles(capt),
                contextInfo: {
                    isForwarded: true,
                    forwardingScore: 99999,
                    externalAdReply: {
                        showAdAttribution: true,
                        title: ``,
                        mediaType: 1,
                        previewType: 1,
                        body: "I Am An Automated System WhatsApp Bot That Can Help To Do Something, Search And Get Data / Information Only Through WhatsApp.",
                        thumbnailUrl: "https://files.catbox.moe/a66gg1.jpg",
                        renderLargerThumbnail: true,
                        sourceUrl: "https://alfisyl.my.id"
                    },
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363144038483540@newsletter',
                        serverMessageId: -1,
                        newsletterName: 'Asyl UserBot',
                    }
                }
            }, {
                quoted: fkontak
            })
        }
        let groups = {}
        for (let tag in tags) {
            groups[tag] = []
            for (let plugin of help)
                if (plugin.tags && plugin.tags.includes(tag))
                    if (plugin.help) groups[tag].push(plugin)
            // for (let tag of plugin.tags)
            //   if (!(tag in tags)) tags[tag] = tag
        }
        conn.menu = conn.menu ? conn.menu : {}
        let before = conn.menu.before || defaultMenu.before
        let header = conn.menu.header || defaultMenu.header
        let body = conn.menu.body || defaultMenu.body
        let footer = conn.menu.footer || defaultMenu.footer
        let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
        let _text = [
            before,
            ...Object.keys(tags).map(tag => {
                return header.replace(/%category/g, tags[tag]) + '\n' + [
                    ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
                        return menu.help.map(help => {
                            return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                                .trim()
                        }).join('\n')
                    }),
                    footer
                ].join('\n')
            }),
            after
        ].join('\n')
        text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
        let replace = {
            '%': '%',
            p: _p,
            uptime,
            muptime,
            me: conn.user.name,
            npmname: package.name,
            npmdesc: package.description,
            version: package.version,
            github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
            limit,
            name,
            weton,
            week,
            date,
            dateIslamic,
            time,
            module,
            totalreg,
            rtotalreg,
            role,
            readmore: readMore
        }
        text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
        await conn.reply(m.chat, Styles(text).trim(), m)
    } catch (e) {
        conn.reply(m.chat, 'Maaf, menu sedang error', m)
        throw e
    }
}

handler.help = ['help']
handler.tags = ['main']
handler.command = /^(menu|help|menunya)$/i

handler.register = false;
handler.limit = true;
handler.register = true

module.exports = handler;

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH');
    let res = "malam";
    if (time >= 4) {
        res = "pagi";
    }
    if (time > 10) {
        res = "siang";
    }
    if (time >= 15) {
        res = "sore";
    }
    if (time >= 18) {
        res = "malam";
    }
    return res;
}