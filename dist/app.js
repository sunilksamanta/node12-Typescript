"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("./user");
const app = express_1.default();
const port = 3000;
app.get('/', (req, res) => {
    const user = new user_1.User({ id: 1, name: 'Sunil Samanta' });
    res.send('Welcome' + JSON.stringify(user.getUser()));
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Server listening on PORT: ${port}`);
});
//# sourceMappingURL=app.js.map