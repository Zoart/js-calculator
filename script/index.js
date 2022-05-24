let clear_all = document.querySelector('.btn__CE');
let input = document.querySelector('.input');
let btn = document.getElementsByClassName('buttons__el');
let history = document.querySelector('.history');
let clear_input = document.querySelector('.btn__C');
let equals = document.querySelector('.btn__equals');

let plus = document.querySelector('.btn__plus');
let minus = document.querySelector('.btn__minus');

// Clear input
clear_input.addEventListener('click', () =>
{
  input.value = '';
});

// Clear all
clear_all.addEventListener('click', () =>
{
  input.value = '';
  history.textContent = '';
});

// Add listener on numbers
for(let i = 0; i < 10; i ++)
{
    let btn = document.querySelector('.btn__' + i);
    btn.addEventListener('click', () => 
    {
      input.value += btn.textContent;
    });
  
}

// btn minus
minus.addEventListener('click', ()=>{
  if (history.textContent == '')
  {
    history.textContent += input.value + '-';
    input.value = '';
  }
  else if (history.textContent.slice(0, -1) == input.value)
  {
    let operator_char = history.textContent.charAt(history.textContent.length - 1);
    history.textContent = history.textContent.replace(operator_char, '-');
  }
  else
  {
    calculete();
  }
})

// btn plus
plus.addEventListener('click', ()=>{
  if (history.textContent == '')
  {
    history.textContent += input.value + '+';
    input.value = '';
  }
  else if (history.textContent.slice(0, -1) == input.value)
  {
    let operator_char = history.textContent.charAt(history.textContent.length - 1);
    history.textContent = history.textContent.replace(operator_char, '+');
  }
  else
  {
    calculete();
  }
})

// btn equals
equals.addEventListener('click', ()=>{
  if (history.textContent !== '' || input.value !== '')
  {
    let num1 = parseInt(input.value);
    let num2 = history.textContent.slice(0, -1);
    // get operator index
    let operator_index = history.textContent.length - 1
    let operator = history.textContent.charAt(operator_index);
    if (operator == '+')
    {
      input.value = calculete();
    }
    else if (operator == '-')
    {
      input.value = calculete();
    }
  }
})

function calculete() {
  let perform = history.textContent += input.value
  if (perform.includes('+'))
  {
    let operator = perform.indexOf('+');
    let num1 = perform.slice(0, operator);
    let num2 = perform.slice(operator + 1);
    input.value = '';
    let result = parseInt(num1) + parseInt(num2);
    history.textContent = result + '+';
    return result
  }
  else if (perform.includes('-'))
  {
    let operator = perform.indexOf('-');
    let num1 = perform.slice(0, operator);
    let num2 = perform.slice(operator + 1);
    input.value = '';
    let result = parseInt(num1) - parseInt(num2);
    history.textContent = result + '-';
    return result
  }
}



