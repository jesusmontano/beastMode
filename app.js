const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const exercises = require("./routes/api/exercises");
const path = require('path');
const workouts = require("./routes/api/workouts");
const User = require('./models/User');
const bodyParser = require("body-parser");

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
app.get("/", (req, res) => {
    const user = new User({
        username: "jim",
        email: "jim@im.jim",
        password: "jimisgreat123"
    })
    user.save() 
    res.sendFile(path.join(__dirname, 'frontend/public/index.html'));
});

app.use("/api/users", users);
app.use("/api/exercises", exercises);
app.use("/api/workouts", workouts);
app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Server is running on port ${port}`)});