const axios = require("axios");
const { User } = require("discord-info")
const { Database } = require('beta.db')
const db = new Database('./Src/Public/data.json')
require('dotenv').config({ path: './Src/Server/config.env' });


exports.index = async (req, res) => {
    const bots = []

    User({ UserID: '762378493929455617', BotToken: process.env.BotToken }).then((user) => { bots.push(user) })
    User({ UserID: '780703694886010902', BotToken: process.env.BotToken }).then((user) => { bots.push(user) })
    User({ UserID: '768503531526291499', BotToken: process.env.BotToken }).then((user) => { bots.push(user) })

    setTimeout(() => {
        res.render("../Pages/index.ejs", {
            title: "SoSiS - Imagine a bot",
            icon: "https://cdn.discordapp.com/avatars/762378493929455617/f3cac0f6d38cd184ac25005df8711753.png?size=2048",
            support: "https://discord.gg/6vhPVYkNU9",
            bots,
            pages: [
                {
                    name: 'Home',
                    url: '/'
                },
                {
                    name: 'SoSiS',
                    url: '/main'
                },
                {
                    name: 'Love DB',
                    url: '/love'
                },
                {
                    name: 'Security',
                    url: '/security'
                },
                {
                    name: 'Downloader',
                    url: '/downloader'
                },
                {
                    name: 'Contributors',
                    url: '/contributors'
                },
            ]
        });
    }, 6000);

};

exports.love = async (req, res) => {
    const result = []

    axios.get('https://raw.githubusercontent.com/hadiazt/SoSiS-v2/main/data/love.json').then(res => {
        db.set("Data", res.data);
        const user = '806903080754872372'
        const ids = Object.keys(res.data)

        User({ UserID: user, BotToken: process.env.BotToken }).then((user) => {
            ids.forEach(id => {
                if (id.startsWith(user.id)) {
                    const target = id.split(".").slice("")[1];

                    User({ UserID: target, BotToken: process.env.BotToken }).then((response) => {
                        result.push({
                            user: {
                                name: user.tag,
                                avatar: user.avatar.png
                            },
                            target: {
                                name: response.tag,
                                avatar: response.avatar.png
                            },
                            num: db.objectFetch("Data", `${user.id}.${response.id}`)
                        })
                    })
                }
            })
        })
    })

    setTimeout(() => {
        res.render("../Pages/love.ejs", {
            title: 'SoSiS - Love DataBase',
            icon: "https://cdn.discordapp.com/avatars/762378493929455617/f3cac0f6d38cd184ac25005df8711753.png?size=2048",
            result,
        });
    }, 6000);

};



