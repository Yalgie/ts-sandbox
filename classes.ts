interface UserInterface {
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}

class User implements UserInterface {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log(`User Created: ${this.name}`);
    }

    register() {
        console.log(`${this.name} is now registered`);
    }

    payInvoice() {
        console.log(`Pay Invoice ${this.name}`)
    }
}

class Member extends User {
    id: number;

    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age);

        this.id = id;
    }

    payInvoice() {
        super.payInvoice();
    }
}

var john = new User('John', 'john@email.com', 21);
var mike: User = new Member(1, 'Mike', 'mike@email.com', 22);

john.register();
mike.payInvoice();