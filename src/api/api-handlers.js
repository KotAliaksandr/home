import { databaseURL } from './api-config.js';

export const tableFormUser = document.getElementById('tableFormUser');

const headers = {
    'Content-Type': 'application/json'
};

export const createRecordingFormUser = formUser => {
    const { userId, firstName, emailUser, date, hobbyUser, jobUser } = formUser;
    fetch(`${databaseURL}/formUser.json`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            firstName,
            emailUser,
            hobbyUser,
            jobUser,
            userId,
            date
        })
    });
};

export const getRecordingFormUser = () => {
    fetch(`${databaseURL}/formUser.json`, {
        method: 'GET',
        headers
    })
    .then(response => response.json())
    .then(result => {
        const arrFormsUser = Object.keys(result).map(key => ({
            ...result[key],
            id: key
        }));
        arrFormsUser.forEach(item => {

            const trUser = document.createElement('tr');
            const thfirstName = document.createElement('th');
            const thEmail = document.createElement('th');
            const thHobbyUser = document.createElement('th');
            const thJobUser = document.createElement('th');
            const thUserId = document.createElement('th');
            const thDate = document.createElement('th');
    
            trUser.innerHTML = '';
            thfirstName.innerHTML = item.firstName;
            thEmail.innerHTML = item.emailUser;
            thHobbyUser.innerHTML = item.hobbyUser;
            thJobUser.innerHTML = item.jobUser;
            thUserId.innerHTML = item.userId;
            thDate.innerHTML = item.date;
    
            tableFormUser.append(trUser);
            trUser.append(thfirstName);
            trUser.append(thEmail);
            trUser.append(thHobbyUser);
            trUser.append(thJobUser);
            trUser.append(thUserId);
            trUser.append(thDate);
        });
    });
};
