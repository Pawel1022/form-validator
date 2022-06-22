const usernameInput = document.querySelector('.form__input--username');
const usernameError = document.querySelector('.form__error--username');

const passwordInput = document.querySelector('.form__input--password');
const passwordError = document.querySelector('.form__error--password');

const passwordRepeatInput = document.querySelector('.form__input--password-repeat');
const passwordRepeatError = document.querySelector('.form__error--password-repeat');

const emailInput = document.querySelector('.form__input--email');
const emailError = document.querySelector('.form__error--email');

const clearBtn = document.querySelector('.form__btn--clear');
const sendBtn = document.querySelector('.form__btn--send');

const popup = document.querySelector('form__popup');

const inputs = [usernameInput, passwordInput, passwordRepeatInput, emailInput]



const checkForm = (inputs) => {
    
    inputs.forEach(object => {
        if(object.value === ''){
            showErrors(object,object.placeholder)
        }else{
            removeErrors(object)
        }
    })
}

const showErrors = (input,msg) => {

    const formBox = input.parentElement
    const errorMsg = formBox.querySelector('.form__error')

    formBox.classList.add('form__box-error')
    errorMsg.classList.add('form__error-active')
    errorMsg.textContent = msg
    
}

const removeErrors = (input) => {
    const formBox = input.parentElement
    const errorMsg = formBox.querySelector('.form__error')

    formBox.classList.remove('form__box-error')
    errorMsg.classList.remove('form__error-active')
    errorMsg.textContent = ''
}

const checkLength = (input,min) => {

    if(input.value.length < min){
        const labelTag = input.previousElementSibling.textContent
        showErrors(input, `${labelTag.slice(0, -1)} składa się z przynajmniej ${min} znaków.`)
    }
}

const checkPasswords = (pass1,pass2) => {

    if(pass1.value !== pass2.value){
        showErrors(pass2,'Hasła muszą być takie same')
        
    }
    
}

sendBtn.addEventListener('click',(e)=>{
    e.preventDefault()

    checkForm(inputs)
    checkLength(usernameInput,5)
    checkLength(passwordInput,8)
    checkPasswords(passwordInput,passwordRepeatInput)
})

clearBtn.addEventListener('click',(e)=>{
    e.preventDefault()

    inputs.forEach(object =>{
        object.value = ''
    })
})