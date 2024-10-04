window.addEventListener('load', function() {
  document.getElementById('preloader').style.display = 'none';
});
function showPreloaderAndRedirect() {
  document.getElementById('preloader').style.display = 'flex'; // Показуємо прелоадер
  setTimeout(function() {
    window.location.href ="./Registration.html" // Перенаправлення на сторінку реєстрації через 1 сек
  }, 1000);
}
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");


openModalBtn.onclick = function() {
    modal.style.display = "block";
};


closeModalBtn.onclick = function() {
    modal.style.display = "none";
};


window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};