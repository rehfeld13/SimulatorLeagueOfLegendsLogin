// PARTE DOS INPUTS

// CRIA UM ARRAY PARA JUNTAR OS 2 INPUTS
const inputs = document.querySelectorAll('.input')
// SELECIONA A CLASSE BUTTON
const button = document.querySelector('.login_button')

// CRIA A FUNÇÃO PARA ADICIONAR A CLASSE ACTIVE AO SPAN
const handleFocus = ({ target }) => {
  const span = target.previousElementSibling
  span.classList.add('span-active')
}

// CRIA A FUNÇÃO PARA REMOVER A CLASSE ACTIVE AO SPAN
const handleFocusOut = ({ target }) => {
  if (target.value === '') {
    const span = target.previousElementSibling
    span.classList.remove('span-active')
  }
}

// CRIA A FUNÇÃO PARA REMOVER E ADICIONAR O DISABLED AO BUTTON
const handleChange = () => {
  const [username, password] = inputs

  if (username.value && password.value.length >= 8) {
    button.removeAttribute('disabled')
  } else {
    button.setAttribute('disabled', 'disabled')
  }
}

// SEMPRE QUE TER FOCUS ADICIONA A FUNÇAO
inputs.forEach(input => input.addEventListener('focus', handleFocus))
// REMOVE O FOCUS
inputs.forEach(input => input.addEventListener('focusout', handleFocusOut))
//SEMPRE CLICAR NO INPUT ELE CONFERE
inputs.forEach(input => input.addEventListener('input', handleChange))
