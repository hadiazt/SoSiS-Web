const { Router } = require("express");
const router = new Router();

router.get("/", (req, res) => {
    res.render("index", {
        icon: "https://cdn.discordapp.com/avatars/762378493929455617/f3cac0f6d38cd184ac25005df8711753.png?size=2048",
        pageTitle: "SoSiS - Imagine a bot",
        layout: "./"
    });
});


module.exports = router;