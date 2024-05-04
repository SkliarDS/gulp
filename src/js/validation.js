 /* Валидация */ 
const validation_forms = document.querySelectorAll('[data-form-validation]');
validation_forms.forEach(form => {
    const form_button = form.querySelector('.send-button');
    const form_checkbox = form.querySelector('[type="checkbox"]');        
    const form_phone = form.querySelector('[data-form-phone]');        
    const form_input = form.querySelector('[data-form-text]');
  
    function validatePhoneNumber(phoneNumber) {
        const phoneDigits = phoneNumber.replace(/\D/g, ''); 
        return phoneDigits.length === 11;
    };

    form_input.addEventListener('blur', () => {
        if(form_input.value.trim() == ''){
            form_input.classList.add('is-not-valid');                    
        } else {
            form_input.classList.remove('is-not-valid');
        }
        validation();
        console.log('blur:',form_input);
    });
    form_input.addEventListener('input', () => {
        if(form_input.value.trim() !== ''){
            form_input.classList.remove('is-not-valid');                    
        } else {
            form_input.classList.add('is-not-valid');
        }
        validation();
        console.log('form_input:',form_input);
    }); 

    form_phone.addEventListener('blur', () => {
        if(!validatePhoneNumber(form_phone.value.trim())){
            form_phone.classList.add('is-not-valid');                    
        } else {
            form_phone.classList.remove('is-not-valid');
        }
        validation();
        console.log('blur:',form_phone);
    });
    form_phone.addEventListener('input', () => {
        if(validatePhoneNumber(form_phone.value.trim())){
            form_phone.classList.remove('is-not-valid');                    
        } else {
            form_phone.classList.add('is-not-valid');
        }
        validation();
        console.log('form_phone:',validatePhoneNumber(form_phone.value.trim()));
    });           
  
    function validation(){
        let valid = true;
        const checkbox_checked = form_checkbox.checked;
        
        if(form_input.value.trim() == ''){
            valid = false;
        };
        if(!validatePhoneNumber(form_phone.value.trim())){
            valid = false;
        };       
        
        if(valid && checkbox_checked){
            form_button.disabled = false;
        } else {
            form_button.disabled = true;
        };
    }
    form_checkbox.addEventListener('change', validation);

});


