const screen = document.getElementById('screen');

function number_one(nam) {
    screen.innerHTML = screen.innerHTML + nam;
}

function delete_all() {
    screen.innerHTML = '';
}

function delete_number() {
    let view =  screen.innerHTML;
    screen.innerHTML = view.substring(0, view.length - 1); 
}

function equality() {
    let view =  screen.innerHTML;
    if (view) {
        screen.innerHTML = eval(view);
    }
}
