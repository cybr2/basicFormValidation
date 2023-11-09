const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error')
const popUpBox = document.querySelector('.popUp');

const form = document.getElementById('my-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    validateForm();
});

const validateForm = () => {
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
       submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(() => {
            submitError.style.display = 'none';
        },3000)
        return false
    }

    openPopUp();  
}

  

const validateName = () => {
    const name = document.getElementById('contact-name').value;

    if(name.length === 0){
        nameError.innerHTML = 'Name is required';
        return false
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

const validatePhone = () => {
    const phone = document.getElementById('contact-phone').value;

    if(phone.length === 0){
        phoneError.innerHTML = 'Phone no. is required';
        return false
    }


    if(phone.startsWith('63')){
        if(phone.length !== 12){
            phoneError.innerHTML = 'Phone no. should be 11 digits';
            return false;
        }
        if(!phone.match(/^[0-9]{12}$/)){
            phoneError.innerHTML = 'only digit please ';
            return false;
        }
    }else if(phone.startsWith('09')){
        if(phone.length !== 11){
            phoneError.innerHTML = 'Phone no. should be 11 digits';
            return false;
        }
        if(!phone.match(/^[0-9]{11}$/)){
            phoneError.innerHTML = 'only digit please ';
            return false;
        } 
    }else{
        phoneError.innerHTML = 'start with 63 or 0'
        return false;
    }
    
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
const validateEmail = () => {
    const email = document.getElementById('contact-email').value;

    if(email.length === 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
       emailError.innerHTML = 'Email Invalid';
       return false; 
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

const validateMessage = () => {
    const message = document.getElementById('contact-message').value;
    const required = 30;
    const left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + ' more characters required'
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true; 
}


const openPopUp = () => {
    popUpBox.classList.add('open-popUp');
  };
const closePopUp = () => {
    popUpBox.classList.remove('open-popUp');
    form.querySelectorAll('input, textarea, span').forEach(element => {
        element.value = '';
        element.innerHTML = '';
      });
}

