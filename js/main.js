const usernameInput = document.querySelector('.form__input--username');
const passwordInput = document.querySelector('.form__input--password');
const passwordRepeatInput = document.querySelector('.form__input--password-repeat');
const emailInput = document.querySelector('.form__input--email');
const clearBtn = document.querySelector('.form__btn--clear');
const sendBtn = document.querySelector('.form__btn--send');
const popup = document.querySelector('.form__popup');
const popupExit = document.querySelector('.form__btn--close')
const inputs = [usernameInput, passwordInput, passwordRepeatInput, emailInput]


const showErrors = (input,msg) => {
    const formBox = input.parentElement
    const errorMsg = formBox.querySelector('.form__error')
    
    formBox.classList.add('form__box-error')
    errorMsg.classList.add('form__error-active')
    errorMsg.textContent = msg
}


const clearErrors = (input) => {
    const formBox = input.parentElement
    const errorMsg = formBox.querySelector('.form__error')
    
    formBox.classList.remove('form__box-error')
    errorMsg.classList.remove('form__error-active')
    errorMsg.textContent = ''
}

const checkLength = (input,min) => {

    if(input.value.length < min){
        showErrors(input,`${input.previousElementSibling.textContent.slice(0,-1)} musi składać się z minimum ${min} znaków.`)
    }


}

const checkPasswords = (pass1,pass2) => {
    
    if(pass1.value !== pass2.value){
        showErrors(pass2,'Hasła muszą być takie same')
    }

}

const checkEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/

    if(!re.test(email.value)){
        showErrors(email,'Adres E-mail jest nie poprawny.')
    }
    
}

const checkForm = (inputs) => {
    
    inputs.forEach(Object =>{

        if(Object.value ===''){
            showErrors(Object,Object.placeholder)
        }else{
            clearErrors(Object)
        }

    })

   
}


const checkError = () => {
    const allInputs = document.querySelectorAll('.form__box')
    let errorCount = 0

    allInputs.forEach(Object=>{
        if(Object.classList.contains('form__box-error')){
            errorCount++
        }
    })
    
   if(errorCount === 0){
        popup.classList.add('form__popup--is-active')
   }
}

sendBtn.addEventListener('click',(e)=>{
    e.preventDefault()

    checkForm(inputs)
    checkLength(usernameInput,6)
    checkLength(passwordInput,8)
    checkPasswords(passwordInput,passwordRepeatInput)
    checkEmail(emailInput)
    checkError()
})





clearBtn.addEventListener('click',(e)=>{
    e.preventDefault()

    inputs.forEach(Object => {
        Object.value = ''
        
        clearErrors(Object)
    })
})

popupExit.addEventListener('click',(e)=>{
    e.preventDefault()

    popup.classList.remove('form__popup--is-active')

})