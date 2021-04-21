const user_1 = {
    name: 'Petya',
};

const user_2 = {
    name: 'Juliya',
};

const users = [
    user_1,
    user_2
];

function propertyValue(users) {
    const arrMeaning = users.map(item => item.name)
    
    console.log(arrMeaning);
};

propertyValue(users)