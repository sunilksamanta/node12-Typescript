import express from 'express';

import {User} from './user';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const user = new User({id: 1, name: 'Sunil Samanta'})
    res.send('Welcome' + JSON.stringify(user.getUser()));
});


app.listen(port).once("listening", () => {
    console.log("Server started on PORT", port);
})