class Worker {
    constructor(name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days
    }
}

const worker_1 = new Worker ('Vasya', 'Petrov', 45, 25);

// console.log(worker_1.name);
// console.log(worker_1.surname);
// console.log(worker_1.rate);
// console.log(worker_1.days);
console.log(worker_1.getSalary());
