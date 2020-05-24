let increment = document.querySelector('.increase');
let decrement = document.querySelector('.decrease');
let reset = document.querySelector('.reset');
let counter = document.querySelector('.counter');

let index = 0;

increment.addEventListener('click', function(){
    index++;
    counter.textContent = index;
    if (index >= 0 && index <= 50) {
        counter.style.color = 'black';
    }else if (index > 50 && index < 100) {
        counter.style.color = 'indigo';
    } else if (index >= 100 && index <= 150) {
        counter.style.color = 'green';
    } else if ( index >= 150 && index < 200 ) {
        counter.style.color = 'darkgreen';
    } else if ( index >= 200) {
        counter.style.color = 'black';
    }
})

decrement.addEventListener('click', function(){
    counter.textContent = --index;
    if(index <= -1) {
        counter.style.color = 'red';
    }else if (index < 50 && index >= 0) {
        counter.style.color = 'black';
    } else if (index < 100 && index >= 50) {
        counter.style.color = 'indigo'
    } else if ( index < 150 && index >= 100) {
        counter.style.color = 'green';
    } else if ( index >= 151) {
        counter.style.color = 'darkgreen';
    } else {
        counter.style.color = 'darkgreen';
    }
})


reset.addEventListener('click', function(){
    index = 0;
    counter.textContent = 0;
    counter.style.color = 'black';
})

