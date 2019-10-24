interface UserModel {
    id: number;
    name: string;
}
export class User {
    private id: number;
    private name: string;

    constructor(data: UserModel) {
        this.id = data.id;
        this.name = data.name;
    }

    getUser() {
        return {id: this.id, name: this.name}
    }
}