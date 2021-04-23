class Worker_two {

    #name = 'Vasya';
    #surname = 'Petrov';
    #rate = 45;
    #days = 25;


    get name() {
        return this.#name;
    }

    get surname() {
        return this.#surname;
    }

    get rate() {
        return this.#rate;
    }

    get days() {
        return this.#days;
    }

    constructor(){
    }

    getSalary() {
        return this.rate * this.days;
    }
}

const worker_two_1 = new Worker_two ();

console.log(worker_two_1.surname);
