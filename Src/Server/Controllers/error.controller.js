exports.get404 = async (req, res) => {
    return res.render("../Pages/error.ejs", {
        title: "SoSiS - Page Not Found",
        icon: "https://cdn.discordapp.com/avatars/762378493929455617/f3cac0f6d38cd184ac25005df8711753.png?size=2048",
        pages: [
            '/',
            '/love',
            '/sosis',
            '/security',
            '/downloader',
            '/contributors'
        ]
    });
};