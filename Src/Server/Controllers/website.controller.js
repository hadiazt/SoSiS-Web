const axios = require("axios");
const { User } = require("discord-info")
const { Database } = require('beta.db')
const db = new Database('./Src/Public/data.json')

exports.main = async (req, res) => {
    const result = []

    axios.get('https://raw.githubusercontent.com/hadiazt/SoSiS-v2/main/data/love.json').then(res => {
        db.set("Data", res.data);
        const user = '806903080754872372'
        const ids = Object.keys(res.data)

        User({ UserID: user, BotToken: 'ODE5ODgzMDc4OTM0NTkzNTQ2.YEtFng.jQWSdZj0H-PiRc4QyDV_NouVHNE' }).then((user) => {
            ids.forEach(id => {
                if (id.startsWith(user.id)) {
                    const target = id.split(".").slice("")[1];

                    User({ UserID: target, BotToken: 'ODE5ODgzMDc4OTM0NTkzNTQ2.YEtFng.jQWSdZj0H-PiRc4QyDV_NouVHNE' }).then((response) => {
                        result.push({ user: user.tag, target: response.tag, num: db.objectFetch("Data", `${user.id}.${response.id}`) })
                    })
                }
            })
        })
    })

    setTimeout(() => {
        res.render("../Pages/index.ejs", {
            result,
        });
    }, 6000);

};

