const databaseURL = 'https://newtest-288b7-default-rtdb.firebaseio.com';

class User {

    constructor(firstName, lastName, age, specialty) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.specialty = specialty;
    };
};

const userOne = new User('Sasha', 'Ivanov', 32, 'Сonstruction engineer');
const userTwo = new User('Petya', 'Sidorov', 22, 'Developer engineer');
const userThree = new User('Sveta', 'Petrova', 42, 'Physician therapist');
const userFour = new User('Lena', 'Golovach', 27, 'Cook');
const userFive = new User('Vasya', 'Kolochov', 30, 'Mathematic teacher');

const createUser = ({ firstName, lastName, age, specialty }) => {
    fetch(
        `${databaseURL}/users.json`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                age,
                specialty,
            }) 
        }
    )
    .then(response => response.json())
    .then(result => console.log(result)); 
};

const getUsers = () => {
    fetch(
        `${databaseURL}/users.json`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }
    )
    .then(response => response.json())
    .then(result => {
        const transformedUserArr = Object.keys(result).map( key => ({
            ...result[key],
            id: key
        }));
        console.log(transformedUserArr);
    });
};

const executeCode = async() => {
    await createUser(userOne);
    await createUser(userTwo);
    await createUser(userThree);
    await createUser(userFour);
    await createUser(userFive);
    getUsers();
}

executeCode();