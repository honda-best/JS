const linktext = document.querySelector('a');
linktext.addEventListener('click', (event) => {
    event.preventDefault();
    const userText = prompt('Введите текст');
    console.log(userText);
    linktext.textContent = userText;
}
)
