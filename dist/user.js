"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
    }
    getUser() {
        return { id: this.id, name: this.name };
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map