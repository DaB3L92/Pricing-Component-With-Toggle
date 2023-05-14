
const switchButton = document.querySelector(".switch");

switchButton.addEventListener("click", () => {
    switchButton.classList.toggle("switchOn");
    changePrice();
});

/* $(document).ready(function () {

    $('.switch').click(function () {
        $(this).toggleClass("switchOn");
        changePrice();
    });

}); */

function changePrice() {
    let monthly = document.querySelectorAll(".monthly");
    monthly.forEach(monthly => monthly.classList.toggle("hidden"));

    let annually = document.querySelectorAll(".annually");
    annually.forEach(annually => annually.classList.toggle("hidden"));
}