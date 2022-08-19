function phoneUpdatePrice(isIncarse){
 const phoneInput = document.getElementById('phone-input');
    const phoneInputString = phoneInput.value;
    const phoneInputValue = parseInt(phoneInputString);
    let newPhoneCaunt;
    if(isIncarse === true){
        newPhoneCaunt = phoneInputValue + 1;
    
    }
    else{
    
        newPhoneCaunt = phoneInputValue - 1;
    }
    phoneInput.value = newPhoneCaunt;
    return newPhoneCaunt;
}

function totalPhoneCountUpdate(newPhoneCaunt){

    const PhonePrice = document.getElementById('phone-price');
    const totalPhonePrice = newPhoneCaunt * 1219;
    PhonePrice.innerText = totalPhonePrice;
}




document.getElementById('phone-plus-btn').addEventListener('click', function () {
   
    ///***---function sara ai vabe hobe---***///

    // const phoneInput = document.getElementById('phone-input');
    // const phoneInputString = phoneInput.value;
    // const phoneInputValue = parseInt(phoneInputString);
    // const newPhoneCaunt = phoneInputValue + 1;
    // phoneInput.value = newPhoneCaunt;

    // const PhonePrice = document.getElementById('phone-price');
    // const totalPhonePrice = newPhoneCaunt * 1219;
    // PhonePrice.innerText = totalPhonePrice;

    const newPhoneCaunt = phoneUpdatePrice(true)
    totalPhoneCountUpdate(newPhoneCaunt)
    setSubTotalAll()

    

})
document.getElementById('phone-minus-btn').addEventListener('click', function () {
    ///***---function sara ai vabe hobe---***///

    // const phoneInput = document.getElementById('phone-input');
    // const phoneInputString = phoneInput.value;
    // const phoneInputValue = parseInt(phoneInputString);
    // const newPhoneCaunt = phoneInputValue - 1;
    // phoneInput.value = newPhoneCaunt
    // const newPhoneCaunt = phoneUpdatePrice(false)

    // const PhonePrice = document.getElementById('phone-price');
    // const totalPhonePrice = newPhoneCaunt * 1219;
    // PhonePrice.innerText = totalPhonePrice;

    const newPhoneCaunt = phoneUpdatePrice(false)
    totalPhoneCountUpdate(newPhoneCaunt)
    setSubTotalAll()
})