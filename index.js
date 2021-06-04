class Human {

    #name;
    #surname;
    #age;

    constructor(name, surname, age) {

        this.#name = name;
        this.#surname = surname;
        this.#age = age;
    };
    
    getFullName() {
        return Human.fullname = `${this.#surname} ${this.#name}`;
    };
};

const human = new Human('Sasha', 'Kot', 30);

console.log(human.getFullName());
console.log(human);

class Worker extends Human {

    #days;
    #rate;

    constructor(name, surname, age, rate, days){

        super(name, surname, age);
        this.#days = days;
        this.#rate = rate;
    };

    getSalary() {
        return this.#days * this.#rate;
    };
};

const worker = new Worker('Sasha', 'Kot', 30, 20, 50);

console.log(worker);
console.log(worker.getFullName());
console.log(worker.getSalary());

class Developer extends Worker {

    // #sphere;
    // #company;
    // #salary;

    constructor(name, surname, age, rate, 
                days, sphere, company, salary) {
            
        super(name, surname, age, rate, days);
        this.#sphere = sphere;
        this.#company = company;
        this.#salary = salary = this.getSalary();
    };

    getSalary() {
        return super.getSalary() * 2;
    };
};

const developer = new Developer('Sasha', 'Kot', 30, 20, 50, 'Frontend', 'Brymonsoft');
developer.salary = 5000;
console.log(developer);
console.log(developer.getSalary());

class Designer extends Developer {

    #platform;
    #environment;

    constructor(name, surname, age, rate, days, salary,
                sphere, company, platform, environment) {
            
        super(name, surname, age, rate, days, sphere, company, salary);
        this.#platform = platform;
        this.#environment = environment;
    };
};

const designer = new Designer('Sasha', 'Kot', 30, 20, 50, 'Frontend', 'Brymonsoft', 'Photoshop', 'Web');

console.log(designer);
console.log(designer.getFullName());
console.log(designer .getSalary());
