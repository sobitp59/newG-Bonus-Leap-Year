let input = document.getElementById('input-value');
let btn = document.getElementById('check-button');
let output = document.getElementById('output-answer');

btn.addEventListener('click', ()=>{
    number = Number(input.value)
    checkLeapYear(number)
})

let checkLeapYear = (number) => {

    if(number === '' || number === 0 || number < 0){
        output.textContent = `please enter correct year`
    }else if ((number % 400 == 0) || (number % 4 == 0) && (number % 100 != 0)){
        output.textContent = `${number} is a leap year`
    }else{
        output.textContent = `${number} is not a leap year`
    }
}