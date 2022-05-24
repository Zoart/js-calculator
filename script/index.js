let clear_all = document.querySelector('.btn__CE');
let input = document.querySelector('.input');
let btn = document.getElementsByClassName('buttons__el');
let history = document.querySelector('.history');
let clear_input = document.querySelector('.btn__C');

let plus = document.querySelector('.btn__plus');

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

plus.addEventListener('click', ()=>{
  if (history.textContent == '')
  {
    history.textContent += input.value + '+';
    input.value = '';
  }
  else
  {
    calculete();
  }
  
})

function calculete() {
  let perform = history.textContent += input.value
  if (perform.includes('+'))
  {
    let operator = perform.indexOf('+');
    num1 = perform.slice(0, operator);
    num2 = perform.slice(operator + 1);
    input.value = '';
    history.textContent = parseInt(num1) + parseInt(num2);
  }
}



