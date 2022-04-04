const axios = require("axios");
const { User } = require("discord-info")
const { Database } = require('beta.db');
const db = new Database('./Src/Public/data.json')
require('dotenv').config({ path: './Src/Server/config.env' });

exports.index = async (req, res) => {

    res.render("../Pages/index.ejs", {
        title: "SoSiS - Imagine a bot",
        icon: "https://cdn.discordapp.com/avatars/762378493929455617/f3cac0f6d38cd184ac25005df8711753.png?size=2048",
        support: "https://discord.gg/6vhPVYkNU9",
        pages: [
            'home',
            'sosis',
            'love',
            'security',
            'downloader',
            'contributors',
        ]
    });

};

exports.love = async (req, res) => {
    const result = []

    const user = req.query.user

    if (user) {
        axios.get('https://raw.githubusercontent.com/hadiazt/SoSiS-v2/main/data/love.json').then(res => {
            db.set("Data", res.data);
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
                support: "https://discord.gg/6vhPVYkNU9",
                user,
                result,
                pages: [
                    'home',
                    'sosis',
                    'love',
                    'security',
                    'downloader',
                    'contributors',
                ]
            });
        }, 6000);
    } else {
        res.render("../Pages/love.ejs", {
            title: 'SoSiS - Love DataBase',
            icon: "https://cdn.discordapp.com/avatars/762378493929455617/f3cac0f6d38cd184ac25005df8711753.png?size=2048",
            support: "https://discord.gg/6vhPVYkNU9",
            user,
            pages: [
                'home',
                'sosis',
                'love',
                'security',
                'downloader',
                'contributors',
            ]
        });
    }
};

exports.sosis = async (req, res) => {
    User({ UserID: '762378493929455617', BotToken: process.env.BotToken }).then((user) => {
        res.render("../Pages/bot.ejs", {
            title: `SoSiS - ${user.username} Bot`,
            icon: "https://cdn.discordapp.com/avatars/762378493929455617/f3cac0f6d38cd184ac25005df8711753.png?size=2048",
            support: "https://discord.gg/6vhPVYkNU9",
            bot: {
                name: user.username,
                img: user.avatar.png,
                inv: 'https://discord.com/api/oauth2/authorize?client_id=762378493929455617&permissions=137439861953&scope=bot%20applications.commands',
                src: 'https://github.com/hadiazt/SoSiS-v2',
                des: 'is a fun robot Developted for your entertainment.This robot is a multi-purpose robot Part of the work of this robot: Gif Commands - NSFW Commands - download music from youtube - set funny effects on photos and all other features'
            },
            pages: [
                'home',
                'sosis',
                'love',
                'security',
                'downloader',
                'contributors',
            ],
            commands: [
                { name: 'afk', des: 'Set Your Self As AFK' },
                { name: 'dn', des: 'Download MP3 From YouTube' },
                { name: 'effect', des: 'Set Effect To Image' },
                { name: 'game', des: 'Starts An Game From Truth Or Dare' },
                { name: 'gif', des: 'Sends A Random GiF In Selected Category' },
                { name: 'love', des: 'Calculats Your Love To Mentioned User' },
                { name: 'nsfw', des: 'Sends A Random NSFW Content In Selected Category' },
                { name: 'profile', des: 'Sends A Random Profile In Selected Category' },
            ],
            path: req.path
        });
    })
};

exports.security = async (req, res) => {
    User({ UserID: '780703694886010902', BotToken: process.env.BotToken }).then((user) => {
        res.render("../Pages/bot.ejs", {
            title: `SoSiS - ${user.username} Bot`,
            icon: "https://cdn.discordapp.com/avatars/762378493929455617/f3cac0f6d38cd184ac25005df8711753.png?size=2048",
            support: "https://discord.gg/6vhPVYkNU9",
            bot: {
                name: user.username,
                img: user.avatar.png,
                inv: 'https://discord.com/api/oauth2/authorize?client_id=780703694886010902&permissions=8&scope=bot%20applications.commands',
                src: 'https://github.com/hadiazt/SoSiS-SEC',
                des: 'Protect your server from Raids, Nuke and . . . with multi-purpose Discord Security Bot'
            },
            pages: [
                'home',
                'sosis',
                'love',
                'security',
                'downloader',
                'contributors',
            ],
            commands: [
                { name: 'actionlog', des: 'Set Server Aciton Log' },
                { name: 'addtrusted', des: 'Set Guild WhiteList' },
                { name: 'anti', des: 'Set Guild Anti Raid Config' },
                { name: 'joingate', des: 'Set Guild Join Gate Config' },
                { name: 'removetrusted', des: 'Remove Guild WhiteList' },
                { name: 'set', des: 'Set Guild Limitation Config' },
                { name: 'show', des: 'Show The List Of Limits & Configs' },
                { name: 'trustedlist', des: 'Show The List Of WhiteList Users' },
            ],
            path: req.path
        });
    })
};

exports.downloader = async (req, res) => {

    User({ UserID: '768503531526291499', BotToken: process.env.BotToken }).then((user) => {
        res.render("../Pages/bot.ejs", {
            title: `SoSiS - ${user.username} Bot`,
            icon: "https://cdn.discordapp.com/avatars/762378493929455617/f3cac0f6d38cd184ac25005df8711753.png?size=2048",
            support: "https://discord.gg/6vhPVYkNU9",
            bot: {
                name: user.username,
                img: user.avatar.png,
                inv: 'https://discord.com/api/oauth2/authorize?client_id=768503531526291499&permissions=412317240385&scope=applications.commands%20bot',
                src: 'https://github.com/hadiazt/SoSiS-Downloader',
                des: 'is the most complete bot in the field of downloaders that can provide you with anything you can think of in discord environment.'
            },
            pages: [
                'home',
                'sosis',
                'love',
                'security',
                'downloader',
                'contributors',
            ],
            commands: [
                { name: 'consolegame', des: 'Search Your Entry On Console Category' },
                { name: 'movie', des: 'Search Your Entry On Movie Category' },
                { name: 'pcgame', des: 'Search Your Entry On PC Category' },
                { name: 'song', des: 'Search Your Entry On Songs Category' },
                { name: 'tv', des: 'Search Your Entry On TV Category' },
            ],
            path: req.path
        });
    })

};

exports.contributors = async(req, res) => {

};
