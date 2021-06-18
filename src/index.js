import { 
    createRecordingFormUser,
    getRecordingFormUser,
    tableFormUser
} from './api/api-handlers.js';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import './styles/formStyles.scss';

const firstName = document.getElementById('firstName');
const emailUser = document.getElementById('emailUser');
const hobbyUser = document.getElementById('hobbyUser');
const jobUser = document.getElementById('jobUser');
const formForUser = document.getElementById('formForUser');
const getRecordBtn = document.getElementById('getRecordBtn');

const formUser = {
    firstName: null,
    emailUser: null,
    hobbyUser: null,
    jobUser: null,
    userId: uuidv4(),
    date: moment().format()
};

formForUser.addEventListener('submit', event => {
    event.preventDefault();
    formUser.firstName = firstName.value;
    formUser.emailUser = emailUser.value;
    formUser.hobbyUser = hobbyUser.value;
    formUser.jobUser = jobUser.value;
    createRecordingFormUser(formUser);
    firstName.value = null;
    emailUser.value = null;
    hobbyUser.value = null;
    jobUser.value = null;
});

const getCapShapeInTable = () => {
    const trCapShapeInTable = document.createElement('tr');
    const thfirstName = document.createElement('th');
    const thEmail = document.createElement('th');
    const thHobbyUser = document.createElement('th');
    const thJobUser = document.createElement('th');
    const thUserId = document.createElement('th');
    const thDate = document.createElement('th');

    trCapShapeInTable.innerHTML = '';
    thfirstName.innerHTML = 'Firstname user:';
    thEmail.innerHTML = 'Email user:';
    thHobbyUser.innerHTML = 'Hobby user:';
    thJobUser.innerHTML = 'Job user:';
    thUserId.innerHTML = 'User Id:';
    thDate.innerHTML = 'Date of creation';

    tableFormUser.append(trCapShapeInTable);
    trCapShapeInTable.append(thfirstName);
    trCapShapeInTable.append(thEmail);
    trCapShapeInTable.append(thHobbyUser);
    trCapShapeInTable.append(thJobUser);
    trCapShapeInTable.append(thUserId);
    trCapShapeInTable.append(thDate);
};

getRecordBtn.onclick = () => {
    getRecordingFormUser();
    tableFormUser.innerHTML = null;
    getCapShapeInTable();
};
