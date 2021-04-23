class Worker_three {

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

    set rate(value) {
        this.#rate = value;
    }

    get days() {
        return this.#days;
    }

    set days(value2) {
        
        if (typeof value2 === 'number') {
            this.#days = value2;
        } else (this.#days = 'ERROR!!!')
    }

    constructor(){
    }

    getSalary() {
        return this.rate * this.days;
    }
}

const worker_three_1 = new Worker_three ();
worker_three_1.days = 'hhhhhh';
console.log(worker_three_1.days);
