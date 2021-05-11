{
    const currencyConverter = () => {
        const haveElement = document.querySelector(".js-currency__have");
        const wantElement = document.querySelector(".js-currency__want");
        const currencyElement = document.querySelector(".js-currency");

        const have = haveElement.value;
        const currency = currencyElement.value;

        wantElement.value = have / currency;
        wantElement.value = (have / currency).toFixed(2);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("input", currencyConverter);
    };
    init();
}