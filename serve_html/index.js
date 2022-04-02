const port = 3000,
    homeController = require("./controllers/home_controller"),
    express = require("express"),
    app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/home", homeController.sendReqParam);
app.get("/images/:picture", homeController.respondWithImage);
app.get("/style", homeController.sendReqCss);

app.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
});

app.listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
})