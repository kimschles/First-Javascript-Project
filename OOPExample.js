class Greeting {
    constructor(name) {
        this.name = name
    };
    sayHello(name) {
        switch (this.name) {
            case 'Kim':
                return 'Hello Boss'
                break;
            case 'Nina':
                return 'Hello Boss'
                break;
            default:
                return 'Hi there'
                break;
        }
    }
};

const greet = new Greeting('Jamie');
console.log(greet.sayHello());