const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calc__keys');

keys.addEventListener('click', e => {
    if(e.target.matches('button')) {
        //Do something
    }
})

const key = e.target;
const action = key.dataset.action;

if(!action) {
    console.log("number key!");
}

if (
    action === 'add' ||
    action === 'substract' ||
    action === 'multiply' ||
    action === 'divide'
) {
    console.log('operator key!')
}

if(action === 'decimal') {
    console.log("decimal key!");
}

if(action === 'clear') {
    console.log("clear key!");
}
if(action === 'calculate') {
    console.log("equal key!");
}


/*

const display = document.querySelector(".calculator___display");

keys.addEventListener('click', e =>{
    if(e.target.matches('button')) {
        const action = key.dataset.action
        const keycontent = key.textContent
        const displayedNum = display.textContent
    }
})
*/