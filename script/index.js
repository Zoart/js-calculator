let clear_all = document.querySelector('.btn__CE');
let input = document.querySelector('.input');
let btn = document.getElementsByClassName('buttons__el');
let history = document.querySelector('.history');
let clear_input = document.querySelector('.btn__C');
let equals = document.querySelector('.btn__equals');

let plus = document.querySelector('.btn__plus');
let minus = document.querySelector('.btn__minus');
let del = document.querySelector('.btn__del');
let sign = document.querySelector('.btn__sign');
let period = document.querySelector('.btn__period');

// Period
period.addEventListener('click', () => {
  if (input.value !== '-', '+', '*', '/' 
  && !input.value.includes('.'))
  {
    input.value += period.textContent;
  }
});

// Sign
sign.addEventListener('click', () => {
  if(input.value.includes('-'))
  {
    input.value = input.value.replace('-', '');
  }
  else
  {
    input.value = '-' + input.value;
  }
});

// clear input
clear_all.addEventListener('click', () =>
{
  input.value = '0';
});

// Clear all
clear_input.addEventListener('click', () =>
{
  input.value = '0';
  history.textContent = '';
});

// Add listener on numbers
for(let i = 0; i < 10; i ++)
{
    let btn = document.querySelector('.btn__' + i);
    btn.addEventListener('click', () => 
    {
       
      if (history.textContent == '' || !history.textContent.includes('='))
      {
          if(input.value == '0' || input.value == history.textContent.slice(0, -1))
        {
          input.value = btn.textContent;
        }
        else
        {
          input.value += btn.textContent;
        }
      }
      else if (history.textContent.includes('='))
      {
        input.value = btn.textContent;
        history.textContent = ''
      }
      
    });
  
}

// Del
del.addEventListener('click', () => {
  input.value = input.value.slice(0,-1);
  if (input.value == '')
  {
    input.value = 0;
  }
})

// btn minus
minus.addEventListener('click', ()=>
{
  if (input.value == '0')
  {
    input.value = '0';
  }
  else if (history.textContent == '' && input.value !== '0' && input.value !== '-')
  {
    history.textContent += input.value + '-';
    input.value = '0';
  }
  else if ((input.value == '0' || '-') && (history.textContent == ''))
  {
    input.value = minus.textContent;
  }
  else if (history.textContent.slice(0, -1) == input.value)
  {
    let operator_char = history.textContent.charAt(history.textContent.length - 1);
    history.textContent = history.textContent.replace(operator_char, '-');
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
plus.addEventListener('click', ()=>
{
  if (input.value == '0')
  {
    input.value = '0';
  }
  else if (history.textContent == '' && input.value !== '0' && input.value !== '-')
  {
    history.textContent += input.value + '+';
    input.value = '0';
  }
  else if ((input.value == '0' || '-') && (history.textContent == ''))
  {
    input.value = '0';
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
  if (history.textContent !== '' || input.value !== '0')
  {
    // get operator index
    let operator_index = history.textContent.length - 1
    let operator = history.textContent.charAt(operator_index);
    if (operator == '+' || '-')
    {
      input.value = calculete_for_equals();
    }
  }
})

function calculete_for_equals()
{
  let perform = history.textContent += input.value
  if (perform.includes('+'))
  {
    let operator = perform.indexOf('+');
    let num1 = perform.slice(0, operator);
    if (num1.includes('.'))
    {
      num1 = parseFloat(num1);
    }
    else
    {
      num1 = parseInt(num1);
    }
    let num2 = perform.slice(operator + 1);
    if (num2.includes('.') && num1.includes('.'))
    {
      num2 = parseFloat(num2);
    }
    else
    {
      num2 = parseInt(num2);
    }
    let result = num1 + num2;
    input.value = result;
    history.textContent = num1 + '+' + num2 + '=';
    return result
  }
  else if (perform.includes('-'))
  {
    let operator = perform.indexOf('-');
    let num1 = perform.slice(0, operator);
    if (num1.includes('.'))
    {
      num1 = parseFloat(num1);
    }
    else
    {
      num1 = parseInt(num1);
    }
    let num2 = perform.slice(operator + 1);
    if (num2.includes('.') || num1.includes('.'))
    {
      num2 = parseFloat(num2);
    }
    else
    {
      num2 = parseInt(num2);
    }
    let result = num1 - num2;
    input.value = result;
    history.textContent = num1 + '-' + num2 + '=';
    return result
  }
}

function calculete() {
  let perform = history.textContent += input.value
  if (perform.includes('+'))
  {
    let operator = perform.indexOf('+');
    let num1 = perform.slice(0, operator);
    if (num1.includes('.'))
    {
      num1 = parseFloat(num1);
    }
    else
    {
      num1 = parseInt(num1);
    }
    let num2 = perform.slice(operator + 1);
    if (num2.includes('.') && num1.includes('.'))
    {
      num2 = parseFloat(num2);
    }
    else
    {
      num2 = parseInt(num2);
    }
    let result = num1 + num2;
    input.value = result;
    history.textContent = result + '+';
    return result
  }
  else if (perform.includes('-'))
  {
    let operator = perform.indexOf('-');
    let num1 = perform.slice(0, operator);
    if (num1.includes('.'))
    {
      num1 = parseFloat(num1);
    }
    else
    {
      num1 = parseInt(num1);
    }
    let num2 = perform.slice(operator + 1);
    if (num2.includes('.') || num1.includes('.'))
    {
      num2 = parseFloat(num2);
    }
    else
    {
      num2 = parseInt(num2);
    }
    let result = num1 - num2;
    input.value = result;
    history.textContent = result + '-';
    return result
  }
}

// keyboard buttons
document.addEventListener('keypress', (event) => {
  let keyName = event.key;
  if (numbers_allowed.includes(keyName))
  {
    input.value += keyName;
  }
  if (operators_allowed.includes(keyName))
  {
    keyName == 'Enter' ? keyName = '=' : keyName = keyName;

  }
    // alert(event.code);
  // let code = event.code;
})

  const numbers_allowed = ['0', '1', '2', '3', '4', '5', 
  '6', '7', '8', '9' ]
  const operators_allowed = ['+', '-', '=', '*', '/', 'Enter']




