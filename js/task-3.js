const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function() {
  // Очищаем значение инпута от пробелов по краям
  const trimmedValue = this.value.trim();
  
  // Проверяем, пустое ли значение после очистки
  if (trimmedValue === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = trimmedValue;
  }
});