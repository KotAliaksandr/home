import '../style/style.scss'
import {toDoArr, inp, butt, ul} from './glob_var'

inp.innerHTML = '';
document.body.append(inp);
butt.innerHTML = 'Add';
document.body.append(butt);

butt.onclick = () => {
    const li = document.createElement('li');
    const butt_one = document.createElement('button');
    
    butt_one.innerHTML = 'Del';
    toDoArr.push(inp.value);
    
    toDoArr.forEach( (_it, i) => {
        li.innerHTML = toDoArr[i];
    });

    ul.prepend(li);
    li.append(butt_one);
    document.body.append(ul);
        
    butt_one.onclick = () => {
        li.remove();
    };
    inp.value = '';
}
