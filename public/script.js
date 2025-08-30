const form = document.getElementById('chatForm');
form .addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяет перезагрузку страницы
    console.log('Форма отправлена');
});
const messageInput = document.getElementById('message');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    console.log('Отправляем сообщение:', messageInput.value);
    messageInput.value = ''; // Очищаем поле
});
console.log("Скрипт подключён и работает!");
