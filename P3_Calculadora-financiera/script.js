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
