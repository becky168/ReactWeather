var express = require("express");
const PORT = process.env.PORT || 3000;

// Create our app
var app = express();

// openweather only accept http request
// app.use(function (req, res, next) {
//     if (req.headers["x-forwarded-proto"] === "http") {
//         next();
//     } else { // https
//         console.log("http://" + req.hostname + ":" + PORT + req.url)
//         res.redirect("http://" + req.hostname + ":" + PORT + req.url);
//     }
// });

app.use(express.static("public"));

app.listen(PORT, function () {
     console.log("Express server is up on port " + PORT)
});