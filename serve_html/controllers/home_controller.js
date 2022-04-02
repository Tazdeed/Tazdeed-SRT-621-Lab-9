exports.sendReqParam = (req, res) => {
    res.render("home");
};
exports.respondWithImage = (req, res) => {
    let picture = req.params.picture;
    res.render(picture);
};

exports.sendReqCss = (req, res) => {
    res.sendFile(`./public/css/style.css`, {root: "./"})
};