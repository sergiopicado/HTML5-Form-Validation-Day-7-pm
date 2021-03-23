const submitForm = document.getElementById("formulario")

submitForm.addEventListener("submit", function (event) {
    event.preventDefault()

  
    let creditcard = document.getElementById("creditcard");
    const creditcardPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
    let result = creditcardPattern.test(creditcard.value)
    if (!result) {
        creditcard.classList.add("is-invalid");
    } else {
        creditcard.classList.remove("is-invalid");
        creditcard.classList.add("is-valid");
    }

   
    let cvc = document.getElementById("cvc");
    if (cvc.value.length <= 2 || cvc.value.length >= 4) {
        cvc.classList.add("is-invalid");
    } else {
        cvc.classList.remove("is-invalid");
        cvc.classList.add("is-valid");
    }

   
    let amount = document.getElementById("amount");
    const number = /^[0-9]+$/;
    let resultAmount = number.test(amount.value);
    if (!resultAmount)  {
        amount.classList.add("is-invalid");
     } else {
        amount.classList.remove("is-invalid");
        amount.classList.add("is-valid");
    }

    // First Name
    let letter1 = /^[a-zA-Z\s]*$/;
    let firstName = document.getElementById("firstName");
    let resultFirstName = letter1.test(firstName.value);
    if (!resultFirstName)  {
        firstName.classList.add("is-invalid");
     } else {
        firstName.classList.remove("is-invalid");
        firstName.classList.add("is-valid");
    }

    // Last Name
    let letter2 = /^[a-zA-Z\s]*$/;
    let lastName = document.getElementById("lastName");
    let resultLastName = letter2.test(lastName.value);
    if (!resultLastName)  {
        lastName.classList.add("is-invalid");   
     } else {
        lastName.classList.remove("is-invalid");
        lastName.classList.add("is-valid");
    }

    // City
    const letter3 = /^[a-zA-Z\s]*$/;
    let city = document.getElementById("city");
    let cityResult = letter3.test(city.value);
    if (!cityResult || cityResult.length == 0) {
        city.classList.add("is-invalid");
    } else {
        city.classList.remove("is-invalid");
        city.classList.add("is-valid");   
    }

    // State
    let state = document.getElementById("inputState");
    if (state.value == "Pick a State") {
        state.classList.add("is-invalid");
    } else {
        state.classList.remove("is-invalid");
        state.classList.add("is-valid");
    }

    // Postal Code
    let postal = document.getElementById("postalCode");
    if (postal.value.length == 0 || postal.value.length == 6 || postal.value.length == 10) {
        postal.classList.add("is-invalid");
    } else {
        postal.classList.remove("is-invalid");
        postal.classList.add("is-valid");   
    }
    
}

);