
const titleElement = document.getElementById('my-title');
const btnElement = document.querySelector('#action-btn');

btnElement.addEventListener('click', function() {
    titleElement.textContent = "Hello Mahmoud";
    titleElement.classList.add('active');
});