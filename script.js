document.getElementById('forgiveButton').addEventListener('click', function() {
    var container = document.querySelector('.container');
    var responseMessage = document.createElement('div');
    responseMessage.classList.add('response-message', 'bounce');
    responseMessage.textContent = 'I Love You More Lokkhi Jaaan Pakhi Mayaboti Amr!🙈❤️❤️❤️';
    container.appendChild(responseMessage);
    responseMessage.style.display = 'block';
});
