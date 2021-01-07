let inputText = document.querySelector('input');
inputText.addEventListener('input', () => {
    duplicateField.textContent = inputText.value;
   
}
)

let pushbutton = document.querySelector('button');
    pushbutton.addEventListener('click', (evt) => {
    evt.preventDefault();
    console.log(inputText.value);
    duplicateField.textContent = "";
    inputText.value = "";
}
)