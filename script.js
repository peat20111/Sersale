document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Дякуємо за покупку! Ми зв'яжемося з вами найближчим часом.");
        });
    });
});
