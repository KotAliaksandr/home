import '../style/style.scss';

let todos;

const trueAdd = document.getElementById('trueAdd')
const complAdd = document.getElementById('complAdd');
const ul_true = document.createElement('ul');
trueAdd.append(ul_true);

const falseAdd = document.getElementById('falseAdd');
const incomplAdd = document.getElementById('incomplAdd');
const ul_false = document.createElement('ul');
falseAdd.append(ul_false);

const block = document.getElementById('block');
const ul = document.createElement('ul');
block.append(ul);

const renderItems = () => {
     
    todos.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = item.title;
        ul.prepend(li);
    });
}

complAdd.onclick = () => {

    todos.forEach(item => {
        if (item.completed == true) {
            const li = document.createElement('li');
            li.innerHTML = item.title;
            ul_true.prepend(li);
            li.onclick = () => {
                li.remove();
            }
        }
    });
}

incomplAdd.onclick = () => {

    todos.forEach(item => {
        if (item.completed == false) {
            const li = document.createElement('li');
            li.innerHTML = item.title;
            ul_false.prepend(li);

            li.onclick = () => {
                li.remove();
            }
        }
    });
}


const fetchTodos = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => todos = json);
}

const getTodos = async () => {
    await fetchTodos();
    renderItems();
    console.log(todos);
}

getTodos();
