const range = document.querySelector(".my-range ");
const amount = document.querySelector(".loan-amount");
const limit = document.querySelector(".credit-limit");

range.addEventListener("input", function(){
    amount.innerHTML = range.value + '<img class="currency currency-bg" src="./img/green-eur.png" alt="eur">';
    if (amount.innerText < 200) {
        limit.innerHTML= '<img class="info-icon"src="./img/i.png" alt="info-icon">Summa iekļaujas Jūsu kredītlimitā';
    } else {
        limit.innerHTML= '<img class="info-icon"src="./img/i.png" alt="info-icon">Summa neiekļaujas Jūsu kredītlimitā';
    }
})

