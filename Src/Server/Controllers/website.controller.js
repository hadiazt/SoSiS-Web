const axios = require("axios");
const { User } = require("discord-info")
const { Database } = require('beta.db')
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
        res.render("../Pages/sosis.ejs", {
            title: 'SoSiS - Main Bot',
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
                { name: 'a', des: 'a' },
                { name: 'a', des: 'a' },
                { name: 'a', des: 'a' },
                { name: 'a', des: 'a' },
                { name: 'a', des: 'a' },
                { name: 'a', des: 'a' },
                { name: 'a', des: 'a' },
            ]
        });
    })

};

exports.security = async (req, res) => {

    User({ UserID: '762378493929455617', BotToken: process.env.BotToken }).then((user) => {
        res.render("../Pages/sosis.ejs", {
            title: 'SoSiS - Main Bot',
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
                { name: 'a', des: 'a' },
                { name: 'a', des: 'a' },
                { name: 'a', des: 'a' },
                { name: 'a', des: 'a' },
                { name: 'a', des: 'a' },
                { name: 'a', des: 'a' },
                { name: 'a', des: 'a' },
            ]
        });
    })

};

exports.downloader = async (req, res) => {

    User({ UserID: '762378493929455617', BotToken: process.env.BotToken }).then((user) => {
        res.render("../Pages/sosis.ejs", {
            title: 'SoSiS - Main Bot',
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
                { name: 'a', des: 'a' },
                { name: 'a', des: 'a' },
                { name: 'a', des: 'a' },
                { name: 'a', des: 'a' },
                { name: 'a', des: 'a' },
                { name: 'a', des: 'a' },
                { name: 'a', des: 'a' },
            ]
        });
    })

};

