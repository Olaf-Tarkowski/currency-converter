let formElement = document.querySelector(".js-form");
let haveElement = document.querySelector(".js-currency__have");
let wantElement = document.querySelector(".js-currency__want");
let currencyElement = document.querySelector(".js-currency");



formElement.addEventListener("input", () => {
    let have = haveElement.value;
    let currency = currencyElement.value;

    wantElement.value = have / currency;
    wantElement.value = (have / currency).toFixed(2);
    console.log(wantElement);
})

